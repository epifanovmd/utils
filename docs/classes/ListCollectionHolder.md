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

[src/store/holders/ListCollectionHolder.ts:61](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L61)

## Properties

### \_isEndReached

• `Private` **\_isEndReached**: `boolean` = `false`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:54](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L54)

___

### \_lastRefreshArgs

• `Private` `Optional` **\_lastRefreshArgs**: [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:59](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L59)

___

### \_opts

• `Private` **\_opts**: `IOptions`<`Data`, `Args`\>

#### Defined in

[src/store/holders/ListCollectionHolder.ts:58](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L58)

___

### \_state

• `Private` **\_state**: [`ListCollectionLoadState`](../enums/ListCollectionLoadState.md) = `ListCollectionLoadState.INITIALIZATION`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:55](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L55)

___

### d

• **d**: `Collection`<`Data`\> = `[]`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:53](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L53)

___

### error

• `Optional` **error**: `IDataHolderError` = `undefined`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:52](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L52)

## Accessors

### \_lastPageSize

• `Private` `get` **_lastPageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:253](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L253)

___

### \_refreshArgs

• `Private` `get` **_refreshArgs**(): [`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Returns

[`RefreshArgs`](../interfaces/RefreshArgs.md)

#### Defined in

[src/store/holders/ListCollectionHolder.ts:246](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L246)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:118](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L118)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:114](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L114)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:94](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L94)

___

### isLoadingAllowed

• `get` **isLoadingAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:87](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L87)

___

### isLoadingMore

• `get` **isLoadingMore**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:106](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L106)

___

### isLoadingMoreAllowed

• `get` **isLoadingMoreAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:98](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L98)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:110](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L110)

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

[src/store/holders/ListCollectionHolder.ts:261](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L261)

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

[src/store/holders/ListCollectionHolder.ts:290](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L290)

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

[src/store/holders/ListCollectionHolder.ts:242](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L242)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:158](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L158)

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

[src/store/holders/ListCollectionHolder.ts:122](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L122)

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

[src/store/holders/ListCollectionHolder.ts:194](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L194)

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

[src/store/holders/ListCollectionHolder.ts:231](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L231)

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

[src/store/holders/ListCollectionHolder.ts:205](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L205)

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

[src/store/holders/ListCollectionHolder.ts:215](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L215)

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

[src/store/holders/ListCollectionHolder.ts:166](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L166)

___

### setLoading

▸ **setLoading**(`clear?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clear` | `boolean` | `true` |

#### Returns

`this`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:173](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L173)

___

### setLoadingMore

▸ **setLoadingMore**(): `this`

#### Returns

`this`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:188](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L188)

___

### setRefreshing

▸ **setRefreshing**(): `this`

#### Returns

`this`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:182](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L182)

___

### updateData

▸ **updateData**(`data`, `opts?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Collection`<`Data`\> |
| `opts?` | `IUpdateOptions` |

#### Returns

`this`

#### Defined in

[src/store/holders/ListCollectionHolder.ts:130](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/holders/ListCollectionHolder.ts#L130)
