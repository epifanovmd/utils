[@force-dev/utils](../README.md) / [Exports](../modules.md) / CancelablePromise

# Interface: CancelablePromise<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`<`T`\>

  ↳ **`CancelablePromise`**

## Table of contents

### Properties

- [[toStringTag]](CancelablePromise.md#[tostringtag])
- [cancel](CancelablePromise.md#cancel)

### Methods

- [catch](CancelablePromise.md#catch)
- [finally](CancelablePromise.md#finally)
- [then](CancelablePromise.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@83

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

___

### cancel

• **cancel**: `Canceler`

#### Defined in

[src/api/Api.types.ts:43](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L43)

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1540

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1533
