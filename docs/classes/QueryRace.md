[@force-dev/utils](../README.md) / [Exports](../modules.md) / QueryRace

# Class: QueryRace

## Table of contents

### Constructors

- [constructor](QueryRace.md#constructor)

### Properties

- [\_message](QueryRace.md#_message)
- [message](QueryRace.md#message)
- [queryRace](QueryRace.md#queryrace)

### Methods

- [apply](QueryRace.md#apply)
- [cancel](QueryRace.md#cancel)
- [delete](QueryRace.md#delete)
- [has](QueryRace.md#has)

## Constructors

### constructor

• **new QueryRace**(`message?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `"Race condition canceled"` |

#### Defined in

[src/api/Api.utils.ts:31](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L31)

## Properties

### \_message

• `Private` `Readonly` **\_message**: `string`

#### Defined in

[src/api/Api.utils.ts:29](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L29)

___

### message

• `Private` **message**: `string` = `"Race condition canceled"`

#### Defined in

[src/api/Api.utils.ts:31](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L31)

___

### queryRace

• **queryRace**: `Map`<`string`, `Canceler`\>

#### Defined in

[src/api/Api.utils.ts:28](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L28)

## Methods

### apply

▸ **apply**(`endpoint`, `cancel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `cancel` | `Canceler` |

#### Returns

`void`

#### Defined in

[src/api/Api.utils.ts:35](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L35)

___

### cancel

▸ **cancel**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

#### Returns

`void`

#### Defined in

[src/api/Api.utils.ts:42](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L42)

___

### delete

▸ **delete**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

#### Returns

`void`

#### Defined in

[src/api/Api.utils.ts:49](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L49)

___

### has

▸ **has**(`endpoint`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |

#### Returns

`boolean`

#### Defined in

[src/api/Api.utils.ts:40](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.utils.ts#L40)
