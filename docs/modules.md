[@force-dev/utils](README.md) / Exports

# @force-dev/utils

## Table of contents

### Interfaces

- [DateOptions](interfaces/DateOptions.md)
- [IEmpty](interfaces/IEmpty.md)
- [IGenIdOptions](interfaces/IGenIdOptions.md)
- [IIoCInterface](interfaces/IIoCInterface.md)
- [PluralOptions](interfaces/PluralOptions.md)

### Type Aliases

- [CheckArray](modules.md#checkarray)
- [Join](modules.md#join)
- [LambdaValue](modules.md#lambdavalue)
- [PartialKeys](modules.md#partialkeys)
- [PartialObject](modules.md#partialobject)
- [RecursiveObjectType](modules.md#recursiveobjecttype)
- [RequiredKeys](modules.md#requiredkeys)
- [SubType](modules.md#subtype)

### Functions

- [Inject](modules.md#inject)
- [Injectable](modules.md#injectable)
- [assertNotNull](modules.md#assertnotnull)
- [camelize](modules.md#camelize)
- [dateNow](modules.md#datenow)
- [debounce](modules.md#debounce)
- [delayPromise](modules.md#delaypromise)
- [formatDate](modules.md#formatdate)
- [genId](modules.md#genid)
- [groupByKeyValue](modules.md#groupbykeyvalue)
- [iocDecorator](modules.md#iocdecorator)
- [iocHook](modules.md#iochook)
- [isArray](modules.md#isarray)
- [isBigInt](modules.md#isbigint)
- [isBoolean](modules.md#isboolean)
- [isDate](modules.md#isdate)
- [isFunction](modules.md#isfunction)
- [isInteger](modules.md#isinteger)
- [isMap](modules.md#ismap)
- [isNegativeInteger](modules.md#isnegativeinteger)
- [isNonEmptyArray](modules.md#isnonemptyarray)
- [isNonEmptyString](modules.md#isnonemptystring)
- [isNonNegativeInteger](modules.md#isnonnegativeinteger)
- [isNull](modules.md#isnull)
- [isNumber](modules.md#isnumber)
- [isNumberOrNaN](modules.md#isnumberornan)
- [isObject](modules.md#isobject)
- [isObjectOrNull](modules.md#isobjectornull)
- [isPositiveInteger](modules.md#ispositiveinteger)
- [isSet](modules.md#isset)
- [isString](modules.md#isstring)
- [isSymbol](modules.md#issymbol)
- [isUndefined](modules.md#isundefined)
- [isWeakMap](modules.md#isweakmap)
- [isWeakSet](modules.md#isweakset)
- [parseDate](modules.md#parsedate)
- [pluralize](modules.md#pluralize)
- [resolveLambdaValue](modules.md#resolvelambdavalue)
- [toLowerCase](modules.md#tolowercase)
- [toUpperCase](modules.md#touppercase)

## Type Aliases

### CheckArray

?? **CheckArray**<`T`\>: `T` extends `any`[] ? `T`[`number`] : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/helpers/typeUtils.ts:1](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L1)

___

### Join

?? **Join**<`K`, `P`\>: `K` extends `string` \| `number` ? `P` extends `string` \| `number` ? \`${K}${"" extends P ? "" : "."}${P}\` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `K` |
| `P` |

#### Defined in

[src/helpers/typeUtils.ts:12](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L12)

___

### LambdaValue

?? **LambdaValue**<`TValue`, `TArgs`\>: `TValue` \| (`args?`: `TArgs`) => `TValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `TValue` |
| `TArgs` | `unknown` |

#### Defined in

[src/helpers/lambdaValue.ts:3](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/lambdaValue.ts#L3)

___

### PartialKeys

?? **PartialKeys**<`T`, `K`\>: `Omit`<`T`, `K`\> & `Partial`<`Pick`<`T`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/helpers/typeUtils.ts:28](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L28)

___

### PartialObject

?? **PartialObject**<`T`\>: `T` extends `object` ? `Partial`<`T`\> : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/helpers/typeUtils.ts:3](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L3)

___

### RecursiveObjectType

?? **RecursiveObjectType**<`T`, `D`\>: [`D`] extends [`never`] ? `never` : `T` extends `object` ? { [K in keyof T]-?: K extends string \| number ? \`${K}\` \| Join<K, RecursiveObjectType<T[K]\>\> : never }[keyof `T`] : ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends `number` = ``10`` |

#### Defined in

[src/helpers/typeUtils.ts:18](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L18)

___

### RequiredKeys

?? **RequiredKeys**<`T`, `K`\>: `Omit`<`T`, `K`\> & `Required`<`Pick`<`T`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/helpers/typeUtils.ts:30](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L30)

___

### SubType

?? **SubType**<`Base`, `Condition`\>: `Pick`<`Base`, { [Key in keyof Base]: Base[Key] extends Condition ? Key : never }[keyof `Base`]\>

#### Type parameters

| Name |
| :------ |
| `Base` |
| `Condition` |

#### Defined in

[src/helpers/typeUtils.ts:5](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeUtils.ts#L5)

## Functions

### Inject

??? **Inject**<`T`\>(`serviceIdentifier`): (`target`: `DecoratorTarget`<`unknown`\>, `targetKey?`: `string` \| `symbol`, `indexOrPropertyDescriptor?`: `number` \| `TypedPropertyDescriptor`<`any`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceIdentifier` | `ServiceIdentifierOrFunc`<`T`\> |

#### Returns

`fn`

??? (`target`, `targetKey?`, `indexOrPropertyDescriptor?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `DecoratorTarget`<`unknown`\> |
| `targetKey?` | `string` \| `symbol` |
| `indexOrPropertyDescriptor?` | `number` \| `TypedPropertyDescriptor`<`any`\> |

##### Returns

`void`

#### Defined in

node_modules/inversify/lib/annotation/inject.d.ts:1

___

### Injectable

??? **Injectable**(): <T\>(`target`: `T`) => `T`

#### Returns

`fn`

??? <`T`\>(`target`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `never`) => `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`T`

#### Defined in

node_modules/inversify/lib/annotation/injectable.d.ts:1

___

### assertNotNull

??? **assertNotNull**<`T`\>(`item`, `message?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `undefined` \| ``null`` \| `T` |
| `message?` | `string` |

#### Returns

`T`

#### Defined in

[src/helpers/typeGuards.ts:1](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L1)

___

### camelize

??? **camelize**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:7](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/string.ts#L7)

___

### dateNow

??? **dateNow**(): `DateTime`

#### Returns

`DateTime`

#### Defined in

[src/helpers/date.ts:12](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/date.ts#L12)

___

### debounce

??? **debounce**(`func`, `delay`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | () => `void` |
| `delay` | `number` |

#### Returns

`void`

#### Defined in

[src/helpers/debounce.ts:3](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/debounce.ts#L3)

___

### delayPromise

??? **delayPromise**<`T`\>(`millis`, `value?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `millis` | `number` |
| `value?` | `T` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/helpers/delayPromise.ts:1](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/delayPromise.ts#L1)

___

### formatDate

??? **formatDate**(`date`, `opt?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `opt?` | [`DateOptions`](interfaces/DateOptions.md) |

#### Returns

`string`

#### Defined in

[src/helpers/date.ts:8](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/date.ts#L8)

___

### genId

??? **genId**(`opt?`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt?` | [`IGenIdOptions`](interfaces/IGenIdOptions.md) |

#### Returns

`string` \| `number`

#### Defined in

[src/helpers/number.ts:7](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/number.ts#L7)

___

### groupByKeyValue

??? **groupByKeyValue**<`A`, `Key`\>(`array`, `key`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `Key` | extends `string` \| `number` \| `symbol` = keyof `A`[`number`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `A` |
| `key` | `Key` |

#### Returns

`Object`

#### Defined in

[src/helpers/array.ts:1](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/array.ts#L1)

___

### iocDecorator

??? **iocDecorator**<`TInterface`\>(`name?`): [`IIoCInterface`](interfaces/IIoCInterface.md)<`TInterface`\>

#### Type parameters

| Name |
| :------ |
| `TInterface` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`IIoCInterface`](interfaces/IIoCInterface.md)<`TInterface`\>

#### Defined in

[src/ioc/IoC.ts:29](https://github.com/epifanovmd/utils/blob/f69d513/src/ioc/IoC.ts#L29)

___

### iocHook

??? **iocHook**<`T`\>(`ioc`): () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ioc` | [`IIoCInterface`](interfaces/IIoCInterface.md)<`T`\> |

#### Returns

`fn`

??? (): `T`

##### Returns

`T`

#### Defined in

[src/ioc/IoC.ts:27](https://github.com/epifanovmd/utils/blob/f69d513/src/ioc/IoC.ts#L27)

___

### isArray

??? **isArray**<`T`, `U`\>(`term`): term is T[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `T`[] |

#### Returns

term is T[]

#### Defined in

[src/helpers/typeGuards.ts:39](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L39)

___

### isBigInt

??? **isBigInt**<`U`\>(`term`): term is bigint

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `bigint` \| `U` |

#### Returns

term is bigint

#### Defined in

[src/helpers/typeGuards.ts:24](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L24)

___

### isBoolean

??? **isBoolean**<`U`\>(`term`): term is boolean

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `boolean` \| `U` |

#### Returns

term is boolean

#### Defined in

[src/helpers/typeGuards.ts:15](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L15)

___

### isDate

??? **isDate**<`U`\>(`term`): term is Date

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Date` |

#### Returns

term is Date

#### Defined in

[src/helpers/typeGuards.ts:56](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L56)

___

### isFunction

??? **isFunction**<`T`, `U`\>(`term`): term is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is T

#### Defined in

[src/helpers/typeGuards.ts:32](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L32)

___

### isInteger

??? **isInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:70](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L70)

___

### isMap

??? **isMap**<`K`, `V`, `U`\>(`term`): term is Map<K, V\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Map`<`K`, `V`\> |

#### Returns

term is Map<K, V\>

#### Defined in

[src/helpers/typeGuards.ts:42](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L42)

___

### isNegativeInteger

??? **isNegativeInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:79](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L79)

___

### isNonEmptyArray

??? **isNonEmptyArray**<`T`, `U`\>(`term`): term is T[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `T`[] |

#### Returns

term is T[]

#### Defined in

[src/helpers/typeGuards.ts:61](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L61)

___

### isNonEmptyString

??? **isNonEmptyString**<`U`\>(`term`): term is string

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `string` \| `U` |

#### Returns

term is string

#### Defined in

[src/helpers/typeGuards.ts:64](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L64)

___

### isNonNegativeInteger

??? **isNonNegativeInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:76](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L76)

___

### isNull

??? **isNull**<`T`\>(`term`): term is null

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | ``null`` \| `T` |

#### Returns

term is null

#### Defined in

[src/helpers/typeGuards.ts:30](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L30)

___

### isNumber

??? **isNumber**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:18](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L18)

___

### isNumberOrNaN

??? **isNumberOrNaN**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:67](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L67)

___

### isObject

??? **isObject**<`T`, `U`\>(`term`): term is NonNullable<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is NonNullable<T\>

#### Defined in

[src/helpers/typeGuards.ts:35](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L35)

___

### isObjectOrNull

??? **isObjectOrNull**<`T`, `U`\>(`term`): term is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `T` \| `U` |

#### Returns

term is T

#### Defined in

[src/helpers/typeGuards.ts:58](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L58)

___

### isPositiveInteger

??? **isPositiveInteger**<`U`\>(`term`): term is number

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `number` \| `U` |

#### Returns

term is number

#### Defined in

[src/helpers/typeGuards.ts:73](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L73)

___

### isSet

??? **isSet**<`T`, `U`\>(`term`): term is Set<T\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `Set`<`T`\> |

#### Returns

term is Set<T\>

#### Defined in

[src/helpers/typeGuards.ts:45](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L45)

___

### isString

??? **isString**<`U`\>(`term`): term is string

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `string` \| `U` |

#### Returns

term is string

#### Defined in

[src/helpers/typeGuards.ts:21](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L21)

___

### isSymbol

??? **isSymbol**<`U`\>(`term`): term is symbol

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `symbol` \| `U` |

#### Returns

term is symbol

#### Defined in

[src/helpers/typeGuards.ts:27](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L27)

___

### isUndefined

??? **isUndefined**<`T`\>(`term`): term is undefined

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `undefined` \| `T` |

#### Returns

term is undefined

#### Defined in

[src/helpers/typeGuards.ts:12](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L12)

___

### isWeakMap

??? **isWeakMap**<`K`, `V`, `U`\>(`term`): term is WeakMap<K, V\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `object` |
| `V` | `V` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `WeakMap`<`K`, `V`\> |

#### Returns

term is WeakMap<K, V\>

#### Defined in

[src/helpers/typeGuards.ts:48](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L48)

___

### isWeakSet

??? **isWeakSet**<`T`, `U`\>(`term`): term is WeakSet<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `U` \| `WeakSet`<`T`\> |

#### Returns

term is WeakSet<T\>

#### Defined in

[src/helpers/typeGuards.ts:52](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/typeGuards.ts#L52)

___

### parseDate

??? **parseDate**(`date`, `opt?`): `DateTime`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `opt?` | [`DateOptions`](interfaces/DateOptions.md) |

#### Returns

`DateTime`

#### Defined in

[src/helpers/date.ts:11](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/date.ts#L11)

___

### pluralize

??? **pluralize**(`count`, `plurals`, `withNumber?`, `hideZero?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `plurals` | [`PluralOptions`](interfaces/PluralOptions.md) |
| `withNumber?` | `boolean` |
| `hideZero?` | `boolean` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:22](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/string.ts#L22)

___

### resolveLambdaValue

??? **resolveLambdaValue**<`TValue`, `TArgs`\>(`value`, `args?`): `TValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `TValue` |
| `TArgs` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](modules.md#lambdavalue)<`TValue`, `unknown`\> |
| `args?` | `TArgs` |

#### Returns

`TValue`

#### Defined in

[src/helpers/lambdaValue.ts:7](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/lambdaValue.ts#L7)

___

### toLowerCase

??? **toLowerCase**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:19](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/string.ts#L19)

___

### toUpperCase

??? **toUpperCase**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:16](https://github.com/epifanovmd/utils/blob/f69d513/src/helpers/string.ts#L16)
