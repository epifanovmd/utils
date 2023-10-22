[@force-dev/utils](../README.md) / [Exports](../modules.md) / FormHolder

# Class: FormHolder<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Table of contents

### Constructors

- [constructor](FormHolder.md#constructor)

### Properties

- [\_error](FormHolder.md#_error)
- [\_initialValue](FormHolder.md#_initialvalue)
- [\_validate](FormHolder.md#_validate)
- [\_value](FormHolder.md#_value)
- [isLoading](FormHolder.md#isloading)
- [loaded](FormHolder.md#loaded)
- [opts](FormHolder.md#opts)

### Accessors

- [error](FormHolder.md#error)
- [isValid](FormHolder.md#isvalid)
- [setters](FormHolder.md#setters)
- [value](FormHolder.md#value)

### Methods

- [\_validateAll](FormHolder.md#_validateall)
- [resetData](FormHolder.md#resetdata)
- [setError](FormHolder.md#seterror)
- [setLoaded](FormHolder.md#setloaded)
- [setLoading](FormHolder.md#setloading)
- [setValidate](FormHolder.md#setvalidate)
- [setValue](FormHolder.md#setvalue)

## Constructors

### constructor

• **new FormHolder**<`T`\>(`initialValue`, `opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | [`FormPartial`](../modules.md#formpartial)<`T`\> |
| `opts?` | `Opts` |

#### Defined in

[src/store/holders/FormHolder.ts:52](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L52)

## Properties

### \_error

• `Private` **\_error**: `Partial`<`Record`<keyof `T`, `string`\>\> = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:48](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L48)

___

### \_initialValue

• `Private` **\_initialValue**: [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:49](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L49)

___

### \_validate

• `Private` **\_validate**: `Validation`<`Partial`<`T`\>, `ExtractFields`<`Partial`<`T`\>\>\> = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:47](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L47)

___

### \_value

• `Private` **\_value**: [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:50](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L50)

___

### isLoading

• **isLoading**: `boolean` = `false`

#### Defined in

[src/store/holders/FormHolder.ts:43](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L43)

___

### loaded

• **loaded**: `boolean` = `false`

#### Defined in

[src/store/holders/FormHolder.ts:44](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L44)

___

### opts

• `Private` **opts**: `Opts` = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:46](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L46)

## Accessors

### error

• `get` **error**(): `Partial`<`Record`<keyof `T`, `string`\>\>

#### Returns

`Partial`<`Record`<keyof `T`, `string`\>\>

#### Defined in

[src/store/holders/FormHolder.ts:64](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L64)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/FormHolder.ts:72](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L72)

___

### setters

• `get` **setters**(): `Required`<{ [K in string \| number \| symbol as \`set${Capitalize<string & K\>}\`]: T[K] extends TextHolder \| FormHolder<object\> \| ArrayHolder<any\> ? any[any]["setValue"] : Function }\>

#### Returns

`Required`<{ [K in string \| number \| symbol as \`set${Capitalize<string & K\>}\`]: T[K] extends TextHolder \| FormHolder<object\> \| ArrayHolder<any\> ? any[any]["setValue"] : Function }\>

#### Defined in

[src/store/holders/FormHolder.ts:127](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L127)

___

### value

• `get` **value**(): [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Returns

[`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:68](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L68)

## Methods

### \_validateAll

▸ `Private` **_validateAll**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:165](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L165)

___

### resetData

▸ **resetData**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`FormPartial`](../modules.md#formpartial)<`T`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:100](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L100)

___

### setError

▸ **setError**(`name`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | keyof `T` |
| `error?` | `string` |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:123](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L123)

___

### setLoaded

▸ **setLoaded**(`loaded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loaded` | `boolean` |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:161](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L161)

___

### setLoading

▸ **setLoading**(`isLoading`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLoading` | `boolean` |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:157](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L157)

___

### setValidate

▸ **setValidate**(`validator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `Validation`<`Partial`<`T`\>, `ExtractFields`<`Partial`<`T`\>\>\> |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:153](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L153)

___

### setValue

▸ **setValue**<`K`\>(`name`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |
| `value` | `T`[`K`] |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:95](https://github.com/epifanovmd/utils/blob/4aca669/src/store/holders/FormHolder.ts#L95)
