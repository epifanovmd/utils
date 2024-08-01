[@force-dev/utils](../README.md) / [Exports](../modules.md) / ApiService

# Class: ApiService

## Implements

- [`IApiService`](../interfaces/IApiService.md)

## Table of contents

### Constructors

- [constructor](ApiService.md#constructor)

### Properties

- [\_instance](ApiService.md#_instance)
- [onError](ApiService.md#onerror)
- [onRequest](ApiService.md#onrequest)
- [onResponse](ApiService.md#onresponse)
- [queryRace](ApiService.md#queryrace)

### Accessors

- [instance](ApiService.md#instance)

### Methods

- [\_applyInterceptor](ApiService.md#_applyinterceptor)
- [delete](ApiService.md#delete)
- [get](ApiService.md#get)
- [instancePromise](ApiService.md#instancepromise)
- [patch](ApiService.md#patch)
- [post](ApiService.md#post)
- [put](ApiService.md#put)

## Constructors

### constructor

• **new ApiService**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `CreateAxiosDefaults`<`any`\> |

#### Defined in

[src/api/Api.service.ts:32](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L32)

## Properties

### \_instance

• `Private` `Readonly` **\_instance**: [`ApiAxiosInstance`](../interfaces/ApiAxiosInstance.md)

#### Defined in

[src/api/Api.service.ts:29](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L29)

___

### onError

• **onError**: (`callback`: (`response`: [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`response`: [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>\> |

##### Returns

`void`

#### Implementation of

[IApiService](../interfaces/IApiService.md).[onError](../interfaces/IApiService.md#onerror)

#### Defined in

[src/api/Api.service.ts:62](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L62)

___

### onRequest

• **onRequest**: (`callback`: (`request`: `InternalAxiosRequestConfig`<`any`\>) => `void` \| `InternalAxiosRequestConfig`<`any`\> \| `Promise`<`void` \| `InternalAxiosRequestConfig`<`any`\>\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`request`: `InternalAxiosRequestConfig`<`any`\>) => `void` \| `InternalAxiosRequestConfig`<`any`\> \| `Promise`<`void` \| `InternalAxiosRequestConfig`<`any`\>\> |

##### Returns

`void`

#### Implementation of

[IApiService](../interfaces/IApiService.md).[onRequest](../interfaces/IApiService.md#onrequest)

#### Defined in

[src/api/Api.service.ts:46](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L46)

___

### onResponse

• **onResponse**: (`callback`: (`response`: [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>\>) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`response`: [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>) => `void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\> \| `Promise`<`void` \| [`ApiResponse`](../interfaces/ApiResponse.md)<`any`\>\> |

##### Returns

`void`

#### Implementation of

[IApiService](../interfaces/IApiService.md).[onResponse](../interfaces/IApiService.md#onresponse)

#### Defined in

[src/api/Api.service.ts:52](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L52)

___

### queryRace

• **queryRace**: [`QueryRace`](QueryRace.md)

#### Defined in

[src/api/Api.service.ts:30](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L30)

## Accessors

### instance

• `get` **instance**(): [`ApiAxiosInstance`](../interfaces/ApiAxiosInstance.md)

#### Returns

[`ApiAxiosInstance`](../interfaces/ApiAxiosInstance.md)

#### Implementation of

[IApiService](../interfaces/IApiService.md).[instance](../interfaces/IApiService.md#instance)

#### Defined in

[src/api/Api.service.ts:42](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L42)

## Methods

### \_applyInterceptor

▸ `Private` **_applyInterceptor**(): `void`

#### Returns

`void`

#### Defined in

[src/api/Api.service.ts:149](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L149)

___

### delete

▸ **delete**<`R`\>(`endpoint`, `config?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `config?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`any`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[delete](../interfaces/IApiService.md#delete)

#### Defined in

[src/api/Api.service.ts:116](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L116)

___

### get

▸ **get**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

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
| `config?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[get](../interfaces/IApiService.md#get)

#### Defined in

[src/api/Api.service.ts:72](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L72)

___

### instancePromise

▸ **instancePromise**<`R`, `P`\>(`config`, `options?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `P` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |
| `options?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[instancePromise](../interfaces/IApiService.md#instancepromise)

#### Defined in

[src/api/Api.service.ts:120](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L120)

___

### patch

▸ **patch**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

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
| `config?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[patch](../interfaces/IApiService.md#patch)

#### Defined in

[src/api/Api.service.ts:94](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L94)

___

### post

▸ **post**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

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
| `config?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[post](../interfaces/IApiService.md#post)

#### Defined in

[src/api/Api.service.ts:83](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L83)

___

### put

▸ **put**<`R`, `P`\>(`endpoint`, `params?`, `config?`): [`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

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
| `config?` | [`ApiRequestConfig`](../interfaces/ApiRequestConfig.md)<`P`\> |

#### Returns

[`CancelablePromise`](../interfaces/CancelablePromise.md)<[`ApiResponse`](../interfaces/ApiResponse.md)<`R`\>\>

#### Implementation of

[IApiService](../interfaces/IApiService.md).[put](../interfaces/IApiService.md#put)

#### Defined in

[src/api/Api.service.ts:105](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.service.ts#L105)
