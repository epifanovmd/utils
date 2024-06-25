export const isPromise = <T>(obj: any | Promise<T>): obj is Promise<T> =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";
