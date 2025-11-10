# SDK Documentation

The Alternate Futures SDK provides a JavaScript/TypeScript library for programmatic access to the platform.

## Installation

Install the SDK using npm, pnpm, or yarn:

::: code-group

```bash [npm]
npm install @alternatefutures/sdk
```

```bash [pnpm]
pnpm add @alternatefutures/sdk
```

```bash [yarn]
yarn add @alternatefutures/sdk
```

:::

## Quick Start

### For Node.js Projects

```typescript
import { AlternateFuturesSdk } from '@alternatefutures/sdk/node';

// Initialize with API key
const af = new AlternateFuturesSdk({
  personalAccessToken: process.env.AF_TOKEN
});

// List agents
const agents = await af.agents.list();

// Deploy a site
const deployment = await af.sites.deploy({
  name: 'My Site',
  network: 'ipfs',
  directory: './dist'
});

// Create an agent
const agent = await af.agents.create({
  name: 'Crypto Guru',
  type: 'eliza',
  character: {
    name: 'Crypto Guru',
    bio: 'Expert crypto analyst',
    traits: ['analytical'],
    topics: ['crypto', 'DeFi']
  }
});
```

### For Browser Applications

```typescript
import { AlternateFuturesSdk } from '@alternatefutures/sdk/browser';

// Or simply:
// import { AlternateFuturesSdk } from '@alternatefutures/sdk';
// (defaults to browser version)

const af = new AlternateFuturesSdk({
  personalAccessToken: 'your-token'
});

// Use SDK methods
const agents = await af.agents.list();
```

**Note:** The Node.js version (`@alternatefutures/sdk/node`) provides access to filesystem-dependent features like directory uploads. The browser version has a narrower feature set suitable for web applications.

## Documentation

- [Installation Guide](./installation) - Detailed installation and setup
- [API Reference](./api) - Complete API documentation (auto-generated)

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions:

```typescript
import { AlternateFutures, type Agent, type Site } from '@alternatefutures/sdk';

const af = new AlternateFutures({ apiKey: '' });

// Fully typed
const agent: Agent = await af.agents.get('agent-id');
const site: Site = await af.sites.get('site-id');
```

## Authentication

The SDK supports multiple authentication methods:

### API Key (Server-side)

```typescript
const af = new AlternateFutures({
  apiKey: 'af_your_api_key_here'
});
```

### OAuth (Browser)

```typescript
const af = new AlternateFutures();

await af.auth.login({ provider: 'google' });
const user = await af.auth.getCurrentUser();
```

### Web3 Wallet

```typescript
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const address = await signer.getAddress();

const message = await af.auth.getSignMessage(address);
const signature = await signer.signMessage(message);

await af.auth.loginWithWallet({ address, signature });
```

## Requirements

- Node.js 18.0.0 or higher
- Works in both Node.js and browser environments
