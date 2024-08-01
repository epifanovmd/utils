[@force-dev/utils](../README.md) / [Exports](../modules.md) / IntervalDataSource

# Class: IntervalDataSource<Res, Req\>

## Type parameters

| Name |
| :------ |
| `Res` |
| `Req` |

## Table of contents

### Constructors

- [constructor](IntervalDataSource.md#constructor)

### Properties

- [\_fetchFn](IntervalDataSource.md#_fetchfn)

### Methods

- [\_fetchDataInternal](IntervalDataSource.md#_fetchdatainternal)
- [afterFetch](IntervalDataSource.md#afterfetch)
- [beforeFetch](IntervalDataSource.md#beforefetch)
- [getParams](IntervalDataSource.md#getparams)
- [subscribe](IntervalDataSource.md#subscribe)

## Constructors

### constructor

• `Protected` **new IntervalDataSource**<`Res`, `Req`\>(`_fetchFn`)

#### Type parameters

| Name |
| :------ |
| `Res` |
| `Req` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fetchFn` | (`req`: `Req`) => `Promise`<`Res`\> |

#### Defined in

[src/store/IntervalDataSource.ts:9](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L9)

## Properties

### \_fetchFn

• `Protected` **\_fetchFn**: (`req`: `Req`) => `Promise`<`Res`\>

#### Type declaration

▸ (`req`): `Promise`<`Res`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Req` |

##### Returns

`Promise`<`Res`\>

#### Defined in

[src/store/IntervalDataSource.ts:9](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L9)

## Methods

### \_fetchDataInternal

▸ `Private` **_fetchDataInternal**(): `Promise`<`Res`\>

#### Returns

`Promise`<`Res`\>

#### Defined in

[src/store/IntervalDataSource.ts:34](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L34)

___

### afterFetch

▸ `Protected` `Abstract` **afterFetch**(`v`): `void` \| `Res`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Res` |

#### Returns

`void` \| `Res`

#### Defined in

[src/store/IntervalDataSource.ts:32](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L32)

___

### beforeFetch

▸ `Protected` `Abstract` **beforeFetch**(): `void`

#### Returns

`void`

#### Defined in

[src/store/IntervalDataSource.ts:30](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L30)

___

### getParams

▸ `Protected` `Abstract` **getParams**(): `Req`

#### Returns

`Req`

#### Defined in

[src/store/IntervalDataSource.ts:28](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L28)

___

### subscribe

▸ `Protected` **subscribe**(`onData`, `timerInterval?`): [`IntervalDataSourceSubscription`](../interfaces/IntervalDataSourceSubscription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onData` | (`res`: `Res`) => `void` |
| `timerInterval?` | `number` |

#### Returns

[`IntervalDataSourceSubscription`](../interfaces/IntervalDataSourceSubscription.md)

#### Defined in

[src/store/IntervalDataSource.ts:11](https://github.com/epifanovmd/utils/blob/78a5c89/src/store/IntervalDataSource.ts#L11)
