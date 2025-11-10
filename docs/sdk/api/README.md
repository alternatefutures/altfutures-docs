@alternatefutures/sdk

# @alternatefutures/sdk

## Table of contents

### Classes

- [AlternateFuturesSdk](classes/AlternateFuturesSdk.md)
- [ApplicationAccessTokenService](classes/ApplicationAccessTokenService.md)
- [PersonalAccessTokenService](classes/PersonalAccessTokenService.md)
- [StaticAccessTokenService](classes/StaticAccessTokenService.md)

### Interfaces

- [ApplicationWhiteLabelDomain](interfaces/ApplicationWhiteLabelDomain.md)
- [ApplicationWhitelistDomain](interfaces/ApplicationWhitelistDomain.md)
- [Client](interfaces/Client.md)

### Type Aliases

- [AFFunctionStatus](README.md#affunctionstatus)
- [Application](README.md#application)
- [Deployment](README.md#deployment)
- [Domain](README.md#domain)
- [DomainStatus](README.md#domainstatus)
- [EnsRecord](README.md#ensrecord)
- [AFFunction](README.md#affunction)
- [IpfsFile](README.md#ipfsfile)
- [IpnsRecord](README.md#ipnsrecord)
- [PrivateGateway](README.md#privategateway)
- [Project](README.md#project)
- [Site](README.md#site)
- [StoragePin](README.md#storagepin)
- [UploadContentOptions](README.md#uploadcontentoptions)
- [UploadPinResponse](README.md#uploadpinresponse)
- [UploadProgress](README.md#uploadprogress)
- [Zone](README.md#zone)

### Functions

- [createClient](README.md#createclient)

## Type Aliases

### AFFunctionStatus

Ƭ **AFFunctionStatus**: ``"ACTIVE"`` \| ``"INACTIVE"``

#### Defined in

node_modules/.pnpm/@alternatefutures+utils-genql-client@0.2.0/node_modules/@alternatefutures/utils-genql-client/dist/schema.ts:506

___

### Application

Ƭ **Application**: `Omit`\<`ApplicationWithRelations`, ``"__typename"`` \| ``"whitelistDomains"``\> & \{ `whitelistDomains`: `string`[]  } & \{ `whiteLabelDomains`: `string`[]  }

#### Defined in

[src/clients/applications.ts:8](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/applications.ts#L8)

___

### Deployment

Ƭ **Deployment**: `Pick`\<`DeploymentWithRelations`, ``"id"`` \| ``"status"`` \| ``"storageType"`` \| ``"siteId"`` \| ``"cid"`` \| ``"updatedAt"`` \| ``"createdAt"``\>

#### Defined in

[src/clients/sites.ts:22](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/sites.ts#L22)

___

### Domain

Ƭ **Domain**: `Pick`\<`DomainWithRelations`, ``"id"`` \| ``"zone"`` \| ``"hostname"`` \| ``"isVerified"`` \| ``"updatedAt"`` \| ``"createdAt"`` \| ``"dnsConfigs"`` \| ``"status"``\>

#### Defined in

[src/clients/domains.ts:22](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/domains.ts#L22)

___

### DomainStatus

Ƭ **DomainStatus**: ``"ACTIVE"`` \| ``"CREATED"`` \| ``"CREATING"`` \| ``"CREATING_FAILED"`` \| ``"DELETING"`` \| ``"DELETING_FAILED"`` \| ``"VERIFYING"`` \| ``"VERIFYING_FAILED"``

#### Defined in

node_modules/.pnpm/@alternatefutures+utils-genql-client@0.2.0/node_modules/@alternatefutures/utils-genql-client/dist/schema.ts:331

___

### EnsRecord

Ƭ **EnsRecord**: `Omit`\<`EnsRecordWithRelations`, ``"site"`` \| ``"ipnsRecord"``\> & \{ `ipnsRecord`: `Pick`\<`EnsRecordWithRelations`[``"ipnsRecord"``], ``"id"`` \| ``"name"`` \| ``"hash"``\> & \{ `id`: `string`  } ; `site`: `Pick`\<`EnsRecordWithRelations`[``"site"``], ``"id"``\>  }

#### Defined in

[src/clients/ens.ts:7](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/ens.ts#L7)

___

### AFFunction

Ƭ **AFFunction**: `Omit`\<`OriginalAFFunction`, ``"projectId"`` \| ``"site"``\>

#### Defined in

[src/clients/functions.ts:13](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/functions.ts#L13)

___

### IpfsFile

Ƭ **IpfsFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `ArrayBuffer` \| `string` |
| `path?` | `string` |

#### Defined in

[src/clients/ipfs.ts:17](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/ipfs.ts#L17)

___

### IpnsRecord

Ƭ **IpnsRecord**: `Pick`\<`IpnsRecordWithRelations`, ``"id"`` \| ``"name"`` \| ``"hash"``\> & \{ `ensRecords`: `Pick`\<`IpnsRecordWithRelations`[``"ensRecords"``][`number`], ``"id"``\>[]  }

#### Defined in

[src/clients/ipns.ts:37](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/ipns.ts#L37)

___

### PrivateGateway

Ƭ **PrivateGateway**: `Omit`\<`PrivateGatewayWithRelations`, ``"project"`` \| ``"domains"`` \| ``"domainsPaginated"`` \| ``"primaryDomain"``\> & \{ `project`: `Pick`\<`Project`, ``"id"``\>  }

#### Defined in

[src/clients/privateGateway.ts:26](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/privateGateway.ts#L26)

___

### Project

Ƭ **Project**: `Omit`\<`ProjectWithRelations`, ``"currentUserMembership"`` \| ``"memberships"`` \| ``"membershipsPaginated"``\>

#### Defined in

[src/clients/projects.ts:26](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/projects.ts#L26)

___

### Site

Ƭ **Site**: `Pick`\<`SiteWithRelations`, ``"id"`` \| ``"name"`` \| ``"slug"``\> & \{ `deployments`: [`Deployment`](README.md#deployment)[] ; `domains`: `Pick`\<`SiteWithRelations`[``"domains"``][`number`], ``"id"`` \| ``"hostname"``\>[] ; `ipnsRecords`: `Pick`\<`SiteWithRelations`[``"ipnsRecords"``][`number`], ``"id"``\>[] ; `primaryDomain?`: `Pick`\<`DomainWithRelations`, ``"id"`` \| ``"hostname"``\> ; `zones`: `Pick`\<`SiteWithRelations`[``"zones"``][`number`], ``"id"`` \| ``"status"``\>[]  }

#### Defined in

[src/clients/sites.ts:27](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/sites.ts#L27)

___

### StoragePin

Ƭ **StoragePin**: `Pick`\<`Pin`, ``"cid"`` \| ``"filename"`` \| ``"extension"`` \| ``"arweavePin"``\> & \{ `arweaveId?`: `string` ; `filecoinDealIds?`: `string`  }

#### Defined in

[src/clients/storage.ts:36](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/storage.ts#L36)

___

### UploadContentOptions

Ƭ **UploadContentOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functionName?` | `string` |
| `siteId?` | `string` |

#### Defined in

[src/clients/uploadProxy.ts:60](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/uploadProxy.ts#L60)

___

### UploadPinResponse

Ƭ **UploadPinResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duplicate` | `boolean` |
| `pin` | `Pick`\<`Pin`, ``"cid"`` \| ``"size"``\> |

#### Defined in

[src/clients/uploadProxy.ts:65](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/uploadProxy.ts#L65)

___

### UploadProgress

Ƭ **UploadProgress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loadedSize` | `number` |
| `totalSize?` | `number` |

#### Defined in

[src/clients/uploadProxy.ts:36](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/uploadProxy.ts#L36)

___

### Zone

Ƭ **Zone**: `Pick`\<`ZoneWithRelations`, ``"id"`` \| ``"originUrl"`` \| ``"createdAt"`` \| ``"updatedAt"`` \| ``"type"`` \| ``"status"``\>

#### Defined in

[src/clients/domains.ts:34](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/clients/domains.ts#L34)

## Functions

### createClient

▸ **createClient**(`options?`): [`Client`](interfaces/Client.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ClientOptions` |

#### Returns

[`Client`](interfaces/Client.md)

#### Defined in

node_modules/.pnpm/@alternatefutures+utils-genql-client@0.2.0/node_modules/@alternatefutures/utils-genql-client/dist/index.ts:34
