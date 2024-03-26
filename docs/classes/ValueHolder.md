[@force-dev/utils](../README.md) / [Exports](../modules.md) / ValueHolder

# Class: ValueHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](ValueHolder.md#constructor)

### Properties

- [\_value](ValueHolder.md#_value)

### Accessors

- [isLambda](ValueHolder.md#islambda)
- [value](ValueHolder.md#value)

### Methods

- [setValue](ValueHolder.md#setvalue)
- [whenChanged](ValueHolder.md#whenchanged)

## Constructors

### constructor

• **new ValueHolder**<`T`\>(`value`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Defined in

[src/store/holders/ValueHolder.ts:7](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L7)

## Properties

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\>

#### Defined in

[src/store/holders/ValueHolder.ts:5](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L5)

## Accessors

### isLambda

• `get` **isLambda**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ValueHolder.ts:20](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L20)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

[src/store/holders/ValueHolder.ts:16](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L16)

## Methods

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/ValueHolder.ts:12](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L12)

___

### whenChanged

▸ **whenChanged**(): `Promise`<`void`\> & { `cancel`: () => `void`  }

#### Returns

`Promise`<`void`\> & { `cancel`: () => `void`  }

#### Defined in

[src/store/holders/ValueHolder.ts:24](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/ValueHolder.ts#L24)
