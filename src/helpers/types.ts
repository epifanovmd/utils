export type CheckArray<T> = T extends any[] ? T[number] : T;

export type PartialObject<T> = T extends object ? Partial<T> : T;

export type SubType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  }[keyof Base]
>;

export type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

export type DeepKeys<T> = T extends object
  ? {
      [K in (string | number) & keyof T]: `${K}` | Join<K, DeepKeys<T[K]>>;
    }[(string | number) & keyof T]
  : never;

export type RecursiveObjectType<T> = DeepKeys<T>;

export type PartialKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export interface IEmpty {
  [key: string]: any;
  [key: number]: any;
}

export type Maybe<T> = T | undefined;

export type InitializeDispose =
  | void
  | (() => void)
  | (() => void)[]
  | Promise<void | (() => void) | (() => void)[]>;

export interface SupportInitialize<T extends any = undefined> {
  initialize: T extends undefined
    ? () => InitializeDispose
    : (data: T) => InitializeDispose;
}
