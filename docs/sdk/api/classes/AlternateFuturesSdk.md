[@alternatefutures/sdk](../README.md) / AlternateFuturesSdk

# Class: AlternateFuturesSdk

## Table of contents

### Constructors

- [constructor](AlternateFuturesSdk.md#constructor)

### Methods

- [applications](AlternateFuturesSdk.md#applications)
- [domains](AlternateFuturesSdk.md#domains)
- [ens](AlternateFuturesSdk.md#ens)
- [functions](AlternateFuturesSdk.md#functions)
- [getVersion](AlternateFuturesSdk.md#getversion)
- [ipfs](AlternateFuturesSdk.md#ipfs)
- [ipns](AlternateFuturesSdk.md#ipns)
- [privateGateways](AlternateFuturesSdk.md#privategateways)
- [projects](AlternateFuturesSdk.md#projects)
- [sites](AlternateFuturesSdk.md#sites)
- [storage](AlternateFuturesSdk.md#storage)
- [user](AlternateFuturesSdk.md#user)

## Constructors

### constructor

• **new AlternateFuturesSdk**(`«destructured»`): [`AlternateFuturesSdk`](AlternateFuturesSdk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AlternateFuturesSdkOptions` |

#### Returns

[`AlternateFuturesSdk`](AlternateFuturesSdk.md)

#### Defined in

[src/AlternateFuturesSdk.ts:57](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L57)

## Methods

### applications

▸ **applications**(): `ApplicationsClient`

#### Returns

`ApplicationsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:166](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L166)

___

### domains

▸ **domains**(): `DomainsClient`

#### Returns

`DomainsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:156](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L156)

___

### ens

▸ **ens**(): `EnsClient`

#### Returns

`EnsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:176](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L176)

___

### functions

▸ **functions**(): `FunctionsClient`

#### Returns

`FunctionsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:205](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L205)

___

### getVersion

▸ **getVersion**(): `Promise`\<`Pick`\<\{ `__typename`: ``"Query"`` ; `afFunctionByName`: `AFFunction` ; `afFunctionDeployment`: `AFFunctionDeployment` ; `afFunctionDeployments`: `AFFunctionDeploymentsWithAggregation` ; `afFunctions`: `AFFunctionsWithAggregation` ; `application`: `Application` ; `applicationNameAvailability`: `boolean` ; `applications`: `ApplicationsWithAggregation` ; `billingCycleUsages`: `BillingCycleUsagesWithAggregation` ; `billingPlan`: `BillingPlan` ; `billingPlans`: `BillingPlansWithAggregation` ; `deployment`: `Deployment` ; `deployments`: `DeploymentsWithAggregation` ; `deploymentsQueueLimit`: `boolean` ; `domain`: `Domain` ; `domainAvailability`: `boolean` ; `domainByHostname`: `Domain` ; `domains`: `DomainsWithAggregation` ; `domainsByZoneId`: `DomainsByZoneIdWithAggregation` ; `emailAvailability`: `boolean` ; `ensNameAvailability`: `boolean` ; `ensRecord`: `EnsRecord` ; `ensRecordByName`: `EnsRecord` ; `ensRecords`: `EnsRecordsWithAggregation` ; `ensRecordsByIpnsId`: `EnsRecordsByIpnsIdWithAggregation` ; `filecoinDeals`: `FilecoinDealsWithAggregation` ; `folder`: `Folder` ; `folderNameAvailabilityInParentFolder`: `boolean` ; `gitApiBranches`: `GitApiBranch`[] ; `gitApiInstallations`: `GitApiInsatallation`[] ; `gitApiIsRepoNameAvailable`: `boolean` ; `gitApiTree`: `GitApiTree`[] ; `gitIntegration`: `GitIntegration` ; `gitProvider`: `GitProvider` ; `gitProviders`: `GitProvider`[] ; `githubAppInstallations`: `GithubAppInstallation`[] ; `invitation`: `InvitationDetail` ; `invitations`: `InvitationsWithAggregation` ; `ipnsRecord`: `IpnsRecord` ; `ipnsRecords`: `IpnsRecordsWithAggregation` ; `listDeploymentBranches`: `string`[] ; `listFolder`: `ListFolderWithAggregation` ; `migrationRequest`: `MigrationRequest` ; `migrationRequests`: `MigrationRequestsWithAggregation` ; `migrationRequestsByToken`: `MigrationRequest`[] ; `migrationScheduledRequest`: ``null`` \| `MigrationScheduledRequest` ; `migrationStatusByTeamId`: ``null`` \| `MigrationStatus` ; `migrationTeamInfosFromToken`: `MigrationTeamInfo`[] ; `notificationSettings`: `NotificationSettings`[] ; `notifications`: `NotificationsWithAggregation` ; `permissionGroups`: `PermissionGroupsWithAggregation` ; `personalAccessTokens`: `PersonalAccessTokensWithAggregation` ; `pin`: `Pin` ; `pinNameAvailabilityInParentFolder`: `boolean` ; `pins`: `PinsWithAggregation` ; `pinsByFilename`: `PinsByFilenameWithAggregation` ; `privateGateway`: `PrivateGateway` ; `privateGatewayBySlug`: `PrivateGateway` ; `privateGatewayNameAvailability`: `boolean` ; `privateGateways`: `PrivateGatewaysWithAggregation` ; `project`: `Project` ; `projectQuota`: `ProjectQuota` ; `projects`: `ProjectsWithAggregation` ; `resolveIpnsName`: `string` ; `secretAvailability`: `boolean` ; `site`: `Site` ; `siteBuildSettings`: `SiteBuildSettings` ; `siteBySlug`: `Site` ; `siteFramework`: `SiteFramework` ; `siteFrameworks`: `SiteFramework`[] ; `siteNameAvailability`: `boolean` ; `siteQuota`: `SiteQuota` ; `sites`: `SitesWithAggregation` ; `slugAvailability`: `boolean` ; `template`: `Template` ; `templateCategories`: `TemplateCategoriesWithAggregation` ; `templateCategory`: `TemplateCategory` ; `templateNameAvailability`: `boolean` ; `templates`: `TemplatesWithAggregation` ; `twoFactorProtectedActions`: `TwoFactorProtectedActionsWithAggregation` ; `user`: `User` ; `userQuota`: `UserQuota` ; `usernameAvailability`: `boolean` ; `version`: `Pick`\<\{ `__typename`: ``"Version"`` ; `commitHash`: `string`  }, ``"__typename"`` \| ``"commitHash"``\> ; `zone`: `Zone` ; `zones`: `ZonesWithAggregation`  }, ``"version"``\>\>

#### Returns

`Promise`\<`Pick`\<\{ `__typename`: ``"Query"`` ; `afFunctionByName`: `AFFunction` ; `afFunctionDeployment`: `AFFunctionDeployment` ; `afFunctionDeployments`: `AFFunctionDeploymentsWithAggregation` ; `afFunctions`: `AFFunctionsWithAggregation` ; `application`: `Application` ; `applicationNameAvailability`: `boolean` ; `applications`: `ApplicationsWithAggregation` ; `billingCycleUsages`: `BillingCycleUsagesWithAggregation` ; `billingPlan`: `BillingPlan` ; `billingPlans`: `BillingPlansWithAggregation` ; `deployment`: `Deployment` ; `deployments`: `DeploymentsWithAggregation` ; `deploymentsQueueLimit`: `boolean` ; `domain`: `Domain` ; `domainAvailability`: `boolean` ; `domainByHostname`: `Domain` ; `domains`: `DomainsWithAggregation` ; `domainsByZoneId`: `DomainsByZoneIdWithAggregation` ; `emailAvailability`: `boolean` ; `ensNameAvailability`: `boolean` ; `ensRecord`: `EnsRecord` ; `ensRecordByName`: `EnsRecord` ; `ensRecords`: `EnsRecordsWithAggregation` ; `ensRecordsByIpnsId`: `EnsRecordsByIpnsIdWithAggregation` ; `filecoinDeals`: `FilecoinDealsWithAggregation` ; `folder`: `Folder` ; `folderNameAvailabilityInParentFolder`: `boolean` ; `gitApiBranches`: `GitApiBranch`[] ; `gitApiInstallations`: `GitApiInsatallation`[] ; `gitApiIsRepoNameAvailable`: `boolean` ; `gitApiTree`: `GitApiTree`[] ; `gitIntegration`: `GitIntegration` ; `gitProvider`: `GitProvider` ; `gitProviders`: `GitProvider`[] ; `githubAppInstallations`: `GithubAppInstallation`[] ; `invitation`: `InvitationDetail` ; `invitations`: `InvitationsWithAggregation` ; `ipnsRecord`: `IpnsRecord` ; `ipnsRecords`: `IpnsRecordsWithAggregation` ; `listDeploymentBranches`: `string`[] ; `listFolder`: `ListFolderWithAggregation` ; `migrationRequest`: `MigrationRequest` ; `migrationRequests`: `MigrationRequestsWithAggregation` ; `migrationRequestsByToken`: `MigrationRequest`[] ; `migrationScheduledRequest`: ``null`` \| `MigrationScheduledRequest` ; `migrationStatusByTeamId`: ``null`` \| `MigrationStatus` ; `migrationTeamInfosFromToken`: `MigrationTeamInfo`[] ; `notificationSettings`: `NotificationSettings`[] ; `notifications`: `NotificationsWithAggregation` ; `permissionGroups`: `PermissionGroupsWithAggregation` ; `personalAccessTokens`: `PersonalAccessTokensWithAggregation` ; `pin`: `Pin` ; `pinNameAvailabilityInParentFolder`: `boolean` ; `pins`: `PinsWithAggregation` ; `pinsByFilename`: `PinsByFilenameWithAggregation` ; `privateGateway`: `PrivateGateway` ; `privateGatewayBySlug`: `PrivateGateway` ; `privateGatewayNameAvailability`: `boolean` ; `privateGateways`: `PrivateGatewaysWithAggregation` ; `project`: `Project` ; `projectQuota`: `ProjectQuota` ; `projects`: `ProjectsWithAggregation` ; `resolveIpnsName`: `string` ; `secretAvailability`: `boolean` ; `site`: `Site` ; `siteBuildSettings`: `SiteBuildSettings` ; `siteBySlug`: `Site` ; `siteFramework`: `SiteFramework` ; `siteFrameworks`: `SiteFramework`[] ; `siteNameAvailability`: `boolean` ; `siteQuota`: `SiteQuota` ; `sites`: `SitesWithAggregation` ; `slugAvailability`: `boolean` ; `template`: `Template` ; `templateCategories`: `TemplateCategoriesWithAggregation` ; `templateCategory`: `TemplateCategory` ; `templateNameAvailability`: `boolean` ; `templates`: `TemplatesWithAggregation` ; `twoFactorProtectedActions`: `TwoFactorProtectedActionsWithAggregation` ; `user`: `User` ; `userQuota`: `UserQuota` ; `usernameAvailability`: `boolean` ; `version`: `Pick`\<\{ `__typename`: ``"Version"`` ; `commitHash`: `string`  }, ``"__typename"`` \| ``"commitHash"``\> ; `zone`: `Zone` ; `zones`: `ZonesWithAggregation`  }, ``"version"``\>\>

#### Defined in

[src/AlternateFuturesSdk.ts:99](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L99)

___

### ipfs

▸ **ipfs**(): `IpfsClient`

#### Returns

`IpfsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:124](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L124)

___

### ipns

▸ **ipns**(): `IpnsClient`

#### Returns

`IpnsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:116](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L116)

___

### privateGateways

▸ **privateGateways**(): `PrivateGatewayClient`

#### Returns

`PrivateGatewayClient`

#### Defined in

[src/AlternateFuturesSdk.ts:184](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L184)

___

### projects

▸ **projects**(): `ProjectsClient`

#### Returns

`ProjectsClient`

#### Defined in

[src/AlternateFuturesSdk.ts:146](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L146)

___

### sites

▸ **sites**(): `SitesClient`

#### Returns

`SitesClient`

#### Defined in

[src/AlternateFuturesSdk.ts:138](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L138)

___

### storage

▸ **storage**(): `StorageClient`

#### Returns

`StorageClient`

#### Defined in

[src/AlternateFuturesSdk.ts:194](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L194)

___

### user

▸ **user**(): `UserClient`

#### Returns

`UserClient`

#### Defined in

[src/AlternateFuturesSdk.ts:108](https://github.com/alternatefutures/cloud-sdk/blob/1177b5bcaba0f2529b8ed4aef4b688498a1b5d38/src/AlternateFuturesSdk.ts#L108)
