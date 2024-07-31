import {
  AxiosInstance,
  AxiosRequestConfig,
  Canceler,
  InternalAxiosRequestConfig,
} from "axios";

import { iocDecorator } from "../ioc";

export interface CancelablePromise<T> extends Promise<T> {
  cancel: Canceler;
}

export interface ApiRequestConfig<P = any>
  extends Partial<AxiosRequestConfig<P>> {
  useQueryRace?: boolean;
}

export interface ApiResponse<R = any> {
  data?: R;
  status: number;
  error?: Error;
  isCanceled?: boolean;
}

export const IApiService = iocDecorator<IApiService>();

export interface IApiService {
  readonly instance: AxiosInstance;

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
    config: AxiosRequestConfig<P>,
    options?: ApiRequestConfig<P>,
  ): CancelablePromise<ApiResponse<R>>;
}
