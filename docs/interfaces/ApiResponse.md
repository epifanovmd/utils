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

[src/api/Api.types.ts:57](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L57)

___

### axiosResponse

• `Optional` **axiosResponse**: `AxiosResponse`<`R`, `any`\>

#### Defined in

[src/api/Api.types.ts:58](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L58)

___

### data

• `Optional` **data**: `R`

#### Defined in

[src/api/Api.types.ts:53](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L53)

___

### error

• `Optional` **error**: `Error`

#### Defined in

[src/api/Api.types.ts:55](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L55)

___

### isCanceled

• `Optional` **isCanceled**: `boolean`

#### Defined in

[src/api/Api.types.ts:56](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L56)

___

### status

• **status**: `number`

#### Defined in

[src/api/Api.types.ts:54](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L54)
