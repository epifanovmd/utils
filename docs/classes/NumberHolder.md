[@force-dev/utils](../README.md) / [Exports](../modules.md) / NumberHolder

# Class: NumberHolder

## Table of contents

### Constructors

- [constructor](NumberHolder.md#constructor)

### Properties

- [\_error](NumberHolder.md#_error)
- [\_initialValue](NumberHolder.md#_initialvalue)
- [\_placeholder](NumberHolder.md#_placeholder)
- [\_validate](NumberHolder.md#_validate)
- [\_value](NumberHolder.md#_value)
- [opts](NumberHolder.md#opts)

### Accessors

- [error](NumberHolder.md#error)
- [isChanged](NumberHolder.md#ischanged)
- [isValid](NumberHolder.md#isvalid)
- [placeholder](NumberHolder.md#placeholder)
- [value](NumberHolder.md#value)

### Methods

- [onChangeText](NumberHolder.md#onchangetext)
- [resetData](NumberHolder.md#resetdata)
- [setError](NumberHolder.md#seterror)
- [setPlaceholder](NumberHolder.md#setplaceholder)
- [setValidate](NumberHolder.md#setvalidate)
- [setValue](NumberHolder.md#setvalue)
- [validate](NumberHolder.md#validate)

## Constructors

### constructor

• **new NumberHolder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Opts` |

#### Defined in

[src/store/holders/NumberHolder.ts:23](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L23)

## Properties

### \_error

• `Private` **\_error**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/NumberHolder.ts:18](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L18)

___

### \_initialValue

• `Private` **\_initialValue**: [`LambdaValue`](../modules.md#lambdavalue)<`undefined` \| `number`, `unknown`\>

#### Defined in

[src/store/holders/NumberHolder.ts:20](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L20)

___

### \_placeholder

• `Private` **\_placeholder**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/NumberHolder.ts:19](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L19)

___

### \_validate

• `Private` **\_validate**: ``null`` \| (`text`: `undefined` \| `number`) => `string` = `null`

#### Defined in

[src/store/holders/NumberHolder.ts:17](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L17)

___

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`undefined` \| `number`, `unknown`\>

#### Defined in

[src/store/holders/NumberHolder.ts:21](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L21)

___

### opts

• `Private` `Optional` **opts**: `Opts`

#### Defined in

[src/store/holders/NumberHolder.ts:16](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L16)

## Accessors

### error

• `get` **error**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/NumberHolder.ts:36](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L36)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/NumberHolder.ts:86](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L86)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/NumberHolder.ts:48](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L48)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/NumberHolder.ts:40](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L40)

___

### value

• `get` **value**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/store/holders/NumberHolder.ts:44](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L44)

## Methods

### onChangeText

▸ **onChangeText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/NumberHolder.ts:56](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L56)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/NumberHolder.ts:52](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L52)

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

[src/store/holders/NumberHolder.ts:70](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L70)

___

### setPlaceholder

▸ **setPlaceholder**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/NumberHolder.ts:66](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L66)

___

### setValidate

▸ **setValidate**(`validator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | ``null`` \| (`text`: `undefined` \| `number`) => `string` |

#### Returns

`void`

#### Defined in

[src/store/holders/NumberHolder.ts:74](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L74)

___

### setValue

▸ **setValue**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`LambdaValue`](../modules.md#lambdavalue)<`number`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/NumberHolder.ts:61](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L61)

___

### validate

▸ **validate**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/NumberHolder.ts:78](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/NumberHolder.ts#L78)
