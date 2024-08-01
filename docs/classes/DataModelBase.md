[@force-dev/utils](../README.md) / [Exports](../modules.md) / DataModelBase

# Class: DataModelBase<TData\>

## Type parameters

| Name |
| :------ |
| `TData` |

## Implements

- [`IDataModel`](../interfaces/IDataModel.md)<`TData`\>

## Table of contents

### Constructors

- [constructor](DataModelBase.md#constructor)

### Properties

- [\_data](DataModelBase.md#_data)

### Accessors

- [data](DataModelBase.md#data)
- [hasLambda](DataModelBase.md#haslambda)

## Constructors

### constructor

• **new DataModelBase**<`TData`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `TData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`TData`, `unknown`\> |

#### Defined in

[src/store/models/DataModelBase.ts:10](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/models/DataModelBase.ts#L10)

## Properties

### \_data

• `Private` `Readonly` **\_data**: [`LambdaValue`](../modules.md#lambdavalue)<`TData`, `unknown`\>

#### Defined in

[src/store/models/DataModelBase.ts:8](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/models/DataModelBase.ts#L8)

## Accessors

### data

• `get` **data**(): `TData`

#### Returns

`TData`

#### Implementation of

[IDataModel](../interfaces/IDataModel.md).[data](../interfaces/IDataModel.md#data)

#### Defined in

[src/store/models/DataModelBase.ts:21](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/models/DataModelBase.ts#L21)

___

### hasLambda

• `get` **hasLambda**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/models/DataModelBase.ts:25](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/models/DataModelBase.ts#L25)
