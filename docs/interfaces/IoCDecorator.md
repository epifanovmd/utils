[@force-dev/utils](../README.md) / [Exports](../modules.md) / IoCDecorator

# Interface: IoCDecorator<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### IoCDecorator

▸ **IoCDecorator**(`options?`): (`target`: `any`, `targetKey?`: `string`, `index?`: `number`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IoCDecoratorOptions`](IoCDecoratorOptions.md) |

#### Returns

`fn`

▸ (`target`, `targetKey?`, `index?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `targetKey?` | `string` |
| `index?` | `number` |

##### Returns

`void`

#### Defined in

[src/ioc/IoC.ts:18](https://github.com/epifanovmd/utils/blob/fdca100/src/ioc/IoC.ts#L18)

## Table of contents

### Properties

- [Tid](IoCDecorator.md#tid)

### Methods

- [getInstance](IoCDecorator.md#getinstance)
- [toConstantValue](IoCDecorator.md#toconstantvalue)

## Properties

### Tid

• `Readonly` **Tid**: `string`

#### Defined in

[src/ioc/IoC.ts:16](https://github.com/epifanovmd/utils/blob/fdca100/src/ioc/IoC.ts#L16)

## Methods

### getInstance

▸ **getInstance**(): `T`

#### Returns

`T`

#### Defined in

[src/ioc/IoC.ts:24](https://github.com/epifanovmd/utils/blob/fdca100/src/ioc/IoC.ts#L24)

___

### toConstantValue

▸ **toConstantValue**(`value`): [`IoCDecorator`](IoCDecorator.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`IoCDecorator`](IoCDecorator.md)<`T`\>

#### Defined in

[src/ioc/IoC.ts:25](https://github.com/epifanovmd/utils/blob/fdca100/src/ioc/IoC.ts#L25)
