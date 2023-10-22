[@force-dev/utils](../README.md) / [Exports](../modules.md) / ListCollectionHolder

# Class: ListCollectionHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

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
- [\_visibleRange](ListCollectionHolder.md#_visiblerange)
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
- [isPullToRefreshAllowed](ListCollectionHolder.md#ispulltorefreshallowed)
- [isPullToRefreshing](ListCollectionHolder.md#ispulltorefreshing)
- [isReady](ListCollectionHolder.md#isready)

### Methods

- [\_mergeData](ListCollectionHolder.md#_mergedata)
- [\_raiseOnFetchData](ListCollectionHolder.md#_raiseonfetchdata)
- [\_setState](ListCollectionHolder.md#_setstate)
- [clear](ListCollectionHolder.md#clear)
- [initialize](ListCollectionHolder.md#initialize)
- [keyExtractor](ListCollectionHolder.md#keyextractor)
- [performChangeVisibleRange](ListCollectionHolder.md#performchangevisiblerange)
- [performLoadMore](ListCollectionHolder.md#performloadmore)
- [performPullToRefresh](ListCollectionHolder.md#performpulltorefresh)
- [performRefresh](ListCollectionHolder.md#performrefresh)
- [performReload](ListCollectionHolder.md#performreload)
- [setError](ListCollectionHolder.md#seterror)
- [setLoading](ListCollectionHolder.md#setloading)
- [setLoadingMore](ListCollectionHolder.md#setloadingmore)
- [setPullToRefreshing](ListCollectionHolder.md#setpulltorefreshing)
- [setRefreshing](ListCollectionHolder.md#setrefreshing)
- [updateData](ListCollectionHolder.md#updatedata)

## Constructors

### constructor

• **new ListCollectionHolder**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/store/holders/ListCollectionHolder.ts:83](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L83)

## Properties

### \_isEndReached

• **\_isEndReached**: `boolean` = `false`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:73](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L73)

___

### \_lastRefreshArgs

• `Private` `Optional` **\_lastRefreshArgs**: [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:81](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L81)

___

### \_opts

• `Private` **\_opts**: `IOptions`<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:80](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L80)

___

### \_state

• `Private` **\_state**: [`ListCollectionLoadState`](../enums/ListCollectionLoadState.md) = `ListCollectionLoadState.initializing`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:74](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L74)

___

### \_visibleRange

• `Private` **\_visibleRange**: `Range`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:76](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L76)

___

### d

• **d**: `Collection`<`T`\> = `[]`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:72](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L72)

___

### error

• `Optional` **error**: `IDataHolderError`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:71](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L71)

## Accessors

### \_lastPageSize

• `Private` `get` **_lastPageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:148](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L148)

___

### \_refreshArgs

• `Private` `get` **_refreshArgs**(): [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Returns

[`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:133](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L133)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:129](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L129)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:125](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L125)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:94](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L94)

___

### isLoadingAllowed

• `get` **isLoadingAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:87](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L87)

___

### isLoadingMore

• `get` **isLoadingMore**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:117](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L117)

___

### isLoadingMoreAllowed

• `get` **isLoadingMoreAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:109](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L109)

___

### isPullToRefreshAllowed

• `get` **isPullToRefreshAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:98](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L98)

___

### isPullToRefreshing

• `get` **isPullToRefreshing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:105](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L105)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:121](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L121)

## Methods

### \_mergeData

▸ `Private` **_mergeData**(`source`, `merge`): `Collection`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Collection`<`T`\> |
| `merge` | `Collection`<`T`\> |

#### Returns

`Collection`<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:301](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L301)

___

### \_raiseOnFetchData

▸ `Private` **_raiseOnFetchData**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:326](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L326)

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

[src/store/holders/ListCollectionHolder.ts:297](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L297)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:199](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L199)

___

### initialize

▸ **initialize**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IOptions`<`T`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:157](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L157)

___

### keyExtractor

▸ **keyExtractor**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`any`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:245](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L245)

___

### performChangeVisibleRange

▸ **performChangeVisibleRange**(`index`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Implementation of

IListEvents.performChangeVisibleRange

#### Defined in

[src/store/holders/ListCollectionHolder.ts:270](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L270)

___

### performLoadMore

▸ **performLoadMore**(): `void`

#### Returns

`void`

#### Implementation of

IListEvents.performLoadMore

#### Defined in

[src/store/holders/ListCollectionHolder.ts:256](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L256)

___

### performPullToRefresh

▸ **performPullToRefresh**(): `void`

#### Returns

`void`

#### Implementation of

IListEvents.performPullToRefresh

#### Defined in

[src/store/holders/ListCollectionHolder.ts:263](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L263)

___

### performRefresh

▸ **performRefresh**(): `void`

#### Returns

`void`

#### Implementation of

IListEvents.performRefresh

#### Defined in

[src/store/holders/ListCollectionHolder.ts:278](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L278)

___

### performReload

▸ **performReload**(): `void`

#### Returns

`void`

#### Implementation of

IListEvents.performReload

#### Defined in

[src/store/holders/ListCollectionHolder.ts:289](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L289)

___

### setError

▸ **setError**(`error`): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IDataHolderError` |

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:211](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L211)

___

### setLoading

▸ **setLoading**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:219](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L219)

___

### setLoadingMore

▸ **setLoadingMore**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:239](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L239)

___

### setPullToRefreshing

▸ **setPullToRefreshing**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:232](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L232)

___

### setRefreshing

▸ **setRefreshing**(): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:226](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L226)

___

### updateData

▸ **updateData**(`data`, `opts?`): [`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Collection`<`T`\> |
| `opts?` | `IUpdateOptions` |

#### Returns

[`ListCollectionHolder`](ListCollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:170](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ListCollectionHolder.ts#L170)
