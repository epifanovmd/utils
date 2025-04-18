import debounce from "lodash/debounce";
import { action, computed, makeObservable, observable } from "mobx";

export enum ListCollectionLoadState {
  INITIALIZATION = "INITIALIZATION",
  READY = "READY",
  LOADING = "LOADING",
  ERROR = "ERROR",
  REFRESHING = "REFRESHING",
  LOADING_MORE = "LOADING_MORE",
}

type Collection<T> = T[];

// eslint-disable-next-line symbol-description
const ITEM_KEY = Symbol();

type KeyExtractor<T> = (item: T) => string | number;

interface IListEvents {
  performLoad(): void;

  performRefresh(): void;

  performLoadMore(): void;
}

export interface RefreshArgs {
  offset: number;
  limit: number;
}

interface IOptions<Data, Args = any> {
  keyExtractor: KeyExtractor<Data>;
  onFetchData: (args: RefreshArgs & Args) => Promise<Data[]>;
  fetchDebounceWait?: number;
  pageSize?: number;
  reverse?: boolean;
}

interface IUpdateOptions {
  replace?: boolean;
}

export class ListCollectionHolder<
  Data,
  Args = any,
  E extends Error | string = string,
> implements IListEvents
{
  public error?: string = undefined;
  public d: Collection<Data> = [];
  private _isEndReached: boolean = false;
  private _state: ListCollectionLoadState =
    ListCollectionLoadState.INITIALIZATION;

  private _opts!: IOptions<Data, Args>;
  private _lastRefreshArgs?: RefreshArgs;

  constructor() {
    makeObservable(
      this,
      {
        error: observable,
        d: observable,
        // @ts-ignore
        _isEndReached: observable,
        _state: observable,
        isLoadingAllowed: computed,
        isLoading: computed,
        isRefreshing: computed,
        isLoadingMoreAllowed: computed,
        isLoadingMore: computed,
        isReady: computed,
        isError: computed,
        isEmpty: computed,
        updateData: action,
        clear: action,
        setError: action,
        setLoading: action,
        _setState: action,
      },
      { autoBind: true },
    );
  }

  public get isLoadingAllowed() {
    return (
      this._state === ListCollectionLoadState.READY ||
      this._state === ListCollectionLoadState.ERROR
    );
  }

  public get isLoading() {
    return this._state === ListCollectionLoadState.LOADING;
  }

  public get isRefreshing() {
    return this._state === ListCollectionLoadState.REFRESHING;
  }

  public get isLoadingMoreAllowed() {
    return (
      !this.isEmpty &&
      (this._state === ListCollectionLoadState.READY ||
        this._state === ListCollectionLoadState.ERROR) &&
      !this._isEndReached
    );
  }

  public get isLoadingMore() {
    return this._state === ListCollectionLoadState.LOADING_MORE;
  }

  public get isReady() {
    return this._state === ListCollectionLoadState.READY;
  }

  public get isError() {
    return this._state === ListCollectionLoadState.ERROR;
  }

  public get isEmpty() {
    return !this.d.length;
  }

  public initialize = (opts: IOptions<Data, Args>) => {
    this._opts = {
      ...opts,
    };

    this._setState(ListCollectionLoadState.READY);
  };

  public updateData = (data: Collection<Data>, opts?: IUpdateOptions) => {
    let merge = false;

    switch (this._state) {
      case ListCollectionLoadState.LOADING_MORE:
      case ListCollectionLoadState.READY:
        merge = true;
        break;
      case ListCollectionLoadState.REFRESHING:
      case ListCollectionLoadState.LOADING:
      default:
        merge = false;
        break;
    }

    if (opts && opts.replace) {
      merge = false;
    }

    this.d = merge ? this._mergeData(this.d, data) : data;

    this._isEndReached =
      this._lastPageSize > 0 && data.length < this._lastPageSize;
    this._setState(ListCollectionLoadState.READY);

    return this;
  };

  public clear = () => {
    this.d = [];
    this.error = undefined;
    this._isEndReached = false;
    this._lastRefreshArgs = undefined;
    this._setState(ListCollectionLoadState.READY);
  };

  public setError = (error: E) => {
    this.error = error instanceof Error ? error.message : error;
    this._setState(ListCollectionLoadState.ERROR);

    return this;
  };

  public setLoading = (clear: boolean = true) => {
    if (clear) {
      this.d = [];
    }
    this._setState(ListCollectionLoadState.LOADING);

    return this;
  };

  public setRefreshing = () => {
    this._setState(ListCollectionLoadState.REFRESHING);

    return this;
  };

  public setLoadingMore = () => {
    this._setState(ListCollectionLoadState.LOADING_MORE);

    return this;
  };

  public keyExtractor = (item: Data) => {
    let cachedKey = (item as any)[ITEM_KEY];

    if (!cachedKey) {
      cachedKey = this._opts.keyExtractor(item);
      (item as any)[ITEM_KEY] = cachedKey;
    }

    return cachedKey;
  };

  public performLoadMore = (args?: Args) => {
    if (this.isLoadingMoreAllowed) {
      this.setLoadingMore();

      return this._raiseOnFetchData(false, args) ?? Promise.resolve([]);
    }

    return Promise.resolve([]);
  };

  public performRefresh = (args?: Args) => {
    this._isEndReached = false;

    if (this.isLoadingAllowed) {
      if (this.isEmpty) {
        this.setLoading();
      } else {
        this.setRefreshing();
      }

      return this._raiseOnFetchData(true, args) ?? Promise.resolve([]);
    }

    return Promise.resolve([]);
  };

  public performLoad = (args?: Args) => {
    if (this.isLoadingAllowed) {
      this.clear();
      this.setLoading();

      return this._raiseOnFetchData(false, args) ?? Promise.resolve([]);
    }

    return Promise.resolve([]);
  };

  private _setState = (state: ListCollectionLoadState) => {
    this._state = state;
  };

  private get _refreshArgs(): RefreshArgs {
    return {
      offset: this.d.length,
      limit: this._opts.pageSize || 0,
    };
  }

  private get _lastPageSize(): number {
    return (this._opts.pageSize || 0) > 0 &&
      this._lastRefreshArgs &&
      this._lastRefreshArgs.limit > 0
      ? this._lastRefreshArgs.limit
      : 0;
  }

  private _mergeData = (
    source: Collection<Data>,
    merge: Collection<Data>,
  ): Collection<Data> => {
    if (merge.length === 0) {
      return source;
    }

    const result = [...source];

    merge.forEach(d => {
      const index = result.findIndex(
        i => this.keyExtractor(i) === this.keyExtractor(d),
      );

      if (index === -1) {
        if (this._opts.reverse) {
          result.unshift(d);
        } else {
          result.push(d);
        }
      } else {
        result[index] = d;
      }
    });

    return result;
  };

  private _raiseOnFetchData = (
    resetArgs?: boolean,
    args: Args = {} as Args,
  ) => {
    return debounce(() => {
      if (resetArgs) {
        this._lastRefreshArgs = {
          offset: 0,
          limit: this._opts.pageSize || 0,
        };
      } else {
        this._lastRefreshArgs = this._refreshArgs;
      }
      const refreshArgs: RefreshArgs & Args = {
        ...args,
        ...this._lastRefreshArgs,
      };

      return this._opts.onFetchData(refreshArgs);
    }, this._opts.fetchDebounceWait)();
  };
}
