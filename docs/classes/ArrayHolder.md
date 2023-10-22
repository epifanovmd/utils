[@force-dev/utils](../README.md) / [Exports](../modules.md) / ArrayHolder

# Class: ArrayHolder<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

- [constructor](ArrayHolder.md#constructor)

### Properties

- [\_error](ArrayHolder.md#_error)
- [\_initialValue](ArrayHolder.md#_initialvalue)
- [\_validate](ArrayHolder.md#_validate)
- [\_value](ArrayHolder.md#_value)
- [opts](ArrayHolder.md#opts)

### Accessors

- [error](ArrayHolder.md#error)
- [isValid](ArrayHolder.md#isvalid)
- [value](ArrayHolder.md#value)

### Methods

- [onReplaceValue](ArrayHolder.md#onreplacevalue)
- [push](ArrayHolder.md#push)
- [remove](ArrayHolder.md#remove)
- [resetData](ArrayHolder.md#resetdata)
- [setError](ArrayHolder.md#seterror)
- [setValidate](ArrayHolder.md#setvalidate)
- [setValue](ArrayHolder.md#setvalue)

## Constructors

### constructor

• **new ArrayHolder**<`T`\>(`value?`, `opt?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> |
| `opt?` | `Opts` |

#### Defined in

[src/store/holders/ArrayHolder.ts:17](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L17)

## Properties

### \_error

• `Private` **\_error**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/ArrayHolder.ts:13](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L13)

___

### \_initialValue

• `Private` **\_initialValue**: [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> = `[]`

#### Defined in

[src/store/holders/ArrayHolder.ts:14](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L14)

___

### \_validate

• `Private` **\_validate**: ``null`` \| `Validator`<`T`\> = `null`

#### Defined in

[src/store/holders/ArrayHolder.ts:12](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L12)

___

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> = `[]`

#### Defined in

[src/store/holders/ArrayHolder.ts:15](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L15)

___

### opts

• `Private` **opts**: `Opts` = `{}`

#### Defined in

[src/store/holders/ArrayHolder.ts:11](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L11)

## Accessors

### error

• `get` **error**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/ArrayHolder.ts:31](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L31)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ArrayHolder.ts:39](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L39)

___

### value

• `get` **value**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/store/holders/ArrayHolder.ts:35](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L35)

## Methods

### onReplaceValue

▸ **onReplaceValue**(`value`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:62](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L62)

___

### push

▸ **push**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:54](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L54)

___

### remove

▸ **remove**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| (`item`: `T`) => `boolean` |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:47](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L47)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:80](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L80)

___

### setError

▸ **setError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:72](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L72)

___

### setValidate

▸ **setValidate**(`validator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `Validator`<`T`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:76](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L76)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:43](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/ArrayHolder.ts#L43)
