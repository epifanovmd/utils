import {
  Container as InversifyContainer,
  inject as Inject,
  injectable as Injectable,
} from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import shortid from "shortid";

export interface IIoCInterface<T> {
  readonly Tid: string;

  (options?: { inSingleton?: boolean }): (
    target: any,
    targetKey?: string,
    index?: number | undefined,
  ) => void;

  getInstance(): T;
}

const iocContainer = new InversifyContainer();

const { lazyInject } = getDecorators(iocContainer);

function iocDecorator<TInterface>(name?: string): IIoCInterface<TInterface> {
  const tid = name || shortid.generate();

  function iocDecoratorFactory(options?: { inSingleton?: boolean }) {
    return function iocDecorator(
      target: any,
      targetKey?: string,
      index?: number | undefined,
    ) {
      if (index !== undefined) {
        // При использовании на параметре конструкра
        Inject(tid)(target, targetKey!, index);
      } else if (targetKey) {
        // При использовании на поле класса
        lazyInject(tid)(target, targetKey);
      } else {
        // При использовании на классе
        Injectable()(target);
        if (options?.inSingleton) {
          iocContainer.bind<TInterface>(tid).to(target).inSingletonScope();
        } else {
          iocContainer.bind<TInterface>(tid).to(target);
        }
      }
    };
  }

  iocDecoratorFactory.Tid = tid;
  iocDecoratorFactory.getInstance = () => iocContainer.get<TInterface>(tid);

  return iocDecoratorFactory;
}

export { Injectable, Inject, iocDecorator };
