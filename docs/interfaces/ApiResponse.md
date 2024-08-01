[@force-dev/utils](../README.md) / [Exports](../modules.md) / ApiResponse

# Interface: ApiResponse<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [axiosError](ApiResponse.md#axioserror)
- [axiosResponse](ApiResponse.md#axiosresponse)
- [data](ApiResponse.md#data)
- [error](ApiResponse.md#error)
- [isCanceled](ApiResponse.md#iscanceled)
- [status](ApiResponse.md#status)

## Properties

### axiosError

• `Optional` **axiosError**: `AxiosError`<`unknown`, `any`\>

#### Defined in

[src/api/Api.types.ts:51](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L51)

___

### axiosResponse

• `Optional` **axiosResponse**: `AxiosResponse`<`R`, `any`\>

#### Defined in

[src/api/Api.types.ts:52](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L52)

___

### data

• `Optional` **data**: `R`

#### Defined in

[src/api/Api.types.ts:47](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L47)

___

### error

• `Optional` **error**: `Error`

#### Defined in

[src/api/Api.types.ts:49](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L49)

___

### isCanceled

• `Optional` **isCanceled**: `boolean`

#### Defined in

[src/api/Api.types.ts:50](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L50)

___

### status

• **status**: `number`

#### Defined in

[src/api/Api.types.ts:48](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L48)
