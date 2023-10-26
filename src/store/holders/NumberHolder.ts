import { LambdaValue, resolveLambdaValue } from "../../helpers";
import { makeAutoObservable } from "mobx";
import { FormHolder } from "./FormHolder";
import { TextHolder } from "./TextHolder";

const textToNumber = (value: LambdaValue<string> = () => "") => {
  const text = resolveLambdaValue(value);

  return +text.replace(/[^0-9]+/g, "");
};

type Opts = {
  initialValue?: LambdaValue<number>;
  validateOnInit?: boolean;
};

export class NumberHolder {
  private opts?: Opts;
  private _validate: ((text: number | undefined) => string) | null = null;
  private _error: LambdaValue<string> = "";
  private _placeholder: LambdaValue<string> = "";
  private _initialValue: LambdaValue<number | undefined>;
  private _value: LambdaValue<number | undefined>;

  constructor(opts?: Opts) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.opts = opts;
    if (opts?.initialValue) {
      this._value = opts?.initialValue;
      this._initialValue = opts?.initialValue;
    }
    if (opts?.validateOnInit) {
      this.setError(this._validate?.(this.value) ?? "");
    }
  }

  get error() {
    return resolveLambdaValue(this._error);
  }

  get placeholder() {
    return resolveLambdaValue(this._placeholder);
  }

  get value() {
    return resolveLambdaValue(this._value);
  }

  get isValid() {
    return !resolveLambdaValue(this._error);
  }

  resetData() {
    this._value = this._initialValue;
  }

  onChangeText(text: LambdaValue<string>) {
    const value = textToNumber(resolveLambdaValue(text));

    this.setError(this._validate?.(value) ?? "");
    this._value = value;
  }

  setValue(text: LambdaValue<number>) {
    const value = resolveLambdaValue(text);

    this.setError(this._validate?.(value) ?? "");
    this._value = text;
  }

  setPlaceholder(text: LambdaValue<string>) {
    this._placeholder = resolveLambdaValue(text);
  }

  setError(error: LambdaValue<string>) {
    this._error = resolveLambdaValue(error);
  }

  setValidate(validator: ((text: number | undefined) => string) | null) {
    this._validate = validator;
  }
}
