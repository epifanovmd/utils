import "reflect-metadata";

import { inject, injectable, named, optional, tagged } from "inversify";
import decorators from "inversify-inject-decorators";
import shortid from "shortid";

import { iocContainer } from "./container";

/**
 * Параметры декоратора службы.
 */
export interface IServiceDecoratorParams {}

/**
 * Опции по умолчанию для декоратора с тегами IoC.
 */
export interface IIoCTaggedDecoratorDefaultOptions {
  inSingleton?: boolean;
  optional?: boolean;
}

/**
 * Опции декоратора с именем IoC.
 */
export interface IIoCNamedDecoratorOptions
  extends IIoCTaggedDecoratorDefaultOptions {
  named: string;
}

/**
 * Опции декоратора с тегами IoC.
 */
export interface IIoCTaggedDecoratorOptions
  extends IIoCTaggedDecoratorDefaultOptions {
  tagged: { key: string; value: string | number };
}

type IIoCDecoratorOptions<M extends "named" | "tagged" | unknown> =
  M extends "named"
    ? IIoCNamedDecoratorOptions
    : M extends "tagged"
    ? IIoCTaggedDecoratorOptions
    : IIoCTaggedDecoratorDefaultOptions;

/**
 * Интерфейс декоратора IoC.
 */
export interface IoCServiceDecorator<
  T,
  M extends "named" | "tagged" | unknown,
> {
  readonly Tid: string;

  (options?: IIoCDecoratorOptions<M>): (
    target: any,
    targetKey?: string,
    index?: number | undefined,
  ) => void;

  getInstance(
    named?: string,
    tagged?: { key: string; value: string | number },
  ): T;

  toConstantValue(
    value: T,
    options?: IIoCDecoratorOptions<M>,
  ): IoCServiceDecorator<T, M>;
}

const { lazyInject, lazyInjectNamed, lazyInjectTagged } =
  decorators(iocContainer);

/**
 * Получает экземпляр службы из контейнера IoC.
 *
 * @param id - Идентификатор службы.
 * @param named - Имя службы (опционально).
 * @param tagged - Тег службы (опционально).
 * @returns Экземпляр службы.
 */
export const getServiceInstance = <T>(
  id: string,
  named?: string,
  tagged?: { key: string; value: string | number },
) => {
  if (named) {
    return iocContainer.getNamed<T>(id, named);
  }
  if (tagged) {
    return iocContainer.getTagged<T>(id, tagged.key, tagged.value);
  }

  return iocContainer.get<T>(id);
};

const isNamedOptions = (opts: any): opts is IIoCNamedDecoratorOptions => {
  return opts && "named" in opts;
};

const isTaggedOptions = (opts: any): opts is IIoCTaggedDecoratorOptions => {
  return opts && "tagged" in opts;
};

/**
 * Создает декоратор службы.
 *
 * @template TInterface - Тип интерфейса службы.
 * @template M - Тип метаданных ("named" или "tagged").
 * @returns Декоратор службы.
 */
function createServiceDecorator<
  TInterface,
  M extends "named" | "tagged" | unknown = unknown,
>(): IoCServiceDecorator<TInterface, M> {
  const name: string = shortid();

  /**
   * Фабрика декоратора службы.
   *
   * @param options - Опции декоратора.
   * @returns Декоратор службы.
   */
  function serviceDecoratorFactory(options?: IIoCDecoratorOptions<M>) {
    return function serviceDecorator(
      target: any,
      targetKey?: string,
      index?: number | undefined,
    ) {
      if (index !== undefined) {
        // При использовании на параметре конструктора
        inject(name)(target, targetKey!, index);

        if (isNamedOptions(options)) {
          named(options.named)(target, targetKey!, index);
        }
        if (isTaggedOptions(options)) {
          tagged(options.tagged.key, options.tagged.value)(
            target,
            targetKey!,
            index,
          );
        }
        if (options?.optional) {
          optional()(target, targetKey!, index);
        }
      } else if (targetKey) {
        // При использовании на поле класса
        if (options?.optional) {
          inject(name)(target, targetKey);
        } else {
          lazyInject(name)(target, targetKey);
        }

        if (isNamedOptions(options)) {
          if (options.optional) {
            named(options.named)(target, targetKey);
          } else {
            lazyInjectNamed(name, options.named)(target, targetKey);
          }
        } else if (isTaggedOptions(options)) {
          if (options.optional) {
            tagged(options.tagged.key, options.tagged.value)(target, targetKey);
          } else {
            lazyInjectTagged(
              name,
              options.tagged.key,
              options.tagged.value,
            )(target, targetKey);
          }
        }

        if (options?.optional) {
          optional()(target, targetKey);
        }
      } else {
        // При использовании на классе
        injectable()(target);

        let binding = iocContainer.bind<TInterface>(name).to(target);

        if (options?.inSingleton) {
          binding.inSingletonScope();
        }
        if (isNamedOptions(options)) {
          binding.whenTargetNamed(options.named);
        } else if (isTaggedOptions(options)) {
          binding.whenTargetTagged(options.tagged.key, options.tagged.value);
        } else {
          iocContainer.rebind<TInterface>(name).to(target);
        }
      }
    };
  }

  serviceDecoratorFactory.Tid = name;
  /**
   * Получает экземпляр службы из контейнера IoC.
   *
   * @param named - Имя службы (опционально).
   * @param tagged - Тег службы (опционально).
   * @returns Экземпляр службы.
   */
  serviceDecoratorFactory.getInstance = (
    named?: string,
    tagged?: { key: string; value: string | number },
  ) => getServiceInstance<TInterface>(name, named, tagged);

  /**
   * Связывает константное значение с декоратором службы.
   *
   * @param value - Константное значение.
   * @param options - Опции декоратора.
   * @returns Декоратор службы.
   */
  serviceDecoratorFactory.toConstantValue = (
    value: TInterface,
    options?: IIoCDecoratorOptions<M>,
  ) => {
    let binding = iocContainer.bind<TInterface>(name).toConstantValue(value);

    if (isNamedOptions(options)) {
      binding.whenTargetNamed(options.named);
    } else if (isTaggedOptions(options)) {
      binding.whenTargetTagged(options.tagged.key, options.tagged.value);
    } else {
      iocContainer.rebind<TInterface>(name).toConstantValue(value);
    }

    return serviceDecoratorFactory;
  };

  return serviceDecoratorFactory;
}

export { createServiceDecorator };
