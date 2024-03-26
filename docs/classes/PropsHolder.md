[@force-dev/utils](../README.md) / [Exports](../modules.md) / PropsHolder

# Class: PropsHolder<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](PropsHolder.md#constructor)

### Properties

- [\_isActive](PropsHolder.md#_isactive)
- [\_value](PropsHolder.md#_value)

### Accessors

- [isActive](PropsHolder.md#isactive)
- [value](PropsHolder.md#value)

### Methods

- [setActive](PropsHolder.md#setactive)
- [setValue](PropsHolder.md#setvalue)
- [whenChanged](PropsHolder.md#whenchanged)

## Constructors

### constructor

• **new PropsHolder**<`T`\>(`value?`, `isActive?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<[`Maybe`](../modules.md#maybe)<`T`\>, `unknown`\> | `undefined` |
| `isActive` | [`LambdaValue`](../modules.md#lambdavalue)<`boolean`, `unknown`\> | `false` |

#### Defined in

[src/store/holders/PropsHolder.ts:8](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L8)

## Properties

### \_isActive

• **\_isActive**: [`LambdaValue`](../modules.md#lambdavalue)<`boolean`, `unknown`\>

#### Defined in

[src/store/holders/PropsHolder.ts:6](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L6)

___

### \_value

• **\_value**: [`LambdaValue`](../modules.md#lambdavalue)<[`Maybe`](../modules.md#maybe)<`T`\>, `unknown`\>

#### Defined in

[src/store/holders/PropsHolder.ts:5](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L5)

## Accessors

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/store/holders/PropsHolder.ts:29](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L29)

___

### value

• `get` **value**(): [`Maybe`](../modules.md#maybe)<`T`\>

#### Returns

[`Maybe`](../modules.md#maybe)<`T`\>

#### Defined in

[src/store/holders/PropsHolder.ts:25](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L25)

## Methods

### setActive

▸ **setActive**(`isActive?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isActive` | [`LambdaValue`](../modules.md#lambdavalue)<`boolean`, `unknown`\> | `false` |

#### Returns

`void`

#### Defined in

[src/store/holders/PropsHolder.ts:21](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L21)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`LambdaValue`](../modules.md#lambdavalue)<`T`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/store/holders/PropsHolder.ts:17](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L17)

___

### whenChanged

▸ **whenChanged**(): `Promise`<`void`\> & { `cancel`: () => `void`  }

#### Returns

`Promise`<`void`\> & { `cancel`: () => `void`  }

#### Defined in

[src/store/holders/PropsHolder.ts:33](https://github.com/epifanovmd/utils/blob/9c060fa/src/store/holders/PropsHolder.ts#L33)
