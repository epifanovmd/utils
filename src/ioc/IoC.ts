import "reflect-metadata";

import { ResolutionContext } from "@inversifyjs/core";
import { inject, injectable, named, optional, tagged } from "inversify";
import decorators from "inversify-inject-decorators";
import shortid from "shortid";

import { iocContainer } from "./container";

export type TDecoratorMode = "named" | "tagged" | "unknown";

/**
 * Параметры декоратора службы.
 */
export interface IServiceDecoratorParams<
  M extends TDecoratorMode = TDecoratorMode,
> {
  mode?: M;
}

/**
 * Опции по умолчанию для декоратора IoC.
 */
export interface IIoCTaggedDecoratorDefaultOptions {
  inSingleton?: boolean;
  // use only for getInstance or for inject
  optional?: true;
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

type IIoCDecoratorOptions<M extends TDecoratorMode> = M extends "named"
  ? IIoCNamedDecoratorOptions
  : M extends "tagged"
  ? IIoCTaggedDecoratorOptions
  : IIoCTaggedDecoratorDefaultOptions;

type TGetInstanceOptions<M extends TDecoratorMode> = M extends "named"
  ? Omit<IIoCNamedDecoratorOptions, "inSingleton">
  : M extends "tagged"
  ? Omit<IIoCTaggedDecoratorOptions, "inSingleton">
  : IIoCTaggedDecoratorDefaultOptions;

/**
 * Интерфейс декоратора IoC.
 */
export interface IoCServiceDecorator<T, M extends TDecoratorMode> {
  readonly Tid: string;

  (options?: IIoCDecoratorOptions<M>): (
    target: any,
    targetKey?: string,
    index?: number | undefined,
  ) => void;

  getInstance<Options extends TGetInstanceOptions<M>>(
    options?: Options,
  ): Options extends { optional: true } ? T | undefined : T;

  toConstantValue(
    value: T,
    options?: IIoCDecoratorOptions<M>,
  ): IoCServiceDecorator<T, M>;

  toDynamicValue(
    value: (context: ResolutionContext) => T,
    options?: IIoCDecoratorOptions<M>,
  ): IoCServiceDecorator<T, M>;

  toFactory<
    Args extends any[],
    Return extends (...args: Args) => ((...args: Args) => T) | T,
  >(
    provider: (context: ResolutionContext) => Return,
    options?: IIoCDecoratorOptions<M>,
  ): IoCServiceDecorator<Return, M>;

  toProvider<
    Args extends any[],
    Return extends (
      ...args: Args
    ) => ((...args: Args) => Promise<T>) | Promise<T>,
  >(
    provider: (context: ResolutionContext) => Return,
    options?: IIoCDecoratorOptions<M>,
  ): IoCServiceDecorator<Return, M>;

