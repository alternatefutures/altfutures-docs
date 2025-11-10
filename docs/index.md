---
layout: home

hero:
  name: Alternate Futures
  text: DePIN Platform Documentation <span class="beta-badge">BETA</span>
  tagline: Deploy AI agents and static sites to decentralized infrastructure
  actions:
    - theme: brand
      text: Get Started
      link: /guides/
    - theme: alt
      text: CLI Docs
      link: /cli/
    - theme: alt
      text: SDK Docs
      link: /sdk/

features:
  - icon:
      src: /icons/robot.svg
      alt: AI Agents
    title: AI Agents
    details: Deploy and manage Eliza, ComfyUI, and custom AI agents with ease
    link: /guides/agents
    linkText: Learn more →
  - icon:
      src: /icons/globe.svg
      alt: Static Sites
    title: Static Sites
    details: Host websites on IPFS, Filecoin, or Arweave with one command
    link: /guides/sites
    linkText: Learn more →
  - icon:
      src: /icons/database.svg
      alt: Storage
    title: Storage Management
    details: Unified interface for managing decentralized storage across networks
    link: /guides/storage
    linkText: Learn more →
  - icon:
      src: /icons/code.svg
      alt: Developer Tools
    title: Developer Tools
    details: Powerful CLI and SDK for programmatic access to the platform
    link: /cli/
    linkText: View CLI docs →
  - icon:
      src: /icons/cloud.svg
      alt: Cloud Functions
    title: Cloud Functions
    details: Deploy serverless functions on decentralized infrastructure
    status: coming-soon
  - icon:
      src: /icons/chart.svg
      alt: Analytics
    title: Analytics
    details: Track usage and performance metrics across all your deployments
    status: in-progress
  - icon:
      src: /icons/credit-card.svg
      alt: Billing
    title: Billing
    details: Manage costs, credits, and payment methods for your services
    link: /guides/billing
    linkText: Learn more →
  - icon:
      src: /icons/shield.svg
      alt: Multi-Auth
    title: Multi-Auth
    details: Email, SMS, Web3 wallets, and social login support
    link: /guides/authentication
    linkText: Learn more →
  - icon:
      src: /icons/package.svg
      alt: Container Registry
    title: Decentralized Registry
    details: Self-hosted container registry on Akash with IPFS storage - zero vendor lock-in
    link: /guides/decentralized-registry
    linkText: Learn more →
  - icon:
      src: /icons/server.svg
      alt: Infrastructure
    title: Infrastructure
    details: Deploy your own registry, DNS, and compute on decentralized networks
    link: /guides/registry-deployment
    linkText: Get started →
---

## Quick Links

- [Dashboard Guide](/guides/dashboard) - Learn how to use the web interface
- [CLI Commands](/cli/commands) - Complete CLI reference (auto-generated)
- [SDK API Reference](/sdk/api) - TypeScript SDK documentation (auto-generated)
- [Authentication](/guides/authentication) - Multi-method authentication guide
- [Decentralized Registry](/guides/decentralized-registry) - Self-hosted container registry with IPFS
- [Deploy Your Registry](/guides/registry-deployment) - Step-by-step Akash deployment guide

## Installation

::: code-group

```bash [CLI]
npm install -g @alternatefutures/cli
af login
```

```bash [SDK]
npm install @alternatefutures/sdk
```

:::

## Example Usage

::: code-group

```bash [CLI]
# Deploy a site to IPFS
af sites deploy --dir ./dist --network ipfs

# Create an AI agent
af agents create --name "Crypto Guru" --type eliza
```

```typescript [SDK]
import { AlternateFutures } from '@alternatefutures/sdk';

const af = new AlternateFutures({ apiKey: process.env.AF_API_KEY });

// Deploy a site
const deployment = await af.sites.deploy({
  name: 'My Site',
  network: 'ipfs',
  directory: './dist'
});

// Create an agent
const agent = await af.agents.create({
  name: 'Crypto Guru',
  type: 'eliza'
});
```

:::
