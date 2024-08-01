[@force-dev/utils](../README.md) / [Exports](../modules.md) / IDataModel

# Interface: IDataModel<TData\>

## Type parameters

| Name |
| :------ |
| `TData` |

## Hierarchy

- `Object`

  ↳ **`IDataModel`**

## Implemented by

- [`DataModelBase`](../classes/DataModelBase.md)

## Table of contents

### Properties

- [constructor](IDataModel.md#constructor)
- [data](IDataModel.md#data)

### Methods

- [hasOwnProperty](IDataModel.md#hasownproperty)
- [isPrototypeOf](IDataModel.md#isprototypeof)
- [propertyIsEnumerable](IDataModel.md#propertyisenumerable)
- [toLocaleString](IDataModel.md#tolocalestring)
- [toString](IDataModel.md#tostring)
- [valueOf](IDataModel.md#valueof)

## Properties

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

Object.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:124

___

### data

• `Readonly` **data**: `TData`

#### Defined in

[src/store/models/DataModel.types.ts:2](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/models/DataModel.types.ts#L2)

## Methods

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

Object.hasOwnProperty

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:139

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Inherited from

Object.isPrototypeOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:145

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

Object.propertyIsEnumerable

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:151

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

Object.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:130

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

Object.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:127

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

Object.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:133
