import { disposer } from "./disposer";
import { InitializeDispose } from "./types";

export const initialize =
  (data: InitializeDispose | InitializeDispose[]) => () => {
    disposer(data);
  };
