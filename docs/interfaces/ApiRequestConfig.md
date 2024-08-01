[@force-dev/utils](../README.md) / [Exports](../modules.md) / ApiRequestConfig

# Interface: ApiRequestConfig<P\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `any` |

## Hierarchy

- `Partial`<`AxiosRequestConfig`<`P`\>\>

  ↳ **`ApiRequestConfig`**

## Table of contents

### Properties

- [adapter](ApiRequestConfig.md#adapter)
- [auth](ApiRequestConfig.md#auth)
- [baseURL](ApiRequestConfig.md#baseurl)
- [beforeRedirect](ApiRequestConfig.md#beforeredirect)
- [cancelToken](ApiRequestConfig.md#canceltoken)
- [data](ApiRequestConfig.md#data)
- [decompress](ApiRequestConfig.md#decompress)
- [env](ApiRequestConfig.md#env)
- [family](ApiRequestConfig.md#family)
- [fetchOptions](ApiRequestConfig.md#fetchoptions)
- [formSerializer](ApiRequestConfig.md#formserializer)
- [headers](ApiRequestConfig.md#headers)
- [httpAgent](ApiRequestConfig.md#httpagent)
- [httpsAgent](ApiRequestConfig.md#httpsagent)
- [insecureHTTPParser](ApiRequestConfig.md#insecurehttpparser)
- [lookup](ApiRequestConfig.md#lookup)
- [maxBodyLength](ApiRequestConfig.md#maxbodylength)
- [maxContentLength](ApiRequestConfig.md#maxcontentlength)
- [maxRate](ApiRequestConfig.md#maxrate)
- [maxRedirects](ApiRequestConfig.md#maxredirects)
- [method](ApiRequestConfig.md#method)
- [onDownloadProgress](ApiRequestConfig.md#ondownloadprogress)
- [onUploadProgress](ApiRequestConfig.md#onuploadprogress)
- [params](ApiRequestConfig.md#params)
- [paramsSerializer](ApiRequestConfig.md#paramsserializer)
- [proxy](ApiRequestConfig.md#proxy)
- [responseEncoding](ApiRequestConfig.md#responseencoding)
- [responseType](ApiRequestConfig.md#responsetype)
- [signal](ApiRequestConfig.md#signal)
- [skipInterceptError](ApiRequestConfig.md#skipintercepterror)
- [socketPath](ApiRequestConfig.md#socketpath)
- [timeout](ApiRequestConfig.md#timeout)
- [timeoutErrorMessage](ApiRequestConfig.md#timeouterrormessage)
- [transformRequest](ApiRequestConfig.md#transformrequest)
- [transformResponse](ApiRequestConfig.md#transformresponse)
- [transitional](ApiRequestConfig.md#transitional)
- [transport](ApiRequestConfig.md#transport)
- [url](ApiRequestConfig.md#url)
- [useQueryRace](ApiRequestConfig.md#usequeryrace)
- [validateStatus](ApiRequestConfig.md#validatestatus)
- [withCredentials](ApiRequestConfig.md#withcredentials)
- [withXSRFToken](ApiRequestConfig.md#withxsrftoken)
- [xsrfCookieName](ApiRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](ApiRequestConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

Partial.adapter

#### Defined in

node_modules/axios/index.d.ts:329

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

Partial.auth

#### Defined in

node_modules/axios/index.d.ts:330

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

Partial.baseURL

#### Defined in

node_modules/axios/index.d.ts:319

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`<`string`, `any`\>, `responseDetails`: { `headers`: `Record`<`string`, `string`\> ; `statusCode`: `HttpStatusCode`  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | `Record`<`string`, `string`\> |
| `responseDetails.statusCode` | `HttpStatusCode` |

##### Returns

`void`

#### Inherited from

Partial.beforeRedirect

#### Defined in

node_modules/axios/index.d.ts:342

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

Partial.cancelToken

#### Defined in

node_modules/axios/index.d.ts:348

___

### data

• `Optional` **data**: `P`

#### Inherited from

Partial.data

#### Defined in

node_modules/axios/index.d.ts:325

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

Partial.decompress

#### Defined in

node_modules/axios/index.d.ts:349

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

Partial.env

#### Defined in

node_modules/axios/index.d.ts:353

___

### family

• `Optional` **family**: `AddressFamily`

#### Inherited from

Partial.family

#### Defined in

node_modules/axios/index.d.ts:357

___

### fetchOptions

• `Optional` **fetchOptions**: `Record`<`string`, `any`\>

#### Inherited from

Partial.fetchOptions

#### Defined in

node_modules/axios/index.d.ts:361

___

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

Partial.formSerializer

#### Defined in

node_modules/axios/index.d.ts:356

___

### headers

• `Optional` **headers**: `AxiosHeaders` \| `Partial`<`RawAxiosHeaders` & { `Accept`: `AxiosHeaderValue` ; `Authorization`: `AxiosHeaderValue` ; `Content-Encoding`: `AxiosHeaderValue` ; `Content-Length`: `AxiosHeaderValue` ; `User-Agent`: `AxiosHeaderValue`  } & { `Content-Type`: `ContentType`  }\> & `Partial`<{ `delete`: `AxiosHeaders` ; `get`: `AxiosHeaders` ; `head`: `AxiosHeaders` ; `link`: `AxiosHeaders` ; `options`: `AxiosHeaders` ; `patch`: `AxiosHeaders` ; `post`: `AxiosHeaders` ; `purge`: `AxiosHeaders` ; `put`: `AxiosHeaders` ; `unlink`: `AxiosHeaders`  } & { `common`: `AxiosHeaders`  }\>

#### Inherited from

Partial.headers

#### Defined in

node_modules/axios/index.d.ts:322

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

Partial.httpAgent

#### Defined in

node_modules/axios/index.d.ts:345

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

Partial.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:346

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

Partial.insecureHTTPParser

#### Defined in

node_modules/axios/index.d.ts:352

___

### lookup

• `Optional` **lookup**: (`hostname`: `string`, `options`: `object`, `cb`: (`err`: ``null`` \| `Error`, `address`: `LookupAddress` \| `LookupAddress`[], `family?`: `AddressFamily`) => `void`) => `void` \| (`hostname`: `string`, `options`: `object`) => `Promise`<`LookupAddress` \| [address: LookupAddressEntry \| LookupAddressEntry[], family?: AddressFamily]\>

#### Inherited from

Partial.lookup

#### Defined in

node_modules/axios/index.d.ts:358

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

Partial.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:339

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

Partial.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:337

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

Partial.maxRate

#### Defined in

node_modules/axios/index.d.ts:341

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

Partial.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:340

___

### method

• `Optional` **method**: `string`

#### Inherited from

Partial.method

#### Defined in

node_modules/axios/index.d.ts:318

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

Partial.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:336

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

Partial.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:335

___

### params

• `Optional` **params**: `any`

#### Inherited from

Partial.params

#### Defined in

node_modules/axios/index.d.ts:323

___

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions` \| `CustomParamsSerializer`

#### Inherited from

Partial.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:324

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

Partial.proxy

#### Defined in

node_modules/axios/index.d.ts:347

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

Partial.responseEncoding

#### Defined in

node_modules/axios/index.d.ts:332

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

Partial.responseType

#### Defined in

node_modules/axios/index.d.ts:331

___

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

Partial.signal

#### Defined in

node_modules/axios/index.d.ts:351

___

### skipInterceptError

• `Optional` **skipInterceptError**: `boolean`

#### Inherited from

Partial.skipInterceptError

#### Defined in

[src/api/Api.types.ts:16](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L16)

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

Partial.socketPath

#### Defined in

node_modules/axios/index.d.ts:343

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

Partial.timeout

#### Defined in

node_modules/axios/index.d.ts:326

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

Partial.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:327

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

Partial.transformRequest

#### Defined in

node_modules/axios/index.d.ts:320

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

Partial.transformResponse

#### Defined in

node_modules/axios/index.d.ts:321

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

Partial.transitional

#### Defined in

node_modules/axios/index.d.ts:350

___

### transport

• `Optional` **transport**: `any`

#### Inherited from

Partial.transport

#### Defined in

node_modules/axios/index.d.ts:344

___

### url

• `Optional` **url**: `string`

#### Inherited from

Partial.url

#### Defined in

node_modules/axios/index.d.ts:317

___

### useQueryRace

• `Optional` **useQueryRace**: `boolean`

#### Defined in

[src/api/Api.types.ts:29](https://github.com/epifanovmd/utils/blob/78a5c89/src/api/Api.types.ts#L29)

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

Partial.validateStatus

#### Defined in

node_modules/axios/index.d.ts:338

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

Partial.withCredentials

#### Defined in

node_modules/axios/index.d.ts:328

___

### withXSRFToken

• `Optional` **withXSRFToken**: `boolean` \| (`config`: `InternalAxiosRequestConfig`<`any`\>) => `undefined` \| `boolean`

#### Inherited from

Partial.withXSRFToken

#### Defined in

node_modules/axios/index.d.ts:360

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

Partial.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:333

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

Partial.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:334
