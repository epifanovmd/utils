[@force-dev/utils](../README.md) / [Exports](../modules.md) / Interval

# Class: Interval

## Table of contents

### Constructors

- [constructor](Interval.md#constructor)

### Properties

- [intervalId](Interval.md#intervalid)
- [timeout](Interval.md#timeout)

### Methods

- [start](Interval.md#start)
- [stop](Interval.md#stop)

## Constructors

### constructor

• **new Interval**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `IntervalOpts` |

#### Defined in

[src/helpers/interval.ts:9](https://github.com/epifanovmd/utils/blob/78a5c89/src/helpers/interval.ts#L9)

## Properties

### intervalId

• `Private` **intervalId**: `any`

#### Defined in

[src/helpers/interval.ts:6](https://github.com/epifanovmd/utils/blob/78a5c89/src/helpers/interval.ts#L6)

___

### timeout

• `Private` **timeout**: `number` = `5000`

#### Defined in

[src/helpers/interval.ts:7](https://github.com/epifanovmd/utils/blob/78a5c89/src/helpers/interval.ts#L7)

## Methods

### start

▸ **start**(`callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/helpers/interval.ts:15](https://github.com/epifanovmd/utils/blob/78a5c89/src/helpers/interval.ts#L15)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/helpers/interval.ts:24](https://github.com/epifanovmd/utils/blob/78a5c89/src/helpers/interval.ts#L24)
