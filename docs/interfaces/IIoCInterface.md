[@force-dev/utils](../README.md) / [Exports](../modules.md) / IIoCInterface

# Interface: IIoCInterface<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### IIoCInterface

▸ **IIoCInterface**(`options?`): (`target`: `any`, `targetKey?`: `string`, `index?`: `number`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.inSingleton?` | `boolean` |

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

[src/ioc/IoC.ts:13](https://github.com/epifanovmd/utils/blob/9c060fa/src/ioc/IoC.ts#L13)

## Table of contents

### Properties

- [Tid](IIoCInterface.md#tid)

### Methods

- [getInstance](IIoCInterface.md#getinstance)

## Properties

### Tid

• `Readonly` **Tid**: `string`

#### Defined in

[src/ioc/IoC.ts:11](https://github.com/epifanovmd/utils/blob/9c060fa/src/ioc/IoC.ts#L11)

## Methods

### getInstance

▸ **getInstance**(): `T`

#### Returns

`T`

#### Defined in

[src/ioc/IoC.ts:19](https://github.com/epifanovmd/utils/blob/9c060fa/src/ioc/IoC.ts#L19)
