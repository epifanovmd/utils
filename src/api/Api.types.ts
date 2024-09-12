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

export interface ApiAxios extends Omit<Axios, "interceptors"> {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<ApiResponse>;
  };
}

export interface ApiRequestConfig<P = any>
  extends Partial<AxiosRequestConfig<P>> {
  useQueryRace?: boolean;
}

export interface ApiAxiosInstance extends ApiAxios {
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

export interface ApiResponse<R = any, ErrorBody = unknown> {
  data?: R;
  status: number;
  error?: Error;
  isCanceled?: boolean;
  axiosError?: AxiosError<ErrorBody>;
  axiosResponse?: AxiosResponse<R>;
}

export interface IApiService {
  readonly instance: ApiAxiosInstance;

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
      response: ApiResponse,
    ) => void | ApiResponse | Promise<void | ApiResponse>,
  ): void;

  onError(
    callback: (
      response: ApiResponse,
    ) => void | ApiResponse | Promise<void | ApiResponse>,
  ): void;

  get<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;

  post<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;

  patch<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;

  put<R = any, P = any>(
    endpoint: string,
    params?: P,
    config?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;

  delete<R = any>(
    endpoint: string,
    config?: ApiRequestConfig,
  ): CancelablePromise<ApiResponse<R>>;

  instancePromise<R = any, P = any>(
    config: ApiRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;
}
