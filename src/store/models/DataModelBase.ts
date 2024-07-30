import isFunction from "lodash/isFunction";
import { computed, makeObservable, observable } from "mobx";

import { LambdaValue, resolveLambdaValue } from "../../helpers";
import { IDataModel } from "./DataModel.types";

export class DataModelBase<TData> implements IDataModel<TData> {
  private readonly _data: LambdaValue<TData>;

  constructor(value: LambdaValue<TData>) {
    this._data = value;

    makeObservable(this, {
      // @ts-ignore
      _data: observable,
      data: computed,
      hasLambda: computed,
    });
  }

  public get data() {
    return resolveLambdaValue(this._data);
  }

  public get hasLambda() {
    return isFunction(this._data);
  }
}
