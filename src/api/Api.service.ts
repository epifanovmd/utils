import "reflect-metadata";

import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  CanceledError,
  CancelTokenSource,
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
      timeout: 120000,
      headers: DEFAULT_AXIOS_HEADERS,
      ...config,
    }) as unknown as ApiAxiosInstance<E, EBody>;

    this._instance.interceptors.response.use(
      res => this._handleResponse(res),
      error => this._handleError(error, transformError),
    );
  }

  get instance() {
    return this._instance;
  }

  public onRequest: IApiService<E, EBody>["onRequest"] = callback => {
    const interceptor = this._instance.interceptors.request.use(
      async request => (await promisify(callback(request))) ?? request,
    );

    return () => this._instance.interceptors.request.eject(interceptor);
  };

  public onResponse: IApiService<E, EBody>["onResponse"] = callback => {
    const interceptor = this._instance.interceptors.response.use(
      async response => {
        if (!response.error && response.data) {
          return (await promisify(callback(response))) ?? response;
        }

        return response;
      },
    );

    return () => this._instance.interceptors.response.eject(interceptor);
  };

  public onError(
    callback: (
      response: ApiResponse<any, E, EBody>,
    ) =>
      | void
      | ApiResponse<any, E, EBody>
      | Promise<void | ApiResponse<any, E, EBody>>,
  ) {
    const interceptor = this._instance.interceptors.response.use(
      async response => {
        if (response.error) {
          return (await promisify(callback(response))) ?? response;
        }

        return response;
      },
    );

    return () => this._instance.interceptors.response.eject(interceptor);
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

  public instancePromise<R = any, P = any>(
    config: ApiRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, EBody>> {
    const source: CancelTokenSource = axios.CancelToken.source();
    const endpoint = `${config.method ?? "GET"} ${config.url}`;

    if (options?.useQueryRace !== false) {
      this.queryRace.apply(endpoint, source.cancel);
    }

    const promise = this._instance({
      ...config,
      ...options,
      cancelToken: source.token,
    }) as CancelablePromise<ApiResponse<R, E, EBody>>;

    promise.finally(() => this.queryRace.delete(endpoint));
    promise.cancel = message => source.cancel(message ?? "Query was cancelled");

    return promise;
  }

  private _handleResponse<R>(
    res: ApiResponse<R, E, EBody>,
  ): Promise<ApiResponse<R, E, EBody>> {
    return Promise.resolve<ApiResponse<any, E, EBody>>({
      data: res.data,
      status: res.status,
      axiosResponse: res as unknown as AxiosResponse<any, EBody>,
    });
  }

  private _handleError(
    e: any,
    transformError: (error: AxiosError<EBody>) => E,
  ): Promise<ApiResponse<any, E, EBody>> {
    const axiosError = isAxiosError(e) ? e : undefined;
    const status = e.response?.status || e.request?.status || 400;

    return Promise.resolve({
      status,
      error: transformError(axiosError!),
      axiosError,
      isCanceled: e instanceof CanceledError,
    });
  }
}
