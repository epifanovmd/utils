[@force-dev/utils](../README.md) / [Exports](../modules.md) / ListCollectionHolder

# Class: ListCollectionHolder<Data, Args\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `Args` | `any` |

## Implements

- `IListEvents`

## Table of contents

### Constructors

- [constructor](ListCollectionHolder.md#constructor)

### Properties

- [\_isEndReached](ListCollectionHolder.md#_isendreached)
- [\_lastRefreshArgs](ListCollectionHolder.md#_lastrefreshargs)
- [\_opts](ListCollectionHolder.md#_opts)
- [\_state](ListCollectionHolder.md#_state)
- [d](ListCollectionHolder.md#d)
- [error](ListCollectionHolder.md#error)

### Accessors

- [\_lastPageSize](ListCollectionHolder.md#_lastpagesize)
- [\_refreshArgs](ListCollectionHolder.md#_refreshargs)
- [isEmpty](ListCollectionHolder.md#isempty)
- [isError](ListCollectionHolder.md#iserror)
- [isLoading](ListCollectionHolder.md#isloading)
- [isLoadingAllowed](ListCollectionHolder.md#isloadingallowed)
- [isLoadingMore](ListCollectionHolder.md#isloadingmore)
- [isLoadingMoreAllowed](ListCollectionHolder.md#isloadingmoreallowed)
- [isReady](ListCollectionHolder.md#isready)

### Methods

- [\_mergeData](ListCollectionHolder.md#_mergedata)
- [\_raiseOnFetchData](ListCollectionHolder.md#_raiseonfetchdata)
- [\_setState](ListCollectionHolder.md#_setstate)
- [clear](ListCollectionHolder.md#clear)
- [initialize](ListCollectionHolder.md#initialize)
- [keyExtractor](ListCollectionHolder.md#keyextractor)
- [performLoad](ListCollectionHolder.md#performload)
- [performLoadMore](ListCollectionHolder.md#performloadmore)
- [performRefresh](ListCollectionHolder.md#performrefresh)
- [setError](ListCollectionHolder.md#seterror)
- [setLoading](ListCollectionHolder.md#setloading)
- [setLoadingMore](ListCollectionHolder.md#setloadingmore)
- [setRefreshing](ListCollectionHolder.md#setrefreshing)
- [updateData](ListCollectionHolder.md#updatedata)

## Constructors

### constructor

• **new ListCollectionHolder**<`Data`, `Args`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `Data` |
| `Args` | `any` |

#### Defined in

[src/store/holders/ListCollectionHolder.ts:59](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L59)

## Properties

### \_isEndReached

• **\_isEndReached**: `boolean` = `false`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:52](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L52)

___

### \_lastRefreshArgs

• `Private` `Optional` **\_lastRefreshArgs**: [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:57](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L57)

___

### \_opts

• `Private` **\_opts**: `IOptions`<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:56](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L56)

___

### \_state

• `Private` **\_state**: [`ListCollectionLoadState`](../enums/ListCollectionLoadState.md) = `ListCollectionLoadState.initializing`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:53](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L53)

___

### d

• **d**: `Collection`<`Data`\> = `[]`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:51](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L51)

___

### error

• `Optional` **error**: `IDataHolderError`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:50](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L50)

## Accessors

### \_lastPageSize

• `Private` `get` **_lastPageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:229](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L229)

___

### \_refreshArgs

• `Private` `get` **_refreshArgs**(): [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Returns

[`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:222](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L222)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:94](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L94)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:90](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L90)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:70](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L70)

___

### isLoadingAllowed

• `get` **isLoadingAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:63](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L63)

___

### isLoadingMore

• `get` **isLoadingMore**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:82](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L82)

___

### isLoadingMoreAllowed

• `get` **isLoadingMoreAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:74](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L74)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:86](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L86)

## Methods

### \_mergeData

▸ `Private` **_mergeData**(`source`, `merge`): `Collection`<`Data`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Collection`<`Data`\> |
| `merge` | `Collection`<`Data`\> |

#### Returns

`Collection`<`Data`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:237](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L237)

___

### \_raiseOnFetchData

▸ `Private` **_raiseOnFetchData**(`resetArgs?`, `args?`): `undefined` \| `Promise`<`Data`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resetArgs?` | `boolean` |
| `args` | `Args` |

#### Returns

`undefined` \| `Promise`<`Data`[]\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:266](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L266)

___

### \_setState

▸ `Private` **_setState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ListCollectionLoadState`](../enums/ListCollectionLoadState.md) |

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:218](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L218)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:134](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L134)

___

### initialize

▸ **initialize**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IOptions`<`Data`, `Args`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:98](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L98)

___

### keyExtractor

▸ **keyExtractor**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Data` |

#### Returns

`any`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:170](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L170)

___

### performLoad

▸ **performLoad**(`args?`): `Promise`<`Data`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Args` |

#### Returns

`Promise`<`Data`[]\>

#### Implementation of

IListEvents.performLoad

#### Defined in

[src/store/holders/ListCollectionHolder.ts:207](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L207)

___

### performLoadMore

▸ **performLoadMore**(`args?`): `Promise`<`Data`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Args` |

#### Returns

`Promise`<`Data`[]\>

#### Implementation of

IListEvents.performLoadMore

#### Defined in

[src/store/holders/ListCollectionHolder.ts:181](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L181)

___

### performRefresh

▸ **performRefresh**(`args?`): `Promise`<`Data`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Args` |

#### Returns

`Promise`<`Data`[]\>

#### Implementation of

IListEvents.performRefresh

#### Defined in

[src/store/holders/ListCollectionHolder.ts:191](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L191)

___

### setError

▸ **setError**(`error`): [`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IDataHolderError` |

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:142](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L142)

___

### setLoading

▸ **setLoading**(`clear?`): [`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clear` | `boolean` | `true` |

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:149](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L149)

___

### setLoadingMore

▸ **setLoadingMore**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:164](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L164)

___

### setRefreshing

▸ **setRefreshing**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:158](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L158)

___

### updateData

▸ **updateData**(`data`, `opts?`): [`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Collection`<`Data`\> |
| `opts?` | `IUpdateOptions` |

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:106](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ListCollectionHolder.ts#L106)
