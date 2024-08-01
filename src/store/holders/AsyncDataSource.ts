import { ApiResponse } from "../../api";
import { DataHolder } from "./DataHolder";

export class AsyncDataSource<R, P = unknown> extends DataHolder<R> {
  constructor(private fetchFn: (query: P) => Promise<ApiResponse<R>>) {
    super();
  }

  refresh = async (query: P) => {
    this.setLoading();
    const res = await this.fetchFn(query);

    if (res.error) {
      if (!res.isCanceled) {
        this.setError({ msg: res.error.toString() });
      }
    } else if (res.data) {
      this.setData(res.data);

      return res.data;
    }

    return undefined;
  };
}
