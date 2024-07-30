import { action, computed, makeObservable, observable } from "mobx";

export enum CollectionLoadState {
  READY = "READY",
  INITIALIZATION = "INITIALIZATION",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

interface IDataHolderError {
  type?: string;
  code?: string;
  msg: string;
}

type Collection<T> = T[];

export class CollectionHolder<T> {
  public error?: IDataHolderError;
  public d: Collection<T> = [];

  private _state: CollectionLoadState = CollectionLoadState.INITIALIZATION;

  constructor(data?: Collection<T>) {
    if (data) {
      this.setData(data);
    }

    makeObservable(
      this,
      {
        error: observable,
        d: observable,
        // @ts-ignore
        _state: observable,
        isLoadingAllowed: computed,
        isLoading: computed,
        isReady: computed,
        isError: computed,
        isEmpty: computed,
        setData: action,
        clear: action,
        setError: action,
        setLoading: action,
        setReady: action,
      },
      { autoBind: true },
    );
  }

  public get isLoadingAllowed(): boolean {
    return (
      this._state === CollectionLoadState.READY ||
      this._state === CollectionLoadState.ERROR
    );
  }

  public get isLoading() {
    return this._state === CollectionLoadState.LOADING;
  }

  public get isReady() {
    return this._state === CollectionLoadState.READY;
  }

  public get isError() {
    return this._state === CollectionLoadState.ERROR;
  }

  public get isEmpty() {
    return !this.d.length;
  }

  public setData(data: Collection<T>) {
    this.d = data;
    this._state = CollectionLoadState.READY;

    return this;
  }

  public clear() {
    this.d = [];
    this._state = CollectionLoadState.INITIALIZATION;

    return this;
  }

  public setError(error: IDataHolderError) {
    this.error = error;
    this._state = CollectionLoadState.ERROR;

    return this;
  }

  public setLoading(clear: boolean = true) {
    if (clear) {
      this.d = [];
    }
    this._state = CollectionLoadState.LOADING;

    return this;
  }

  public setReady() {
    this._state = CollectionLoadState.READY;

    return this;
  }
}
