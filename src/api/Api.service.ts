import "reflect-metadata";

import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  CanceledError,
  isAxiosError,
} from "axios";
import { injectable, unmanaged } from "inversify";

import { promisify } from "../helpers";
import {
  ApiAxiosInstance,
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
export class ApiService<
  E extends Error | AxiosError<EBody> = AxiosError<unknown>,
  EBody = unknown,
> implements IApiService<E, EBody>
{
  private readonly _instance: ApiAxiosInstance<E, EBody>;
  public queryRace = new QueryRace();

  constructor(
    @unmanaged() config: Parameters<typeof axios.create>[0],
    @unmanaged() transformError: (error: AxiosError<EBody>) => E,
  ) {
    this._instance = axios.create({
      timeout: 2 * 60 * 1000,
      headers: DEFAULT_AXIOS_HEADERS,
      ...config,
    });

    this._instance.interceptors.response.use(
      res => {
        const axiosResponse = res as any as AxiosResponse<any, EBody>;

        return Promise.resolve<ApiResponse<any, E, EBody>>({
          data: axiosResponse.data,
          status: axiosResponse.status,
          axiosResponse,
        });
      },
      e => {
        return Promise.resolve(this.interceptError(e, transformError));
      },
    );
  }

  get instance() {
    return this._instance;
  }

  public onRequest: IApiService<E, EBody>["onRequest"] = callback => {
    this._instance.interceptors.request.use(
      async request => (await promisify(callback(request))) ?? request,
    );
  };

  public onResponse: IApiService<E, EBody>["onResponse"] = callback => {
    this._instance.interceptors.response.use(
      async (response: ApiResponse<any, E, EBody>) => {
        if (!response.error && response.data) {
          return (await promisify(callback(response))) ?? response;
        }

        return response;
      },
    );
  };

  public onError(
    callback: (
      response: ApiResponse<any, E, EBody>,
    ) =>
      | void
      | ApiResponse<any, E, EBody>
      | Promise<void | ApiResponse<any, E, EBody>>,
  ) {
    this._instance.interceptors.response.use((async (
      response: ApiResponse<any, E, EBody>,
    ) => {
      if (response.error) {
        return (await promisify(callback(response))) ?? response;
      }

      return response;
    }) as any);
  }

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

  protected interceptError(
    e: any,
    transformError: (error: AxiosError<EBody>) => E,
  ): unknown {
    const axiosError = isAxiosError(e) ? e : (undefined as any);

    if (e.response) {
      return Promise.resolve<ApiResponse<any, E, EBody>>({
        status: e.response.status ?? e.status ?? 500,
        error: transformError(axiosError),
        axiosError,
      });
    } else if (e.request) {
      return Promise.resolve<ApiResponse<any, E, EBody>>({
        status: e.request.status || 400,
        error: transformError(axiosError),
        axiosError,
      });
    } else {
      return Promise.resolve<ApiResponse<any, E, EBody>>({
        status: 400,
        error: transformError(axiosError),
        axiosError,
        isCanceled: e instanceof CanceledError,
      });
    }
  }

  instancePromise = <R = any, P = any>(
    config: ApiRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, EBody>> => {
    const source = axios.CancelToken.source();

    const endpoint = (config.method ?? "GET") + config.url;

    if (options?.useQueryRace !== false) {
      this.queryRace.apply(endpoint, source.cancel);
    }

    const promise = this._instance({
      ...config,
      ...options,
      cancelToken: source.token,
    }) as CancelablePromise<ApiResponse<R, E, EBody>>;

    promise.finally(() => {
      this.queryRace.delete(endpoint);
    });

    promise.cancel = (message, config, request) => {
      source.cancel(message ?? "Query was cancelled", config, request);
    };

    return promise;
  };
}
