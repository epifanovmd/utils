[@force-dev/utils](../README.md) / [Exports](../modules.md) / ApiAxiosInstance

# Interface: ApiAxiosInstance

## Hierarchy

- [`ApiAxios`](ApiAxios.md)

  ↳ **`ApiAxiosInstance`**

## Callable

### ApiAxiosInstance

▸ **ApiAxiosInstance**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ApiRequestConfig`](ApiRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/api/Api.types.ts:33](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L33)

### ApiAxiosInstance

▸ **ApiAxiosInstance**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`ApiRequestConfig`](ApiRequestConfig.md)<`D`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/api/Api.types.ts:36](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L36)

## Table of contents

### Properties

- [defaults](ApiAxiosInstance.md#defaults)
- [interceptors](ApiAxiosInstance.md#interceptors)

### Methods

- [delete](ApiAxiosInstance.md#delete)
- [get](ApiAxiosInstance.md#get)
- [getUri](ApiAxiosInstance.md#geturi)
- [head](ApiAxiosInstance.md#head)
- [options](ApiAxiosInstance.md#options)
- [patch](ApiAxiosInstance.md#patch)
- [patchForm](ApiAxiosInstance.md#patchform)
- [post](ApiAxiosInstance.md#post)
- [postForm](ApiAxiosInstance.md#postform)
- [put](ApiAxiosInstance.md#put)
- [putForm](ApiAxiosInstance.md#putform)
- [request](ApiAxiosInstance.md#request)

## Properties

### defaults

• **defaults**: `Omit`<`AxiosDefaults`<`any`\>, ``"headers"``\> & { `headers`: `HeadersDefaults` & { `[key: string]`: `AxiosHeaderValue`;  }  }

#### Overrides

[ApiAxios](ApiAxios.md).[defaults](ApiAxios.md#defaults)

#### Defined in

[src/api/Api.types.ts:41](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L41)

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | `AxiosInterceptorManager`<`InternalAxiosRequestConfig`<`any`\>\> |
| `response` | `AxiosInterceptorManager`<[`ApiResponse`](ApiResponse.md)<`any`\>\> |

#### Inherited from

[ApiAxios](ApiAxios.md).[interceptors](ApiAxios.md#interceptors)

#### Defined in

[src/api/Api.types.ts:21](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L21)

## Methods

### delete

▸ **delete**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[delete](ApiAxios.md#delete)

#### Defined in

node_modules/axios/index.d.ts:495

___

### get

▸ **get**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[get](ApiAxios.md#get)

#### Defined in

node_modules/axios/index.d.ts:494

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `AxiosRequestConfig`<`any`\> |

#### Returns

`string`

#### Inherited from

[ApiAxios](ApiAxios.md).[getUri](ApiAxios.md#geturi)

#### Defined in

node_modules/axios/index.d.ts:492

___

### head

▸ **head**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[head](ApiAxios.md#head)

#### Defined in

node_modules/axios/index.d.ts:496

___

### options

▸ **options**<`T`, `R`, `D`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[options](ApiAxios.md#options)

#### Defined in

node_modules/axios/index.d.ts:497

___

### patch

▸ **patch**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[patch](ApiAxios.md#patch)

#### Defined in

node_modules/axios/index.d.ts:500

___

### patchForm

▸ **patchForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[patchForm](ApiAxios.md#patchform)

#### Defined in

node_modules/axios/index.d.ts:503

___

### post

▸ **post**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[post](ApiAxios.md#post)

#### Defined in

node_modules/axios/index.d.ts:498

___

### postForm

▸ **postForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[postForm](ApiAxios.md#postform)

#### Defined in

node_modules/axios/index.d.ts:501

___

### put

▸ **put**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[put](ApiAxios.md#put)

#### Defined in

node_modules/axios/index.d.ts:499

___

### putForm

▸ **putForm**<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `D` |
| `config?` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[putForm](ApiAxios.md#putform)

#### Defined in

node_modules/axios/index.d.ts:502

___

### request

▸ **request**<`T`, `R`, `D`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | `AxiosResponse`<`T`, `any`\> |
| `D` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `AxiosRequestConfig`<`D`\> |

#### Returns

`Promise`<`R`\>

#### Inherited from

[ApiAxios](ApiAxios.md).[request](ApiAxios.md#request)

#### Defined in

node_modules/axios/index.d.ts:493
