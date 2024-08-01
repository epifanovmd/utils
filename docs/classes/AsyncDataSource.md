[@force-dev/utils](../README.md) / [Exports](../modules.md) / AsyncDataSource

# Class: AsyncDataSource<R, P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `P` | `unknown` |

## Hierarchy

- [`DataHolder`](DataHolder.md)<`R`\>

  ↳ **`AsyncDataSource`**

## Table of contents

### Constructors

- [constructor](AsyncDataSource.md#constructor)

### Properties

- [error](AsyncDataSource.md#error)
- [fetchFn](AsyncDataSource.md#fetchfn)

### Accessors

- [d](AsyncDataSource.md#d)
- [isEmpty](AsyncDataSource.md#isempty)
- [isError](AsyncDataSource.md#iserror)
- [isFilled](AsyncDataSource.md#isfilled)
- [isLambda](AsyncDataSource.md#islambda)
- [isLoading](AsyncDataSource.md#isloading)
- [isReady](AsyncDataSource.md#isready)

### Methods

- [clear](AsyncDataSource.md#clear)
- [refresh](AsyncDataSource.md#refresh)
- [setData](AsyncDataSource.md#setdata)
- [setError](AsyncDataSource.md#seterror)
- [setLoading](AsyncDataSource.md#setloading)
- [setPending](AsyncDataSource.md#setpending)

## Constructors

### constructor

• **new AsyncDataSource**<`R`, `P`\>(`fetchFn`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `P` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetchFn` | (`query`: `P`) => `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\> |

#### Overrides

[DataHolder](DataHolder.md).[constructor](DataHolder.md#constructor)

#### Defined in

[src/store/holders/AsyncDataSource.ts:5](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/AsyncDataSource.ts#L5)

## Properties

### error

• `Optional` **error**: `IDataHolderError` = `undefined`

#### Inherited from

[DataHolder](DataHolder.md).[error](DataHolder.md#error)

#### Defined in

[src/store/holders/DataHolder.ts:28](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L28)

___

### fetchFn

• `Private` **fetchFn**: (`query`: `P`) => `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Type declaration

▸ (`query`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `P` |

##### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Defined in

[src/store/holders/AsyncDataSource.ts:5](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/AsyncDataSource.ts#L5)

## Accessors

### d

• `get` **d**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

DataHolder.d

#### Defined in

[src/store/holders/DataHolder.ts:60](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L60)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isEmpty

#### Defined in

[src/store/holders/DataHolder.ts:80](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L80)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isError

#### Defined in

[src/store/holders/DataHolder.ts:76](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L76)

___

### isFilled

• `get` **isFilled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isFilled

#### Defined in

[src/store/holders/DataHolder.ts:84](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L84)

___

### isLambda

• `get` **isLambda**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isLambda

#### Defined in

[src/store/holders/DataHolder.ts:64](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L64)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isLoading

#### Defined in

[src/store/holders/DataHolder.ts:72](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L72)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataHolder.isReady

#### Defined in

[src/store/holders/DataHolder.ts:68](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L68)

## Methods

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Inherited from

[DataHolder](DataHolder.md).[clear](DataHolder.md#clear)

#### Defined in

[src/store/holders/DataHolder.ts:94](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L94)

___

### refresh

▸ **refresh**(`query`): `Promise`<`undefined` \| `NonNullable`<`R`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `P` |

#### Returns

`Promise`<`undefined` \| `NonNullable`<`R`\>\>

#### Defined in

[src/store/holders/AsyncDataSource.ts:9](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/AsyncDataSource.ts#L9)

___

### setData

▸ **setData**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Returns

`this`

#### Inherited from

[DataHolder](DataHolder.md).[setData](DataHolder.md#setdata)

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

#### Inherited from

[DataHolder](DataHolder.md).[setError](DataHolder.md#seterror)

#### Defined in

[src/store/holders/DataHolder.ts:114](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L114)

___

### setLoading

▸ **setLoading**(): `this`

#### Returns

`this`

#### Inherited from

[DataHolder](DataHolder.md).[setLoading](DataHolder.md#setloading)

#### Defined in

[src/store/holders/DataHolder.ts:88](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L88)

___

### setPending

▸ **setPending**(): `this`

#### Returns

`this`

#### Inherited from

[DataHolder](DataHolder.md).[setPending](DataHolder.md#setpending)

#### Defined in

[src/store/holders/DataHolder.ts:101](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/DataHolder.ts#L101)
