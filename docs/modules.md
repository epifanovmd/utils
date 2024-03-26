[@force-dev/utils](README.md) / Exports

# @force-dev/utils

## Table of contents

### Enumerations

- [CollectionLoadState](enums/CollectionLoadState.md)
- [ListCollectionLoadState](enums/ListCollectionLoadState.md)

### Classes

- [ArrayHolder](classes/ArrayHolder.md)
- [CollectionHolder](classes/CollectionHolder.md)
- [DataHolder](classes/DataHolder.md)
- [FormHolder](classes/FormHolder.md)
- [ListCollectionHolder](classes/ListCollectionHolder.md)
- [NumberHolder](classes/NumberHolder.md)
- [PropsHolder](classes/PropsHolder.md)
- [TextHolder](classes/TextHolder.md)
- [ValueHolder](classes/ValueHolder.md)

### Interfaces

- [IDataHolderState](interfaces/IDataHolderState.md)
- [IEmpty](interfaces/IEmpty.md)
- [IIoCInterface](interfaces/IIoCInterface.md)
- [PluralOptions](interfaces/PluralOptions.md)
- [RefreshArgs](interfaces/RefreshArgs.md)
- [SupportInitialize](interfaces/SupportInitialize.md)

### Type Aliases

- [CheckArray](modules.md#checkarray)
- [DivideOpt](modules.md#divideopt)
- [FormPartial](modules.md#formpartial)
- [InitializeDispose](modules.md#initializedispose)
- [Join](modules.md#join)
- [LambdaValue](modules.md#lambdavalue)
- [Maybe](modules.md#maybe)
- [PartialKeys](modules.md#partialkeys)
- [PartialObject](modules.md#partialobject)
- [RecursiveObjectType](modules.md#recursiveobjecttype)
- [RequiredKeys](modules.md#requiredkeys)
- [SubType](modules.md#subtype)

### Variables

- [passwordRegex](modules.md#passwordregex)
- [usernameRegex](modules.md#usernameregex)

### Functions

- [Inject](modules.md#inject)
- [Injectable](modules.md#injectable)
- [assertNotNull](modules.md#assertnotnull)
- [camelize](modules.md#camelize)
- [debounce](modules.md#debounce)
- [delayPromise](modules.md#delaypromise)
- [disposer](modules.md#disposer)
- [groupByKeyValue](modules.md#groupbykeyvalue)
- [initialize](modules.md#initialize)
- [iocDecorator](modules.md#iocdecorator)
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
- [pluralize](modules.md#pluralize)
- [replaceInputString](modules.md#replaceinputstring)
- [resolveLambdaValue](modules.md#resolvelambdavalue)
- [toDivide](modules.md#todivide)
- [toLowerCase](modules.md#tolowercase)
- [toUpperCase](modules.md#touppercase)
- [validateLength](modules.md#validatelength)
- [validateRegex](modules.md#validateregex)
- [validateRequired](modules.md#validaterequired)

## Type Aliases

### CheckArray

Ƭ **CheckArray**<`T`\>: `T` extends `any`[] ? `T`[`number`] : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/helpers/types.ts:1](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L1)

___

### DivideOpt

Ƭ **DivideOpt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `separator?` | `string` |

#### Defined in

[src/helpers/number.ts:1](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/number.ts#L1)

___

### FormPartial

Ƭ **FormPartial**<`T`\>: { [K in keyof T]: T[K] extends FormHolder ? T[K] : T[K] extends TextHolder \| NumberHolder \| ArrayHolder ? T[K] : T[K] \| undefined }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/store/holders/FormHolder.ts:24](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/FormHolder.ts#L24)

___

### InitializeDispose

Ƭ **InitializeDispose**: `void` \| () => `void` \| () => `void`[] \| `Promise`<`void` \| () => `void` \| () => `void`[]\>

#### Defined in

[src/helpers/types.ts:40](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L40)

___

### Join

Ƭ **Join**<`K`, `P`\>: `K` extends `string` \| `number` ? `P` extends `string` \| `number` ? \`${K}${"" extends P ? "" : "."}${P}\` : `never` : `never`

#### Type parameters

| Name |
| :------ |
| `K` |
| `P` |

#### Defined in

[src/helpers/types.ts:12](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L12)

___

### LambdaValue

Ƭ **LambdaValue**<`TValue`, `TArgs`\>: `TValue` \| (`args?`: `TArgs`) => `TValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `TValue` |
| `TArgs` | `unknown` |

#### Defined in

[src/helpers/lambdaValue.ts:3](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/lambdaValue.ts#L3)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/helpers/types.ts:38](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L38)

___

### PartialKeys

Ƭ **PartialKeys**<`T`, `K`\>: `Omit`<`T`, `K`\> & `Partial`<`Pick`<`T`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/helpers/types.ts:28](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L28)

___

### PartialObject

Ƭ **PartialObject**<`T`\>: `T` extends `object` ? `Partial`<`T`\> : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/helpers/types.ts:3](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L3)

___

### RecursiveObjectType

Ƭ **RecursiveObjectType**<`T`, `D`\>: [`D`] extends [`never`] ? `never` : `T` extends `object` ? { [K in keyof T]-?: K extends string \| number ? \`${K}\` \| Join<K, RecursiveObjectType<T[K]\>\> : never }[keyof `T`] : ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | extends `number` = ``10`` |

#### Defined in

[src/helpers/types.ts:18](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L18)

___

### RequiredKeys

Ƭ **RequiredKeys**<`T`, `K`\>: `Omit`<`T`, `K`\> & `Required`<`Pick`<`T`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/helpers/types.ts:30](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L30)

___

### SubType

Ƭ **SubType**<`Base`, `Condition`\>: `Pick`<`Base`, { [Key in keyof Base]: Base[Key] extends Condition ? Key : never }[keyof `Base`]\>

#### Type parameters

| Name |
| :------ |
| `Base` |
| `Condition` |

#### Defined in

[src/helpers/types.ts:5](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/types.ts#L5)

## Variables

### passwordRegex

• `Const` **passwordRegex**: `RegExp`

#### Defined in

[src/store/holders/validations.ts:5](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/validations.ts#L5)

___

### usernameRegex

• `Const` **usernameRegex**: `RegExp`

#### Defined in

[src/store/holders/validations.ts:3](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/validations.ts#L3)

## Functions

### Inject

▸ **Inject**<`T`\>(`serviceIdentifier`): (`target`: `DecoratorTarget`<`unknown`\>, `targetKey?`: `string` \| `symbol`, `indexOrPropertyDescriptor?`: `number` \| `TypedPropertyDescriptor`<`any`\>) => `void`

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

▸ (`target`, `targetKey?`, `indexOrPropertyDescriptor?`): `void`

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

▸ **Injectable**(): <T\>(`target`: `T`) => `T`

#### Returns

`fn`

▸ <`T`\>(`target`): `T`

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

▸ **assertNotNull**<`T`\>(`item`, `message?`): `T`

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

[src/helpers/typeGuards.ts:1](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L1)

___

### camelize

▸ **camelize**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:7](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/string.ts#L7)

___

### debounce

▸ **debounce**(`func`, `delay`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | () => `void` |
| `delay` | `number` |

#### Returns

`void`

#### Defined in

[src/helpers/debounce.ts:3](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/debounce.ts#L3)

___

### delayPromise

▸ **delayPromise**<`T`\>(`millis`, `value?`): `Promise`<`T`\>

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

[src/helpers/delayPromise.ts:1](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/delayPromise.ts#L1)

___

### disposer

▸ **disposer**(`dispose`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispose` | [`InitializeDispose`](modules.md#initializedispose) \| [`InitializeDispose`](modules.md#initializedispose)[] |

#### Returns

`void`

#### Defined in

[src/helpers/disposer.helper.ts:4](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/disposer.helper.ts#L4)

___

### groupByKeyValue

▸ **groupByKeyValue**<`A`, `Key`\>(`array`, `key`): `Object`

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

[src/helpers/array.ts:1](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/array.ts#L1)

___

### initialize

▸ **initialize**(`data`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`InitializeDispose`](modules.md#initializedispose) \| [`InitializeDispose`](modules.md#initializedispose)[] |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/helpers/initialize.helper.ts:5](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/initialize.helper.ts#L5)

___

### iocDecorator

▸ **iocDecorator**<`TInterface`\>(`name?`): [`IIoCInterface`](interfaces/IIoCInterface.md)<`TInterface`\>

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

[src/ioc/IoC.ts:26](https://github.com/epifanovmd/utils/blob/9c060fa/src/ioc/IoC.ts#L26)

___

### isArray

▸ **isArray**<`T`, `U`\>(`term`): term is T[]

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

[src/helpers/typeGuards.ts:39](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L39)

___

### isBigInt

▸ **isBigInt**<`U`\>(`term`): term is bigint

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

[src/helpers/typeGuards.ts:24](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L24)

___

### isBoolean

▸ **isBoolean**<`U`\>(`term`): term is boolean

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

[src/helpers/typeGuards.ts:15](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L15)

___

### isDate

▸ **isDate**<`U`\>(`term`): term is Date

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

[src/helpers/typeGuards.ts:56](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L56)

___

### isFunction

▸ **isFunction**<`T`, `U`\>(`term`): term is T

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

[src/helpers/typeGuards.ts:32](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L32)

___

### isInteger

▸ **isInteger**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:70](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L70)

___

### isMap

▸ **isMap**<`K`, `V`, `U`\>(`term`): term is Map<K, V\>

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

[src/helpers/typeGuards.ts:42](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L42)

___

### isNegativeInteger

▸ **isNegativeInteger**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:79](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L79)

___

### isNonEmptyArray

▸ **isNonEmptyArray**<`T`, `U`\>(`term`): term is T[]

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

[src/helpers/typeGuards.ts:61](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L61)

___

### isNonEmptyString

▸ **isNonEmptyString**<`U`\>(`term`): term is string

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

[src/helpers/typeGuards.ts:64](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L64)

___

### isNonNegativeInteger

▸ **isNonNegativeInteger**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:76](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L76)

___

### isNull

▸ **isNull**<`T`\>(`term`): term is null

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

[src/helpers/typeGuards.ts:30](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L30)

___

### isNumber

▸ **isNumber**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:18](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L18)

___

### isNumberOrNaN

▸ **isNumberOrNaN**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:67](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L67)

___

### isObject

▸ **isObject**<`T`, `U`\>(`term`): term is NonNullable<T\>

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

[src/helpers/typeGuards.ts:35](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L35)

___

### isObjectOrNull

▸ **isObjectOrNull**<`T`, `U`\>(`term`): term is T

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

[src/helpers/typeGuards.ts:58](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L58)

___

### isPositiveInteger

▸ **isPositiveInteger**<`U`\>(`term`): term is number

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

[src/helpers/typeGuards.ts:73](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L73)

___

### isSet

▸ **isSet**<`T`, `U`\>(`term`): term is Set<T\>

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

[src/helpers/typeGuards.ts:45](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L45)

___

### isString

▸ **isString**<`U`\>(`term`): term is string

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

[src/helpers/typeGuards.ts:21](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L21)

___

### isSymbol

▸ **isSymbol**<`U`\>(`term`): term is symbol

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

[src/helpers/typeGuards.ts:27](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L27)

___

### isUndefined

▸ **isUndefined**<`T`\>(`term`): term is undefined

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

[src/helpers/typeGuards.ts:12](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L12)

___

### isWeakMap

▸ **isWeakMap**<`K`, `V`, `U`\>(`term`): term is WeakMap<K, V\>

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

[src/helpers/typeGuards.ts:48](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L48)

___

### isWeakSet

▸ **isWeakSet**<`T`, `U`\>(`term`): term is WeakSet<T\>

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

[src/helpers/typeGuards.ts:52](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/typeGuards.ts#L52)

___

### pluralize

▸ **pluralize**(`count`, `plurals`, `withNumber?`, `hideZero?`): `string`

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

[src/helpers/string.ts:22](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/string.ts#L22)

___

### replaceInputString

▸ **replaceInputString**(`text`, `«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `«destructured»` | `Options` |

#### Returns

`string`

#### Defined in

[src/helpers/input.ts:9](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/input.ts#L9)

___

### resolveLambdaValue

▸ **resolveLambdaValue**<`TValue`, `TArgs`\>(`value`, `args?`): `TValue`

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

[src/helpers/lambdaValue.ts:7](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/lambdaValue.ts#L7)

___

### toDivide

▸ **toDivide**(`num`, `opt?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `opt?` | [`DivideOpt`](modules.md#divideopt) |

#### Returns

`string`

#### Defined in

[src/helpers/number.ts:3](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/number.ts#L3)

___

### toLowerCase

▸ **toLowerCase**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:19](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/string.ts#L19)

___

### toUpperCase

▸ **toUpperCase**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/helpers/string.ts:16](https://github.com/epifanovmd/utils/blob/9c060fa/src/helpers/string.ts#L16)

___

### validateLength

▸ **validateLength**(`length`, `message?`): <T\>(`value?`: `T`) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `Object` |
| `length.max?` | `number` |
| `length.min?` | `number` |
| `message?` | `string` |

#### Returns

`fn`

▸ <`T`\>(`value?`): `string`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

##### Returns

`string`

#### Defined in

[src/store/holders/validations.ts:9](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/validations.ts#L9)

___

### validateRegex

▸ **validateRegex**(`regex`, `message?`): (`value`: `string`) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `message?` | `string` |

#### Returns

`fn`

▸ (`value?`): `string`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `""` |

##### Returns

`string`

#### Defined in

[src/store/holders/validations.ts:43](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/validations.ts#L43)

___

### validateRequired

▸ **validateRequired**(`message?`): <T\>(`value?`: `T`) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`fn`

▸ <`T`\>(`value?`): `string`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

##### Returns

`string`

#### Defined in

[src/store/holders/validations.ts:33](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/validations.ts#L33)
