import "reflect-metadata";

import {
  Container as InversifyContainer,
  inject as Inject,
  injectable as Injectable,
} from "inversify";
import getDecorators from "inversify-inject-decorators";
import shortid from "shortid";

export interface IoCDecoratorOptions {
  inSingleton?: boolean;
}

export interface IoCDecorator<T> {
  readonly Tid: string;

  (options?: IoCDecoratorOptions): (
    target: any,
    targetKey?: string,
    index?: number | undefined,
  ) => void;

  getInstance(): T;
  toConstantValue(value: T): IoCDecorator<T>;
}

interface DecoratorOptions {
  inSingleton?: boolean;
}

export const iocContainer = new InversifyContainer();

export const iocBind = <T>(id: string) => {
  if (iocContainer.isBound(id)) {
    iocContainer.unbind(id);
  }

  return iocContainer.bind<T>(id);
};

export const iocGet = <T>(id: string) => iocContainer.get<T>(id);

const { lazyInject } = getDecorators(iocContainer);

function iocDecorator<TInterface>(
  name: string = shortid(),
): IoCDecorator<TInterface> {
  function iocDecoratorFactory(options?: DecoratorOptions) {
    return function iocDecorator(
      target: any,
      targetKey?: string,
      index?: number | undefined,
    ) {
      if (index !== undefined) {
        // При использовании на параметре конструкра
        Inject(name)(target, targetKey!, index);
      } else if (targetKey) {
        // При использовании на поле класса
        lazyInject(name)(target, targetKey);
      } else {
        // При использовании на классе
        Injectable()(target);

        if (options?.inSingleton) {
          iocBind<TInterface>(name).to(target).inSingletonScope();
        } else {
          iocBind<TInterface>(name).to(target);
        }
      }
    };
  }

  iocDecoratorFactory.Tid = name;
  iocDecoratorFactory.getInstance = () => iocGet<TInterface>(name);
  iocDecoratorFactory.toConstantValue = <TInterface>(value: TInterface) => {
    iocBind<TInterface>(name).toConstantValue(value);

    return iocDecoratorFactory;
  };

  return iocDecoratorFactory;
}

export { Inject, Injectable, iocDecorator };
