import isEmpty from "lodash/isEmpty";
import { action, computed, makeObservable, observable } from "mobx";

import { isFunction, LambdaValue, resolveLambdaValue } from "../../helpers";

enum DataHolderState {
  READY = "READY",
  INITIALIZATION = "INITIALIZATION",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

export interface IDataHolderState {
  isLoading: boolean;
  isError: boolean;
  isReady: boolean;
  isFilled: boolean;
  isEmpty: boolean;
}

export class DataHolder<T, E extends Error | string = string>
  implements IDataHolderState
{
  public error?: string = undefined;
  private _d: LambdaValue<T | undefined> = undefined;
  private _state: DataHolderState = DataHolderState.INITIALIZATION;

  constructor(data?: LambdaValue<T>) {
    if (data) {
      this.setData(data);
    }
    makeObservable(
      this,
      {
        // @ts-ignore
        _state: observable,
        _d: observable,
        d: computed,
        isLambda: computed,
        error: observable,
        isReady: computed,
        isLoading: computed,
        isError: computed,
        isEmpty: computed,
        isFilled: computed,
        setLoading: action,
        clear: action,
        setPending: action,
        setData: action,
        setError: action,
      },
      { autoBind: true },
    );
  }

  public get d() {
    return resolveLambdaValue(this._d);
  }

  public get isLambda() {
    return isFunction(this._d);
  }

  public get isReady() {
    return this._state === DataHolderState.READY;
  }

  public get isLoading() {
    return this._state === DataHolderState.LOADING;
  }

  public get isError() {
    return this._state === DataHolderState.ERROR;
  }

  public get isEmpty() {
    return this.isReady && isEmpty(this.d);
  }

  public get isFilled() {
    return this.isReady && !isEmpty(this.d);
  }

  public setLoading = () => {
    this._state = DataHolderState.LOADING;

    return this;
  };

  public clear = () => {
    this._d = undefined;
    this._state = DataHolderState.INITIALIZATION;

    return this;
  };

  public setPending = () => {
    this._state = DataHolderState.INITIALIZATION;

    return this;
  };

  public setData = (data: LambdaValue<T>) => {
    this._d = data;
    this._state = DataHolderState.READY;

    return this;
  };

  public setError = (error: E) => {
    this.error = error instanceof Error ? error.message : error;
    this._state = DataHolderState.ERROR;

    return this;
  };
}
