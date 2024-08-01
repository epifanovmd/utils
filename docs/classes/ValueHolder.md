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

[src/store/holders/ValueHolder.ts:8](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L8)

## Properties

### \_value

• `Private` **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\>

#### Defined in

[src/store/holders/ValueHolder.ts:6](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L6)

## Accessors

### isLambda

• `get` **isLambda**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/ValueHolder.ts:31](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L31)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Defined in

[src/store/holders/ValueHolder.ts:27](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L27)

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

[src/store/holders/ValueHolder.ts:23](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L23)

___

### whenChanged

▸ **whenChanged**(): `Promise`<`void`\> & { `cancel`: () => `void`  }

#### Returns

`Promise`<`void`\> & { `cancel`: () => `void`  }

#### Defined in

[src/store/holders/ValueHolder.ts:35](https://github.com/epifanovmd/utils/blob/fdca100/src/store/holders/ValueHolder.ts#L35)