  unbind(): Promise<void>;
}

const isNamedOptions = (opts: any): opts is IIoCNamedDecoratorOptions => {
  return opts && "named" in opts;
};

const isTaggedOptions = (opts: any): opts is IIoCTaggedDecoratorOptions => {
  return opts && "tagged" in opts;
};

const { lazyInject, lazyInjectNamed, lazyInjectTagged } =
  decorators(iocContainer);

/**
 * Получает экземпляр службы из контейнера IoC.
 *
 * @param id - Идентификатор службы.
 * @param options - Опции декоратора (опционально).
 * @returns Экземпляр службы или undefined, если не найдено и опция optional установлена.
 */
export const getServiceInstance = <
  T,
  M extends TDecoratorMode,
  Options extends TGetInstanceOptions<M>,
  R = Options extends { optional: true } ? T | undefined : T,
>(
  id: string,
  options?: Options,
): R => {
  const isOptional = options?.optional ?? false;

  if (isNamedOptions(options)) {
    const isBound = iocContainer.isBound(id, { name: options.named });

    return (
      isBound || !isOptional
        ? iocContainer.get<R>(id, { name: options.named })
        : undefined
    ) as R;
  }

  if (isTaggedOptions(options)) {
    const { key, value } = options.tagged;
    const isBound = iocContainer.isBound(id, { tag: { key, value } });

    return (
      isBound || !isOptional
        ? iocContainer.get<R>(id, { tag: { key, value } })
        : undefined
    ) as R;
  }

  const isBound = iocContainer.isBound(id);

  return (isBound || !isOptional ? iocContainer.get<R>(id) : undefined) as R;
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
  M extends TDecoratorMode = "unknown",
>(_params?: IServiceDecoratorParams<M>): IoCServiceDecorator<TInterface, M> {
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

        if (!iocContainer.isBound(name)) {
          const binding = iocContainer.bind<TInterface>(name).to(target);

          if (options?.inSingleton) {
            binding.inSingletonScope();
          }
          if (isNamedOptions(options)) {
            binding.whenNamed(options.named);
          } else if (isTaggedOptions(options)) {
            binding.whenTagged(options.tagged.key, options.tagged.value);
          }
        }
      }
    };
  }

  serviceDecoratorFactory.Tid = name;
  /**
   * Получает экземпляр службы из контейнера IoC.
   *
   * @param options - Опции декоратора (исключая IIoCTaggedDecoratorDefaultOptions).
   * @returns Экземпляр службы.
   */
  serviceDecoratorFactory.getInstance = <
    Options extends TGetInstanceOptions<M>,
    R = Options extends { optional: true }
      ? TInterface | undefined
      : TInterface,
  >(
    options?: Options,
  ) => getServiceInstance<TInterface, M, Options, R>(name, options);

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
    if (!iocContainer.isBound(name)) {
      const binding = iocContainer.bind(name).toConstantValue(value);

      if (isNamedOptions(options)) {
        binding.whenNamed(options.named);
      } else if (isTaggedOptions(options)) {
        binding.whenTagged(options.tagged.key, options.tagged.value);
      }
    }

    return serviceDecoratorFactory;
  };

  /**
   * Связывает динамическое значение с декоратором службы.
   *
   * @param value - Функция, возвращающая значение.
   * @param options - Опции декоратора.
   * @returns Декоратор службы.
   */
  serviceDecoratorFactory.toDynamicValue = (
    value: (context: ResolutionContext) => TInterface,
    options?: IIoCDecoratorOptions<M>,
  ) => {
    if (!iocContainer.isBound(name)) {
      const binding = iocContainer.bind(name).toDynamicValue(value);

      if (isNamedOptions(options)) {
        binding.whenNamed(options.named);
      } else if (isTaggedOptions(options)) {
        binding.whenTagged(options.tagged.key, options.tagged.value);
      }
    }

    return serviceDecoratorFactory;
  };

  /**
   * Связывает динамическое значение с декоратором службы.
   *
   * @param factory - Фабрика.
   * @param options - Опции декоратора.
   * @returns Декоратор службы.
   */
  serviceDecoratorFactory.toFactory = (
    factory: (context: ResolutionContext) => TInterface,
    options?: IIoCDecoratorOptions<M>,
  ) => {
    if (!iocContainer.isBound(name)) {
      const binding = iocContainer.bind(name).toFactory(factory as never);

      if (isNamedOptions(options)) {
        binding.whenNamed(options.named);
      } else if (isTaggedOptions(options)) {
        binding.whenTagged(options.tagged.key, options.tagged.value);
      }
    }

    return serviceDecoratorFactory;
  };

  /**
   * Связывает динамическое значение с декоратором службы.
   *
   * @param provider - Провайдер.
   * @param options - Опции декоратора.
   * @returns Декоратор службы.
   */
  serviceDecoratorFactory.toProvider = (
    provider: (context: ResolutionContext) => TInterface,
    options?: IIoCDecoratorOptions<M>,
  ) => {
    if (!iocContainer.isBound(name)) {
      const binding = iocContainer.bind(name).toProvider(provider as never);

      if (isNamedOptions(options)) {
        binding.whenNamed(options.named);
      } else if (isTaggedOptions(options)) {
        binding.whenTagged(options.tagged.key, options.tagged.value);
      }
    }

    return serviceDecoratorFactory;
  };

  serviceDecoratorFactory.unbind = () => {
    return iocContainer.unbind(name);
  };

  return serviceDecoratorFactory as IoCServiceDecorator<TInterface, M>;
}

export { createServiceDecorator };
