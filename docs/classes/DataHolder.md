[@force-dev/utils](../README.md) / [Exports](../modules.md) / DataHolder

# Class: DataHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`IDataHolderState`](../interfaces/IDataHolderState.md)

## Table of contents

### Constructors

- [constructor](DataHolder.md#constructor)

### Properties

- [\_state](DataHolder.md#_state)
- [d](DataHolder.md#d)
- [error](DataHolder.md#error)

### Accessors

- [isEmpty](DataHolder.md#isempty)
- [isError](DataHolder.md#iserror)
- [isFilled](DataHolder.md#isfilled)
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
| `data?` | `T` |

#### Defined in

[src/store/holders/DataHolder.ts:30](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L30)

## Properties

### \_state

• `Private` **\_state**: `DataHolderState` = `DataHolderState.INITIALIZATION`

#### Defined in

[src/store/holders/DataHolder.ts:28](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L28)

___

### d

• **d**: `undefined` \| `T`

#### Defined in

[src/store/holders/DataHolder.ts:26](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L26)

___

### error

• `Optional` **error**: `IDataHolderError`

#### Defined in

[src/store/holders/DataHolder.ts:27](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L27)

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isEmpty](../interfaces/IDataHolderState.md#isempty)

#### Defined in

[src/store/holders/DataHolder.ts:49](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L49)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isError](../interfaces/IDataHolderState.md#iserror)

#### Defined in

[src/store/holders/DataHolder.ts:45](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L45)

___

### isFilled

• `get` **isFilled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isFilled](../interfaces/IDataHolderState.md#isfilled)

#### Defined in

[src/store/holders/DataHolder.ts:53](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L53)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isLoading](../interfaces/IDataHolderState.md#isloading)

#### Defined in

[src/store/holders/DataHolder.ts:41](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L41)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDataHolderState](../interfaces/IDataHolderState.md).[isReady](../interfaces/IDataHolderState.md#isready)

#### Defined in

[src/store/holders/DataHolder.ts:37](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L37)

## Methods

### clear

▸ **clear**(): [`DataHolder`](DataHolder.md)<`T`\>

#### Returns

[`DataHolder`](DataHolder.md)<`T`\>

#### Defined in

[src/store/holders/DataHolder.ts:63](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L63)

___

### setData

▸ **setData**(`data`): [`DataHolder`](DataHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`DataHolder`](DataHolder.md)<`T`\>

#### Defined in

[src/store/holders/DataHolder.ts:76](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L76)

___

### setError

▸ **setError**(`error`): [`DataHolder`](DataHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IDataHolderError` |

#### Returns

[`DataHolder`](DataHolder.md)<`T`\>

#### Defined in

[src/store/holders/DataHolder.ts:83](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L83)

___

### setLoading

▸ **setLoading**(): [`DataHolder`](DataHolder.md)<`T`\>

#### Returns

[`DataHolder`](DataHolder.md)<`T`\>

#### Defined in

[src/store/holders/DataHolder.ts:57](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L57)

___

### setPending

▸ **setPending**(): [`DataHolder`](DataHolder.md)<`T`\>

#### Returns

[`DataHolder`](DataHolder.md)<`T`\>

#### Defined in

[src/store/holders/DataHolder.ts:70](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/DataHolder.ts#L70)
