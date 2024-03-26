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
- [isChanged](ArrayHolder.md#ischanged)
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
- [validate](ArrayHolder.md#validate)

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

[src/store/holders/ArrayHolder.ts:18](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L18)

## Properties

### \_error

• `Private` **\_error**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/ArrayHolder.ts:14](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L14)

___

### \_initialValue

• `Private` **\_initialValue**: [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> = `[]`

#### Defined in

[src/store/holders/ArrayHolder.ts:15](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L15)

___

### \_validate

• `Private` **\_validate**: ``null`` \| `Validator`<`T`\> = `null`

#### Defined in

[src/store/holders/ArrayHolder.ts:13](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L13)

___

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`T`[], `unknown`\> = `[]`

#### Defined in

[src/store/holders/ArrayHolder.ts:16](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L16)

___

### opts

• `Private` **opts**: `Opts` = `{}`

#### Defined in

[src/store/holders/ArrayHolder.ts:12](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L12)

## Accessors

### error

• `get` **error**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/ArrayHolder.ts:32](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L32)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ArrayHolder.ts:100](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L100)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ArrayHolder.ts:40](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L40)

___

### value

• `get` **value**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/store/holders/ArrayHolder.ts:36](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L36)

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

[src/store/holders/ArrayHolder.ts:70](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L70)

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

[src/store/holders/ArrayHolder.ts:62](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L62)

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

[src/store/holders/ArrayHolder.ts:49](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L49)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/ArrayHolder.ts:88](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L88)

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

[src/store/holders/ArrayHolder.ts:80](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L80)

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

[src/store/holders/ArrayHolder.ts:84](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L84)

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

[src/store/holders/ArrayHolder.ts:44](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L44)

___

### validate

▸ **validate**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/ArrayHolder.ts:92](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ArrayHolder.ts#L92)
