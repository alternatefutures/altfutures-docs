[@alternatefutures/sdk](../README.md) / PersonalAccessTokenService

# Class: PersonalAccessTokenService

## Hierarchy

- `AccessTokenService`

  ↳ **`PersonalAccessTokenService`**

## Table of contents

### Constructors

- [constructor](PersonalAccessTokenService.md#constructor)

### Methods

- [close](PersonalAccessTokenService.md#close)
- [getAccessToken](PersonalAccessTokenService.md#getaccesstoken)

## Constructors

### constructor

• **new PersonalAccessTokenService**(`«destructured»`): [`PersonalAccessTokenService`](PersonalAccessTokenService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PersonalAccessTokenServiceOptions` |

#### Returns

[`PersonalAccessTokenService`](PersonalAccessTokenService.md)

#### Overrides

AccessTokenService.constructor

#### Defined in

[src/libs/AccessTokenService/PersonalAccessTokenService.ts:22](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/libs/AccessTokenService/PersonalAccessTokenService.ts#L22)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/libs/AccessTokenService/PersonalAccessTokenService.ts:86](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/libs/AccessTokenService/PersonalAccessTokenService.ts#L86)

___

### getAccessToken

▸ **getAccessToken**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Overrides

AccessTokenService.getAccessToken

#### Defined in

[src/libs/AccessTokenService/PersonalAccessTokenService.ts:78](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/libs/AccessTokenService/PersonalAccessTokenService.ts#L78)
