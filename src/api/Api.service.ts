import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  CanceledError,
} from "axios";
import { injectable, unmanaged } from "inversify";

import { promisify } from "../helpers";
import {
  ApiRequestConfig,
  ApiResponse,
  CancelablePromise,
  IApiService,
} from "./Api.types";
import { QueryRace } from "./Api.utils";

export const DEFAULT_AXIOS_HEADERS = new AxiosHeaders({
  Accept: "application/json",
  "Content-Type": "application/json",
});

@injectable()
export class ApiService implements IApiService {
  private readonly _instance: AxiosInstance;
  public queryRace = new QueryRace();

  constructor(@unmanaged() config?: Parameters<typeof axios.create>[0]) {
    this._instance = axios.create({
      timeout: 2 * 60 * 1000,
      headers: DEFAULT_AXIOS_HEADERS,
      ...config,
    });

    this._applyInterceptor();
  }

  get instance() {
    return this._instance;
  }

  public onRequest: IApiService["onRequest"] = callback => {
    this._instance.interceptors.request.use(
      async request => (await promisify(callback(request))) ?? request,
    );
  };

  public onResponse: IApiService["onResponse"] = callback => {
    this._instance.interceptors.response.use((async (response: ApiResponse) => {
      if (!response.error && response.data) {
        return (await promisify(callback(response))) ?? response;
      }

      return response;
    }) as any);
  };

  public onError: IApiService["onError"] = callback => {
    this._instance.interceptors.response.use((async (response: ApiResponse) => {
      if (response.error) {
        return (await promisify(callback(response))) ?? response;
      }

      return response;
    }) as any);
  };

  public get<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ) {
    return this.instancePromise<R>(
      { url: endpoint, method: "GET", params },
      config,
    );
  }

  public post<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ) {
    return this.instancePromise<R>(
      { url: endpoint, method: "POST", data: params },
      config,
    );
  }

  public patch<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ) {
    return this.instancePromise<R>(
      { url: endpoint, method: "PATCH", data: params },
      config,
    );
  }

  public put<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ) {
    return this.instancePromise<R>(
      { url: endpoint, method: "PUT", data: params },
      config,
    );
  }

  public delete<R = any>(endpoint: string, config?: ApiRequestConfig) {
    return this.instancePromise<R>({ url: endpoint, method: "DELETE" }, config);
  }

  instancePromise = <R = any, P = any>(
    config: AxiosRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>> => {
    const source = axios.CancelToken.source();

    const endpoint = (config.method ?? "GET") + config.url;

    if (options?.useQueryRace !== false) {
      this.queryRace.apply(endpoint, source.cancel);
    }

    const promise = this._instance({
      ...config,
      ...options,
      cancelToken: source.token,
    }) as CancelablePromise<ApiResponse<R>>;

    promise.finally(() => {
      this.queryRace.delete(endpoint);
    });

    promise.cancel = (message, config, request) => {
      source.cancel(message ?? "Query was cancelled", config, request);
    };

    return promise;
  };

  private _applyInterceptor = () => {
    this._instance.interceptors.response.use(
      response => {
        const status = response.status;
        const data = response.data;

        return Promise.resolve<ApiResponse>({ data, status }) as any;
      },
      e => {
        const error = new Error(e.message ?? e);

        if (e.response) {
          const errorData = e.response.data as any;

          const errorStatus = errorData?.error?.status;
          const errorMessage = errorData?.error?.message;

          return Promise.resolve<ApiResponse>({
            status: errorStatus ?? e.response.status ?? 500,
            error: errorMessage ? new Error(errorMessage) : error,
          });
        } else if (e.request) {
          return Promise.resolve<ApiResponse>({
            status: e.request.status || 400,
            error,
          });
        } else {
          return Promise.resolve<ApiResponse>({
            status: 400,
            error,
            isCanceled: e instanceof CanceledError,
          });
        }
      },
    );
  };
}
