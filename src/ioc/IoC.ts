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
}

interface DecoratorOptions {
  inSingleton?: boolean;
}

const iocContainer = new InversifyContainer();

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

        if (iocContainer.isBound(name)) {
          iocContainer.unbind(name);
        }

        if (name) {
          if (options?.inSingleton) {
            iocContainer.bind<TInterface>(name).to(target).inSingletonScope();
          } else {
            iocContainer.bind<TInterface>(name).to(target);
          }
        }
      }
    };
  }

  iocDecoratorFactory.Tid = name;
  iocDecoratorFactory.getInstance = () => iocContainer.get<TInterface>(name);

  return iocDecoratorFactory;
}

export { Inject, Injectable, iocDecorator };
