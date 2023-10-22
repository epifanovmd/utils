[@force-dev/utils](../README.md) / [Exports](../modules.md) / TextHolder

# Class: TextHolder

## Table of contents

### Constructors

- [constructor](TextHolder.md#constructor)

### Properties

- [\_error](TextHolder.md#_error)
- [\_initialValue](TextHolder.md#_initialvalue)
- [\_inputValue](TextHolder.md#_inputvalue)
- [\_placeholder](TextHolder.md#_placeholder)
- [\_validate](TextHolder.md#_validate)
- [\_value](TextHolder.md#_value)
- [opts](TextHolder.md#opts)

### Accessors

- [error](TextHolder.md#error)
- [inputValue](TextHolder.md#inputvalue)
- [isValid](TextHolder.md#isvalid)
- [placeholder](TextHolder.md#placeholder)
- [value](TextHolder.md#value)

### Methods

- [onChangeText](TextHolder.md#onchangetext)
- [onSetInputValue](TextHolder.md#onsetinputvalue)
- [resetData](TextHolder.md#resetdata)
- [setError](TextHolder.md#seterror)
- [setPlaceholder](TextHolder.md#setplaceholder)
- [setValidate](TextHolder.md#setvalidate)
- [setValue](TextHolder.md#setvalue)

## Constructors

### constructor

• **new TextHolder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Opts` |

#### Defined in

[src/store/holders/TextHolder.ts:25](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L25)

## Properties

### \_error

• `Private` **\_error**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:19](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L19)

___

### \_initialValue

• `Private` **\_initialValue**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:21](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L21)

___

### \_inputValue

• `Private` **\_inputValue**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:23](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L23)

___

### \_placeholder

• `Private` **\_placeholder**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:20](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L20)

___

### \_validate

• `Private` **\_validate**: ``null`` \| (`text`: `string`) => `string` = `null`

#### Defined in

[src/store/holders/TextHolder.ts:18](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L18)

___

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:22](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L22)

___

### opts

• `Private` `Optional` **opts**: `Opts`

#### Defined in

[src/store/holders/TextHolder.ts:17](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L17)

## Accessors

### error

• `get` **error**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:38](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L38)

___

### inputValue

• `get` **inputValue**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:50](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L50)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/TextHolder.ts:54](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L54)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:42](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L42)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:46](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L46)

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

[src/store/holders/TextHolder.ts:62](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L62)

___

### onSetInputValue

▸ **onSetInputValue**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/TextHolder.ts:76](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L76)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/TextHolder.ts:58](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L58)

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

[src/store/holders/TextHolder.ts:84](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L84)

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

[src/store/holders/TextHolder.ts:80](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L80)

___

### setValidate

▸ **setValidate**(`validator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | ``null`` \| (`text`: `string`) => `string` |

#### Returns

`void`

#### Defined in

[src/store/holders/TextHolder.ts:88](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L88)

___

### setValue

▸ **setValue**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/TextHolder.ts:67](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/TextHolder.ts#L67)
