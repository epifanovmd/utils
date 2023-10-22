[@force-dev/utils](../README.md) / [Exports](../modules.md) / CollectionHolder

# Class: CollectionHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](CollectionHolder.md#constructor)

### Properties

- [\_isLoadedFirst](CollectionHolder.md#_isloadedfirst)
- [\_lastDataLength](CollectionHolder.md#_lastdatalength)
- [\_pageSize](CollectionHolder.md#_pagesize)
- [\_state](CollectionHolder.md#_state)
- [\_visibleRange](CollectionHolder.md#_visiblerange)
- [d](CollectionHolder.md#d)
- [error](CollectionHolder.md#error)

### Accessors

- [isEmpty](CollectionHolder.md#isempty)
- [isError](CollectionHolder.md#iserror)
- [isLoadedFirst](CollectionHolder.md#isloadedfirst)
- [isLoading](CollectionHolder.md#isloading)
- [isLoadingAllowed](CollectionHolder.md#isloadingallowed)
- [isLoadingMore](CollectionHolder.md#isloadingmore)
- [isLoadingMoreAllowed](CollectionHolder.md#isloadingmoreallowed)
- [isPullToRefreshAllowed](CollectionHolder.md#ispulltorefreshallowed)
- [isPullToRefreshing](CollectionHolder.md#ispulltorefreshing)
- [isReady](CollectionHolder.md#isready)
- [offset](CollectionHolder.md#offset)
- [pageCount](CollectionHolder.md#pagecount)
- [pageSize](CollectionHolder.md#pagesize)

### Methods

- [\_setIsLoadedFirst](CollectionHolder.md#_setisloadedfirst)
- [\_setState](CollectionHolder.md#_setstate)
- [performChangeVisibleRange](CollectionHolder.md#performchangevisiblerange)
- [setData](CollectionHolder.md#setdata)
- [setError](CollectionHolder.md#seterror)
- [setLoading](CollectionHolder.md#setloading)
- [setLoadingMore](CollectionHolder.md#setloadingmore)
- [setPullToRefreshing](CollectionHolder.md#setpulltorefreshing)
- [setReady](CollectionHolder.md#setready)

## Constructors

### constructor

• **new CollectionHolder**<`T`\>(`data?`, `opts?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Collection`<`T`\> |
| `opts?` | `Options` |

#### Defined in

[src/store/holders/CollectionHolder.ts:40](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L40)

## Properties

### \_isLoadedFirst

• `Private` **\_isLoadedFirst**: `boolean` = `false`

#### Defined in

[src/store/holders/CollectionHolder.ts:56](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L56)

___

### \_lastDataLength

• `Private` **\_lastDataLength**: `number` = `0`

#### Defined in

[src/store/holders/CollectionHolder.ts:37](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L37)

___

### \_pageSize

• `Private` `Readonly` **\_pageSize**: `number`

#### Defined in

[src/store/holders/CollectionHolder.ts:38](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L38)

___

### \_state

• `Private` **\_state**: [`CollectionLoadState`](../enums/CollectionLoadState.md) = `CollectionLoadState.ready`

#### Defined in

[src/store/holders/CollectionHolder.ts:36](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L36)

___

### \_visibleRange

• `Private` **\_visibleRange**: `Range`

#### Defined in

[src/store/holders/CollectionHolder.ts:32](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L32)

___

### d

• **d**: `Collection`<`T`\> = `[]`

#### Defined in

[src/store/holders/CollectionHolder.ts:31](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L31)

___

### error

• `Optional` **error**: `IDataHolderError`

#### Defined in

[src/store/holders/CollectionHolder.ts:30](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L30)

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:122](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L122)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:118](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L118)

___

### isLoadedFirst

• `get` **isLoadedFirst**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:58](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L58)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:81](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L81)

___

### isLoadingAllowed

• `get` **isLoadingAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:74](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L74)

___

### isLoadingMore

• `get` **isLoadingMore**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:108](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L108)

___

### isLoadingMoreAllowed

• `get` **isLoadingMoreAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:98](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L98)

___

### isPullToRefreshAllowed

• `get` **isPullToRefreshAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:87](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L87)

___

### isPullToRefreshing

• `get` **isPullToRefreshing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:94](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L94)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:114](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L114)

___

### offset

• `get` **offset**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/store/holders/CollectionHolder.ts:62](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L62)

___

### pageCount

• `get` **pageCount**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/store/holders/CollectionHolder.ts:66](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L66)

___

### pageSize

• `get` **pageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/store/holders/CollectionHolder.ts:70](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L70)

## Methods

### \_setIsLoadedFirst

▸ `Private` **_setIsLoadedFirst**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/store/holders/CollectionHolder.ts:196](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L196)

___

### \_setState

▸ `Private` **_setState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CollectionLoadState`](../enums/CollectionLoadState.md) |

#### Returns

`void`

#### Defined in

[src/store/holders/CollectionHolder.ts:192](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L192)

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

#### Defined in

[src/store/holders/CollectionHolder.ts:187](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L187)

___

### setData

▸ **setData**(`data`): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Collection`<`T`\> |

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:128](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L128)

___

### setError

▸ **setError**(`error`): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `IDataHolderError` |

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:150](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L150)

___

### setLoading

▸ **setLoading**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:159](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L159)

___

### setLoadingMore

▸ **setLoadingMore**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:181](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L181)

___

### setPullToRefreshing

▸ **setPullToRefreshing**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:175](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L175)

___

### setReady

▸ **setReady**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:169](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/CollectionHolder.ts#L169)
