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

- [\_errors](FormHolder.md#_errors)
- [\_initialValue](FormHolder.md#_initialvalue)
- [\_validate](FormHolder.md#_validate)
- [\_value](FormHolder.md#_value)
- [isLoading](FormHolder.md#isloading)
- [loaded](FormHolder.md#loaded)
- [opts](FormHolder.md#opts)

### Accessors

- [errors](FormHolder.md#errors)
- [fields](FormHolder.md#fields)
- [isChanged](FormHolder.md#ischanged)
- [isValid](FormHolder.md#isvalid)

### Methods

- [\_isNotPrimitive](FormHolder.md#_isnotprimitive)
- [reset](FormHolder.md#reset)
- [setError](FormHolder.md#seterror)
- [setLoaded](FormHolder.md#setloaded)
- [setLoading](FormHolder.md#setloading)
- [setValidate](FormHolder.md#setvalidate)
- [setValue](FormHolder.md#setvalue)
- [validate](FormHolder.md#validate)

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

[src/store/holders/FormHolder.ts:42](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L42)

## Properties

### \_errors

• `Private` **\_errors**: `Partial`<`Record`<keyof `T`, `string`\>\> = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:38](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L38)

___

### \_initialValue

• `Private` **\_initialValue**: [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:39](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L39)

___

### \_validate

• `Private` **\_validate**: `Validation`<`T`, `ExtractFields`<`T`\>\> = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:37](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L37)

___

### \_value

• `Private` **\_value**: [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:40](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L40)

___

### isLoading

• **isLoading**: `boolean` = `false`

#### Defined in

[src/store/holders/FormHolder.ts:33](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L33)

___

### loaded

• **loaded**: `boolean` = `false`

#### Defined in

[src/store/holders/FormHolder.ts:34](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L34)

___

### opts

• `Private` **opts**: `Opts` = `{}`

#### Defined in

[src/store/holders/FormHolder.ts:36](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L36)

## Accessors

### errors

• `get` **errors**(): `Partial`<`Record`<keyof `T`, `string`\>\>

#### Returns

`Partial`<`Record`<keyof `T`, `string`\>\>

#### Defined in

[src/store/holders/FormHolder.ts:99](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L99)

___

### fields

• `get` **fields**(): [`FormPartial`](../modules.md#formpartial)<`T`\>

#### Returns

[`FormPartial`](../modules.md#formpartial)<`T`\>

#### Defined in

[src/store/holders/FormHolder.ts:50](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L50)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/FormHolder.ts:151](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L151)

___

### isValid

• `get` **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/FormHolder.ts:54](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L54)

## Methods

### \_isNotPrimitive

▸ `Private` **_isNotPrimitive**(`field`): field is TextHolder \| NumberHolder \| ArrayHolder<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `any` |

#### Returns

field is TextHolder \| NumberHolder \| ArrayHolder<any\>

#### Defined in

[src/store/holders/FormHolder.ts:176](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L176)

___

### reset

▸ **reset**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`FormPartial`](../modules.md#formpartial)<`T`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:78](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L78)

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

[src/store/holders/FormHolder.ts:89](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L89)

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

[src/store/holders/FormHolder.ts:124](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L124)

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

[src/store/holders/FormHolder.ts:120](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L120)

___

### setValidate

▸ **setValidate**(`validator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `Validation`<`T`, `ExtractFields`<`T`\>\> |

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:116](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L116)

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

[src/store/holders/FormHolder.ts:73](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L73)

___

### validate

▸ **validate**(): `void`

#### Returns

`void`

#### Defined in

[src/store/holders/FormHolder.ts:128](https://github.com/epifanovmd/utils/blob/3135168/src/store/holders/FormHolder.ts#L128)
