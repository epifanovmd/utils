import {
  Axios,
  AxiosDefaults,
  AxiosError,
  AxiosHeaderValue,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler,
  HeadersDefaults,
  InternalAxiosRequestConfig,
} from "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    skipInterceptError?: boolean;
  }
}

export interface ApiAxios<R, E = Error, ErrorBody = unknown>
  extends Omit<Axios, "interceptors"> {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<ApiResponse<R, E, ErrorBody>>;
  };
}

export interface ApiRequestConfig<P = any>
  extends Partial<AxiosRequestConfig<P>> {
  useQueryRace?: boolean;
}

export interface ApiAxiosInstance<E = Error, ErrorBody = unknown>
  extends ApiAxios<any, E, ErrorBody> {
  <T = any, R = AxiosResponse<T>, D = any>(
    config: ApiRequestConfig<D>,
  ): Promise<R>;
  <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: ApiRequestConfig<D>,
  ): Promise<R>;

  defaults: Omit<AxiosDefaults, "headers"> & {
    headers: HeadersDefaults & {
      [key: string]: AxiosHeaderValue;
    };
  };
}

export interface CancelablePromise<T> extends Promise<T> {
  cancel: Canceler;
}

export interface ApiResponse<R = any, E = Error, ErrorBody = unknown> {
  data?: R;
  status: number;
  error?: E;
  isCanceled?: boolean;
  axiosError?: AxiosError<ErrorBody>;
  axiosResponse?: AxiosResponse<R>;
}

export interface IApiService<E = Error, ErrorBody = unknown> {
  readonly instance: ApiAxiosInstance<E, ErrorBody>;

  onRequest(
    callback: (
      request: InternalAxiosRequestConfig,
    ) =>
      | void
      | InternalAxiosRequestConfig
      | Promise<void | InternalAxiosRequestConfig>,
  ): void;

  onResponse(
    callback: (
      response: ApiResponse<any, E, ErrorBody>,
    ) =>
      | void
      | ApiResponse<any, E, ErrorBody>
      | Promise<void | ApiResponse<any, E, ErrorBody>>,
  ): void;

  onError(
    callback: (
      response: ApiResponse<any, E, ErrorBody>,
    ) =>
      | void
      | ApiResponse<any, E, ErrorBody>
      | Promise<void | ApiResponse<any, E, ErrorBody>>,
  ): void;

  get<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;

  post<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;

  patch<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;

  put<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;

  delete<R = any>(
    endpoint: string,
    config?: ApiRequestConfig,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;

  instancePromise<R = any, P = any>(
    config: ApiRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R, E, ErrorBody>>;
}
