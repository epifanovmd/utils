import { isFunction, LambdaValue, resolveLambdaValue } from "../../helpers";
import { makeAutoObservable } from "mobx";
import { isEqual } from "lodash";

type Validator<T> = (items: T[]) => string;

type Opts = {
  validateOnInit?: boolean;
};

export class ArrayHolder<T = any> {
  private opts: Opts = {};
  private _validate: Validator<T> | null = null;
  private _error: LambdaValue<string> = "";
  private _initialValue: LambdaValue<T[]> = [];
  private _value: LambdaValue<T[]> = [];

  constructor(value?: LambdaValue<T[]>, opt?: Opts) {
    makeAutoObservable(this, {}, { autoBind: true });
    if (value) {
      this._value = value;
      this._initialValue = () => [...resolveLambdaValue(value)];
    }

    this.opts = opt || {};

    if (opt?.validateOnInit) {
      this.setError(this._validate?.(this.value) ?? "");
    }
  }

  get error() {
    return resolveLambdaValue(this._error);
  }

  get value() {
    return resolveLambdaValue(this._value);
  }

  get isValid() {
    return !resolveLambdaValue(this._error);
  }

  setValue(value: LambdaValue<T[]>) {
    this._value = value;
    this.validate();
  }

  remove(value: number | ((item: T) => boolean)) {
    if (isFunction(value)) {
      const _value = this.value.filter(value);

      this._value = () => _value;
    } else {
      const _value = this.value.filter((_item, index) => index !== value);

      this._value = () => _value;
    }
    this.validate();
  }

  push(value: LambdaValue<T>) {
    const _value = resolveLambdaValue(value);
    const newValue = [...resolveLambdaValue(this._value), _value];

    this._value = () => newValue;
    this.validate();
  }

  onReplaceValue(value: LambdaValue<T>, index: number) {
    const _value = resolveLambdaValue(value);
    const newValue = resolveLambdaValue(this._value).map((item, _index) =>
      _index === index ? _value : item,
    );

    this._value = () => newValue;
    this.validate();
  }

  setError(error: LambdaValue<string>) {
    this._error = resolveLambdaValue(error);
  }

  setValidate(validator: Validator<T>) {
    this._validate = validator;
  }

  resetData() {
    this._value = () => [...(resolveLambdaValue(this._initialValue) || [])];
  }

  validate() {
    const error = this._validate?.(this.value) ?? "";

    this.setError(error);

    return error;
  }

  get isChanged() {
    const value = resolveLambdaValue(this._value);
    const initialValue = resolveLambdaValue(this._initialValue);

    if (value.length !== initialValue.length) {
      return true;
    }

    return isEqual(value, initialValue);
  }
}
