[@force-dev/utils](../README.md) / [Exports](../modules.md) / IApiService

# Interface: IApiService

## Implemented by

- [`ApiService`](../classes/ApiService.md)

## Table of contents

### Properties

- [instance](IApiService.md#instance)

### Methods

- [delete](IApiService.md#delete)
- [get](IApiService.md#get)
- [instancePromise](IApiService.md#instancepromise)
- [onError](IApiService.md#onerror)
- [onRequest](IApiService.md#onrequest)
- [onResponse](IApiService.md#onresponse)
- [patch](IApiService.md#patch)
- [post](IApiService.md#post)
- [put](IApiService.md#put)

## Properties

### instance

• `Readonly` **instance**: [`ApiAxiosInstance`](ApiAxiosInstance.md)

#### Defined in

[src/api/Api.types.ts:62](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L62)

## Methods

### delete

▸ **delete**<`R`\>(`endpoint`, `config?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`any`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:109](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L109)

___

### get

▸ **get**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `params?` | `P` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:85](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L85)

___

### instancePromise

▸ **instancePromise**<`R`, `P`\>(`config`, `options?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |
| `options?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:114](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L114)

___

### onError

▸ **onError**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`response`: [`ApiResponse`](ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](ApiResponse.md)<`any`\>\> |

#### Returns

`void`

#### Defined in

[src/api/Api.types.ts:79](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L79)

___

### onRequest

▸ **onRequest**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`request`: `InternalAxiosRequestConfig`<`any`\>) => `void` \| `InternalAxiosRequestConfig`<`any`\> \| `Promise`<`void` \| `InternalAxiosRequestConfig`<`any`\>\> |

#### Returns

`void`

#### Defined in

[src/api/Api.types.ts:64](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L64)

___

### onResponse

▸ **onResponse**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`response`: [`ApiResponse`](ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](ApiResponse.md)<`any`\>\> |

#### Returns

`void`

#### Defined in

[src/api/Api.types.ts:73](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L73)

___

### patch

▸ **patch**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `params?` | `P` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:97](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L97)

___

### post

▸ **post**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `params?` | `P` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:91](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L91)

___

### put

▸ **put**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `params?` | `P` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](CancelablePromise.md)<[`ApiResponse`](ApiResponse.md)<`R`\>\>

#### Defined in

[src/api/Api.types.ts:103](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L103)
