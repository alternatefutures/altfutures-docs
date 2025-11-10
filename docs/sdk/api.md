# SDK API Reference

> This documentation is auto-generated from the `cloud-sdk` repository using TypeDoc.

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

- [AFFunctionStatus](#affunctionstatus)
- [Application](#application)
- [Deployment](#deployment)
- [Domain](#domain)
- [DomainStatus](#domainstatus)
- [EnsRecord](#ensrecord)
- [AFFunction](#affunction)
- [IpfsFile](#ipfsfile)
- [IpnsRecord](#ipnsrecord)
- [PrivateGateway](#privategateway)
- [Project](#project)
- [Site](#site)
- [StoragePin](#storagepin)
- [UploadContentOptions](#uploadcontentoptions)
- [UploadPinResponse](#uploadpinresponse)
- [UploadProgress](#uploadprogress)
- [Zone](#zone)

### Functions

- [createClient](#createclient)

## Type Aliases

### AFFunctionStatus

**AFFunctionStatus**: `"ACTIVE"` \| `"INACTIVE"`

Status of a cloud function.

**Defined in:** `node_modules/@alternatefutures/utils-genql-client/dist/schema.ts:506`

---

### Application

**Application**: `Object`

OAuth application configuration for authentication and CORS.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique application identifier |
| `name` | `string` | Application name |
| `clientId` | `string` | OAuth client ID |
| `whitelistDomains` | `string[]` | Allowed domains for CORS and OAuth |
| `whiteLabelDomains` | `string[]` | White label domains (deprecated) |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/applications.ts:8`

---

### Deployment

**Deployment**: `Object`

A deployment of a site to IPFS or other storage.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique deployment identifier |
| `status` | `string` | Deployment status |
| `storageType` | `string` | Storage type (IPFS, Filecoin, etc.) |
| `siteId` | `string` | Associated site ID |
| `cid` | `string` | Content identifier (CID) |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/sites.ts:22`

---

### Domain

**Domain**: `Object`

Custom domain configuration for a site.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique domain identifier |
| `zone` | `object` | DNS zone configuration |
| `hostname` | `string` | Domain hostname |
| `isVerified` | `boolean` | Whether domain is verified |
| `dnsConfigs` | `object[]` | DNS configuration records |
| `status` | `string` | Domain status |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/domains.ts:22`

---

### DomainStatus

**DomainStatus**: `"ACTIVE"` \| `"CREATED"` \| `"CREATING"` \| `"CREATING_FAILED"` \| `"DELETING"` \| `"DELETING_FAILED"` \| `"VERIFYING"` \| `"VERIFYING_FAILED"`

Status of a custom domain.

**Defined in:** `node_modules/@alternatefutures/utils-genql-client/dist/schema.ts:331`

---

### EnsRecord

**EnsRecord**: `Object`

ENS (Ethereum Name Service) record linking to IPNS content.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique ENS record identifier |
| `name` | `string` | ENS name (e.g., mysite.eth) |
| `status` | `string` | ENS record status |
| `site` | `object` | Associated site |
| `ipnsRecord` | `object` | IPNS record details |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/ens.ts:7`

---

### AFFunction

**AFFunction**: `Object`

Serverless edge function configuration.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique function identifier |
| `name` | `string` | Function name |
| `slug` | `string` | URL-friendly function slug |
| `status` | `AFFunctionStatus` | Function status (ACTIVE/INACTIVE) |
| `routes` | `Record<string, string>` | Route patterns and handlers |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/functions.ts:13`

---

### IpfsFile

**IpfsFile**: `Object`

File object for IPFS upload.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `ArrayBuffer` \| `string` | File content |
| `path?` | `string` | Optional file path |

**Defined in:** `src/clients/ipfs.ts:17`

---

### IpnsRecord

**IpnsRecord**: `Object`

IPNS (InterPlanetary Name System) record for mutable content.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique IPNS record identifier |
| `name` | `string` | IPNS name |
| `hash` | `string` | Current IPFS CID |
| `ensRecords` | `object[]` | Associated ENS records |

**Defined in:** `src/clients/ipns.ts:37`

---

### PrivateGateway

**PrivateGateway**: `Object`

Dedicated IPFS gateway with custom domain support.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique gateway identifier |
| `slug` | `string` | Gateway slug |
| `name` | `string` | Gateway name |
| `project` | `object` | Associated project |
| `zone` | `object` | DNS zone |
| `updatedAt` | `string` | Last update timestamp |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/privateGateway.ts:26`

---

### Project

**Project**: `Object`

Project workspace containing sites, functions, and resources.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique project identifier |
| `name` | `string` | Project name |
| `avatar` | `string` | Project avatar URL |
| `backupStorageOnArweave` | `boolean` | Enable Arweave backup |
| `backupStorageOnFilecoin` | `boolean` | Enable Filecoin backup |
| `createdAt` | `string` | Creation timestamp |

**Defined in:** `src/clients/projects.ts:26`

---

### Site

**Site**: `Object`

Static site deployment configuration.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique site identifier |
| `name` | `string` | Site name |
| `slug` | `string` | URL-friendly site slug |
| `deployments` | `Deployment[]` | Site deployments |
| `domains` | `object[]` | Custom domains |
| `ipnsRecords` | `object[]` | IPNS records |
| `primaryDomain?` | `object` | Primary domain |
| `zones` | `object[]` | DNS zones |

**Defined in:** `src/clients/sites.ts:27`

---

### StoragePin

**StoragePin**: `Object`

IPFS pin with backup storage information.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | `string` | Content identifier |
| `filename` | `string` | File name |
| `extension` | `string` | File extension |
| `arweavePin` | `object` | Arweave backup info |
| `arweaveId?` | `string` | Arweave transaction ID |
| `filecoinDealIds?` | `string` | Filecoin deal IDs |

**Defined in:** `src/clients/storage.ts:36`

---

### UploadContentOptions

**UploadContentOptions**: `Object`

Options for uploading content.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `functionName?` | `string` | Associated function name |
| `siteId?` | `string` | Associated site ID |

**Defined in:** `src/clients/uploadProxy.ts:60`

---

### UploadPinResponse

**UploadPinResponse**: `Object`

Response from uploading and pinning content.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `duplicate` | `boolean` | Whether content already exists |
| `pin` | `object` | Pin information |

**Defined in:** `src/clients/uploadProxy.ts:65`

---

### UploadProgress

**UploadProgress**: `Object`

Upload progress information.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `loadedSize` | `number` | Bytes uploaded |
| `totalSize?` | `number` | Total bytes to upload |

**Defined in:** `src/clients/uploadProxy.ts:36`

---

### Zone

**Zone**: `Object`

DNS zone configuration for custom domains.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique zone identifier |
| `originUrl` | `string` | Origin URL |
| `type` | `string` | Zone type |
| `status` | `string` | Zone status |
| `createdAt` | `string` | Creation timestamp |
| `updatedAt` | `string` | Last update timestamp |

**Defined in:** `src/clients/domains.ts:34`

---

## Functions

### createClient

▸ **createClient**(`options?`): [`Client`](interfaces/Client.md)

Creates a GraphQL client for the Alternate Futures API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ClientOptions` | Client configuration options |

#### Returns

[`Client`](interfaces/Client.md)

Configured GraphQL client instance

**Defined in:** `node_modules/@alternatefutures/utils-genql-client/dist/index.ts:34`
