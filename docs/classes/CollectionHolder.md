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

- [\_state](CollectionHolder.md#_state)
- [d](CollectionHolder.md#d)
- [error](CollectionHolder.md#error)

### Accessors

- [isEmpty](CollectionHolder.md#isempty)
- [isError](CollectionHolder.md#iserror)
- [isLoading](CollectionHolder.md#isloading)
- [isLoadingAllowed](CollectionHolder.md#isloadingallowed)
- [isReady](CollectionHolder.md#isready)

### Methods

- [\_setState](CollectionHolder.md#_setstate)
- [clear](CollectionHolder.md#clear)
- [setData](CollectionHolder.md#setdata)
- [setError](CollectionHolder.md#seterror)
- [setLoading](CollectionHolder.md#setloading)
- [setReady](CollectionHolder.md#setready)

## Constructors

### constructor

• **new CollectionHolder**<`T`\>(`data?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Collection`<`T`\> |

#### Defined in

[src/store/holders/CollectionHolder.ts:24](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L24)

## Properties

### \_state

• `Private` **\_state**: [`CollectionLoadState`](../enums/CollectionLoadState.md) = `CollectionLoadState.initializing`

#### Defined in

[src/store/holders/CollectionHolder.ts:22](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L22)

___

### d

• **d**: `Collection`<`T`\> = `[]`

#### Defined in

[src/store/holders/CollectionHolder.ts:20](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L20)

___

### error

• `Optional` **error**: `IDataHolderError`

#### Defined in

[src/store/holders/CollectionHolder.ts:19](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L19)

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:50](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L50)

___

### isError

• `get` **isError**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:46](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L46)

___

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:38](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L38)

___

### isLoadingAllowed

• `get` **isLoadingAllowed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:31](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L31)

___

### isReady

• `get` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/CollectionHolder.ts:42](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L42)

## Methods

### \_setState

▸ `Private` **_setState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CollectionLoadState`](../enums/CollectionLoadState.md) |

#### Returns

`void`

#### Defined in

[src/store/holders/CollectionHolder.ts:90](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L90)

___

### clear

▸ **clear**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:61](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L61)

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

[src/store/holders/CollectionHolder.ts:54](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L54)

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

[src/store/holders/CollectionHolder.ts:68](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L68)

___

### setLoading

▸ **setLoading**(`clear?`): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clear` | `boolean` | `true` |

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:75](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L75)

___

### setReady

▸ **setReady**(): [`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Returns

[`CollectionHolder`](CollectionHolder.md)<`T`\>

#### Defined in

[src/store/holders/CollectionHolder.ts:84](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/CollectionHolder.ts#L84)
