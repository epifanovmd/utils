import { AxiosError } from "axios";

import { ApiResponse } from "../../api";
import { DataHolder } from "./DataHolder";

export class AsyncDataSource<
  R,
  P = unknown,
  E extends Error | AxiosError<unknown> = Error | AxiosError<unknown>,
  EBody = unknown,
> extends DataHolder<R> {
  constructor(
    private fetchFn: (query: P) => Promise<ApiResponse<R, E, EBody>>,
  ) {
    super();
  }

  refresh = async (query: P) => {
    this.setLoading();
    const res = await this.fetchFn(query);

    if (res.error) {
      if (!res.isCanceled) {
        this.setError(res.error.message);
      }
    } else if (res.data) {
      this.setData(res.data);

      return res.data;
    }

    return undefined;
  };
}
