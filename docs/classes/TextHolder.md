[@force-dev/utils](../README.md) / [Exports](../modules.md) / TextHolder

# Class: TextHolder

## Table of contents

### Constructors

- [constructor](TextHolder.md#constructor)

### Properties

- [\_error](TextHolder.md#_error)
- [\_initialValue](TextHolder.md#_initialvalue)
- [\_placeholder](TextHolder.md#_placeholder)
- [\_validate](TextHolder.md#_validate)
- [\_value](TextHolder.md#_value)
- [opts](TextHolder.md#opts)

### Accessors

- [error](TextHolder.md#error)
- [isChanged](TextHolder.md#ischanged)
- [isValid](TextHolder.md#isvalid)
- [placeholder](TextHolder.md#placeholder)
- [value](TextHolder.md#value)

### Methods

- [onChangeText](TextHolder.md#onchangetext)
- [resetData](TextHolder.md#resetdata)
- [setError](TextHolder.md#seterror)
- [setPlaceholder](TextHolder.md#setplaceholder)
- [setValidate](TextHolder.md#setvalidate)
- [setValue](TextHolder.md#setvalue)
- [validate](TextHolder.md#validate)

## Constructors

### constructor

• **new TextHolder**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Opts` |

#### Defined in

[src/store/holders/TextHolder.ts:17](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L17)

## Properties

### \_error

• `Private` **\_error**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:12](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L12)

___

### \_initialValue

• `Private` **\_initialValue**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:14](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L14)

___

### \_placeholder

• `Private` **\_placeholder**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:13](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L13)

___

### \_validate

• `Private` **\_validate**: ``null`` \| (`text`: `string`) => `string` = `null`

#### Defined in

[src/store/holders/TextHolder.ts:11](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L11)

___

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`string`, `unknown`\> = `""`

#### Defined in

[src/store/holders/TextHolder.ts:15](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L15)

___

### opts

• `Private` `Optional` **opts**: `Opts`

#### Defined in

[src/store/holders/TextHolder.ts:10](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L10)

## Accessors

### error

• `get` **error**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:30](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L30)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/TextHolder.ts:80](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L80)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/TextHolder.ts:42](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L42)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:34](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L34)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:38](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L38)

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

[src/store/holders/TextHolder.ts:50](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L50)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/TextHolder.ts:46](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L46)

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

[src/store/holders/TextHolder.ts:64](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L64)

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

[src/store/holders/TextHolder.ts:60](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L60)

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

[src/store/holders/TextHolder.ts:68](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L68)

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

[src/store/holders/TextHolder.ts:55](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L55)

___

### validate

▸ **validate**(): `string`

#### Returns

`string`

#### Defined in

[src/store/holders/TextHolder.ts:72](https://github.com/epifanovmd/utils/blob/de50c77/src/store/holders/TextHolder.ts#L72)
