import { Canceler } from "axios";

import { isPromise } from "../helpers";
import { CancelablePromise } from "./Api.types";

export class CancelablePromiseRef {
  public ref: { abort?: () => void } = {};

  public extract = <R extends any>(promise: CancelablePromise<R>) => {
    this.ref.abort = promise.cancel;

    return promise;
  };
}

export const transformResponse = <T, R>(
  data: R | Promise<R>,
  transform: (res: R) => T,
): Promise<T> => {
  if (isPromise(data)) {
    return data.then(transform);
  }

  return Promise.resolve(data).then(transform);
};

export class QueryRace {
  public queryRace: Map<string, Canceler> = new Map();
  private readonly _message: string;

  constructor(private message: string = "Race condition canceled") {
    this._message = message;
  }

  public apply = (endpoint: string, cancel: Canceler) => {
    this.cancel(endpoint);
    this.queryRace.set(endpoint, cancel);
  };

  public has = (endpoint: string) => this.queryRace.has(endpoint);

  public cancel = (endpoint: string) => {
    if (this.has(endpoint)) {
      this.queryRace.get(endpoint)?.(this._message);
      this.delete(endpoint);
    }
  };

  public delete = (endpoint: string) => {
    this.queryRace.delete(endpoint);
  };
}
