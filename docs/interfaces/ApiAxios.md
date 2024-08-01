[@force-dev/utils](../README.md) / [Exports](../modules.md) / ApiAxios

# Interface: ApiAxios

## Hierarchy

- `Omit`<`Axios`, ``"interceptors"``\>

  ↳ **`ApiAxios`**

  ↳↳ [`ApiAxiosInstance`](ApiAxiosInstance.md)

## Table of contents

### Properties

- [defaults](ApiAxios.md#defaults)
- [interceptors](ApiAxios.md#interceptors)

### Methods

- [delete](ApiAxios.md#delete)
- [get](ApiAxios.md#get)
- [getUri](ApiAxios.md#geturi)
- [head](ApiAxios.md#head)
- [options](ApiAxios.md#options)
- [patch](ApiAxios.md#patch)
- [patchForm](ApiAxios.md#patchform)
- [post](ApiAxios.md#post)
- [postForm](ApiAxios.md#postform)
- [put](ApiAxios.md#put)
- [putForm](ApiAxios.md#putform)
- [request](ApiAxios.md#request)

## Properties

### defaults

• **defaults**: `AxiosDefaults`<`any`\>

#### Inherited from

Omit.defaults

#### Defined in

node_modules/axios/index.d.ts:487

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | `AxiosInterceptorManager`<`InternalAxiosRequestConfig`<`any`\>\> |
| `response` | `AxiosInterceptorManager`<[`ApiResponse`](ApiResponse.md)<`any`\>\> |

#### Defined in

[src/api/Api.types.ts:15](https://github.com/epifanovmd/utils/blob/fdca100/src/api/Api.types.ts#L15)

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

Omit.delete

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

Omit.get

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

Omit.getUri

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

Omit.head

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

Omit.options

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

Omit.patch

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

Omit.patchForm

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

Omit.post

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

Omit.postForm

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

Omit.put

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

Omit.putForm

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

Omit.request

#### Defined in

node_modules/axios/index.d.ts:493
