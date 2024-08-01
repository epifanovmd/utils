[@force-dev/utils](../README.md) / [Exports](../modules.md) / DataHolder

# Class: DataHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`DataHolder`**

  ↳ [`AsyncDataSource`](AsyncDataSource.md)

## Implements

- [`IDataHolderState`](../interfaces/IDataHolderState.md)

## Table of contents

### Constructors

- [constructor](DataHolder.md#constructor)

### Properties

- [\_d](DataHolder.md#_d)
- [\_state](DataHolder.md#_state)
- [error](DataHolder.md#error)

### Accessors

- [d](DataHolder.md#d)
- [isEmpty](DataHolder.md#isempty)
- [isError](DataHolder.md#iserror)
- [isFilled](DataHolder.md#isfilled)
- [isLambda](DataHolder.md#islambda)
- [isLoading](DataHolder.md#isloading)
- [isReady](DataHolder.md#isready)

### Methods

- [clear](DataHolder.md#clear)
- [setData](DataHolder.md#setdata)
- [setError](DataHolder.md#seterror)
- [setLoading](DataHolder.md#setloading)
- [setPending](DataHolder.md#setpending)

## Constructors

### constructor

• **new DataHolder**<`T`\>(`data?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Defined in

[src/store/holders/DataHolder.ts:32](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L32)

## Properties

### \_d

• `Private` **\_d**: [`LambdaValue`](../modules.md#lambdavalue)<`undefined` \| `T`, `unknown`\> = `undefined`

#### Defined in

[src/store/holders/DataHolder.ts:29](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L29)

___

### \_state

• `Private` **\_state**: `DataHolderState` = `DataHolderState.INITIALIZATION`

#### Defined in

[src/store/holders/DataHolder.ts:30](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L30)

___

### error

• `Optional` **error**: `IDataHolderError` = `undefined`

#### Defined in

[src/store/holders/DataHolder.ts:28](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L28)

## Accessors

### d

• `get` **d**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/store/holders/DataHolder.ts:60](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L60)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isEmpty](../interfaces/IDataHolderState.md#isempty)

#### Defined in

[src/store/holders/DataHolder.ts:80](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L80)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isError](../interfaces/IDataHolderState.md#iserror)

#### Defined in

[src/store/holders/DataHolder.ts:76](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L76)

___

### isFilled

• `get` **isFilled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isFilled](../interfaces/IDataHolderState.md#isfilled)

#### Defined in

[src/store/holders/DataHolder.ts:84](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L84)

___

### isLambda

• `get` **isLambda**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/DataHolder.ts:64](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L64)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isLoading](../interfaces/IDataHolderState.md#isloading)

#### Defined in

[src/store/holders/DataHolder.ts:72](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L72)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isReady](../interfaces/IDataHolderState.md#isready)

#### Defined in

[src/store/holders/DataHolder.ts:68](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L68)

## Methods

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Defined in

[src/store/holders/DataHolder.ts:94](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L94)

___

### setData

▸ **setData**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Returns

`this`

#### Defined in

[src/store/holders/DataHolder.ts:107](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L107)

___

### setError

▸ **setError**(`error`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IDataHolderError` |

#### Returns

`this`

#### Defined in

[src/store/holders/DataHolder.ts:114](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L114)

___

### setLoading

▸ **setLoading**(): `this`

#### Returns

`this`

#### Defined in

[src/store/holders/DataHolder.ts:88](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L88)

___

### setPending

▸ **setPending**(): `this`

#### Returns

`this`

#### Defined in

[src/store/holders/DataHolder.ts:101](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L101)
