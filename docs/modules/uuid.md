[@force-dev/utils](../README.md) / [Exports](../modules.md) / uuid

# Namespace: uuid

## Table of contents

### Type Aliases

- [V1Options](uuid.md#v1options)
- [V4Options](uuid.md#v4options)

### Variables

- [NIL](uuid.md#nil)

### Functions

- [parse](uuid.md#parse)
- [stringify](uuid.md#stringify)
- [v1](uuid.md#v1)
- [v3](uuid.md#v3)
- [v4](uuid.md#v4)
- [v5](uuid.md#v5)
- [validate](uuid.md#validate)
- [version](uuid.md#version)

## Type Aliases

### V1Options

Ƭ **V1Options**: `V1RandomOptions` \| `V1RngOptions`

#### Defined in

node_modules/@types/uuid/index.d.ts:33

___

### V4Options

Ƭ **V4Options**: `RandomOptions` \| `RngOptions`

#### Defined in

node_modules/@types/uuid/index.d.ts:34

## Variables

### NIL

• `Const` **NIL**: `NIL`

#### Defined in

node_modules/@types/uuid/index.d.ts:71

## Functions

### parse

▸ **parse**(`uuid`): `OutputBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`OutputBuffer`

#### Defined in

node_modules/@types/uuid/index.d.ts:66

___

### stringify

▸ **stringify**(`buffer`, `offset?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `InputBuffer` |
| `offset?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:67

___

### v1

▸ **v1**<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayLike`<`number`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| [`V1Options`](uuid.md#v1options) |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:37

▸ **v1**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`V1Options`](uuid.md#v1options) |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:36

___

### v3

▸ **v3**<`T`\>(`name`, `namespace`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayLike`<`number`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:45

▸ **v3**(`name`, `namespace`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:44

___

### v4

▸ **v4**<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayLike`<`number`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| [`V4Options`](uuid.md#v4options) |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:41

▸ **v4**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`V4Options`](uuid.md#v4options) |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:40

___

### v5

▸ **v5**<`T`\>(`name`, `namespace`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayLike`<`number`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:55

▸ **v5**(`name`, `namespace`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `InputBuffer` |
| `namespace` | `string` \| `InputBuffer` |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:54

___

### validate

▸ **validate**(`uuid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/uuid/index.d.ts:68

___

### version

▸ **version**(`uuid`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`number`

#### Defined in

node_modules/@types/uuid/index.d.ts:69
