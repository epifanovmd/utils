export const isPromise = <T>(obj: any | Promise<T>): obj is Promise<T> =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

export const promisify = <P>(value: P) => {
  if (isPromise(value)) {
    return value as P;
  }

  return Promise.resolve<P>(value);
};
