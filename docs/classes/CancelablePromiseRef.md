[@force-dev/utils](../README.md) / [Exports](../modules.md) / CancelablePromiseRef

# Class: CancelablePromiseRef

## Table of contents

### Constructors

- [constructor](CancelablePromiseRef.md#constructor)

### Properties

- [ref](CancelablePromiseRef.md#ref)

### Methods

- [extract](CancelablePromiseRef.md#extract)

## Constructors

### constructor

• **new CancelablePromiseRef**()

## Properties

### ref

• **ref**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `abort?` | () => `void` |

#### Defined in

[src/api/Api.utils.ts:7](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L7)

## Methods

### extract

▸ **extract**<`R`\>(`promise`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | [`CancelablePromise`](../interfaces/CancelablePromise.md)<`R`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<`R`\>

#### Defined in

[src/api/Api.utils.ts:9](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L9)
