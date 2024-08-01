[@force-dev/utils](../README.md) / [Exports](../modules.md) / Timeout

# Class: Timeout

## Table of contents

### Constructors

- [constructor](Timeout.md#constructor)

### Properties

- [timeout](Timeout.md#timeout)
- [timeoutId](Timeout.md#timeoutid)

### Methods

- [start](Timeout.md#start)
- [stop](Timeout.md#stop)

## Constructors

### constructor

• **new Timeout**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `IntervalOpts` |

#### Defined in

[src/helpers/timeout.ts:9](https://github.com/epifanovmd/utils/blob/fdca100/src/helpers/timeout.ts#L9)

## Properties

### timeout

• `Private` **timeout**: `number` = `5000`

#### Defined in

[src/helpers/timeout.ts:7](https://github.com/epifanovmd/utils/blob/fdca100/src/helpers/timeout.ts#L7)

___

### timeoutId

• `Private` **timeoutId**: `any`

#### Defined in

[src/helpers/timeout.ts:6](https://github.com/epifanovmd/utils/blob/fdca100/src/helpers/timeout.ts#L6)

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

[src/helpers/timeout.ts:15](https://github.com/epifanovmd/utils/blob/fdca100/src/helpers/timeout.ts#L15)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/helpers/timeout.ts:24](https://github.com/epifanovmd/utils/blob/fdca100/src/helpers/timeout.ts#L24)
