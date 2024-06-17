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

function iocDecorator<TInterface>(): IoCDecorator<TInterface> {
  const meta = {
    id: "",
  };

  function iocDecoratorFactory(options?: DecoratorOptions) {
    return function iocDecorator(
      target: any,
      targetKey?: string,
      index?: number | undefined,
    ) {
      if (index !== undefined) {
        // При использовании на параметре конструкра
        Inject(meta.id)(target, targetKey!, index);
      } else if (targetKey) {
        // При использовании на поле класса
        lazyInject(meta.id)(target, targetKey);
      } else {
        // При использовании на классе
        Injectable()(target);
        console.log("target", target.name);

        meta.id = target.name ?? shortid();

        if (meta.id) {
          if (options?.inSingleton) {
            iocContainer
              .bind<TInterface>(meta.id)
              .to(target)
              .inSingletonScope();
          } else {
            iocContainer.bind<TInterface>(meta.id).to(target);
          }
        }
      }
    };
  }

  iocDecoratorFactory.Tid = meta.id;
  iocDecoratorFactory.getInstance = () => iocContainer.get<TInterface>(meta.id);

  return iocDecoratorFactory;
}

export { Inject, Injectable, iocDecorator };
