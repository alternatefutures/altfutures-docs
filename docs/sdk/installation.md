# SDK Installation

## Installation

Install the Alternate Futures SDK in your project:

```bash
npm install @alternatefutures/sdk
```

Or with pnpm:

```bash
pnpm add @alternatefutures/sdk
```

Or with yarn:

```bash
yarn add @alternatefutures/sdk
```

## Quick Start

```typescript
import { AlternateFuturesSdk } from '@alternatefutures/sdk';

// Initialize with your API key
const af = new AlternateFuturesSdk({
  apiKey: process.env.AF_API_KEY
});

// List your agents
const agents = await af.agents.list();
console.log(agents);

// Deploy a site
const site = await af.sites.create({
  name: 'My Site',
  source: './dist',
  network: 'ipfs'
});
console.log('Deployed to:', site.url);
```

## Authentication

You can authenticate using several methods:

### 1. Simple Authentication (Recommended)

**API Key:**
```typescript
const af = new AlternateFuturesSdk({
  apiKey: 'your-api-key'
});
```

**Personal Access Token:**
```typescript
const af = new AlternateFuturesSdk({
  personalAccessToken: 'your-pat'
});
```

### 2. Advanced Authentication with PersonalAccessTokenService

For more control over authentication and token management:

```typescript
import { AlternateFuturesSdk, PersonalAccessTokenService } from '@alternatefutures/sdk/node';

const personalAccessToken = process.env.AF_TOKEN;
const projectId = process.env.AF_PROJECT_ID;

const accessTokenService = new PersonalAccessTokenService({
  personalAccessToken,
  projectId,
});

const af = new AlternateFuturesSdk({
  accessTokenService,
});

// Use the SDK
const applications = await af.applications().list();
console.log(applications);
```

This approach is useful when you need to:
- Manage multiple projects with different tokens
- Implement custom token refresh logic
- Handle token expiration explicitly

## Next Steps

- See the [API Reference](./api.md) for complete SDK documentation
- Check out the [Guides](/guides/) for usage examples
