# CLI Documentation

The Alternate Futures CLI provides a powerful command-line interface for managing your agents, sites, and deployments.

## Installation

Install the CLI globally using npm or pnpm:

```bash
npm install -g @alternatefutures/cli
```

Or with pnpm:

```bash
pnpm add -g @alternatefutures/cli
```

## Quick Start

```bash
# Login to your account
af login

# Deploy a site
af sites deploy --dir ./dist --network ipfs

# Create an agent
af agents create --name "My Agent" --type eliza

# View your storage
af storage usage
```

## Documentation

- [Installation Guide](./installation) - Detailed installation instructions
- [Commands Reference](./commands) - Complete command reference (auto-generated)

## Getting Help

```bash
# Get help for any command
af --help
af agents --help
af sites deploy --help
```

## Requirements

- Node.js 18.0.0 or higher
- npm or pnpm

## Environment Variables

For CI/CD and automated workflows:

- `AF_TOKEN` - Personal access token for authentication
- `AF_PROJECT_ID` - Project ID to use for commands
- `AF_API_KEY` - Alternative to AF_TOKEN (deprecated, use AF_TOKEN)
- `AF_BASE_URL` - Override API endpoint (for testing)

**Note:** As of CLI v0.2.0, `AF_TOKEN` and `AF_PROJECT_ID` are the recommended environment variables. The legacy `FLEEK_TOKEN` and `FLEEK_PROJECT_ID` variables are deprecated.
