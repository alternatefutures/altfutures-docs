# GitHub Actions Workflows

This directory contains automated workflows for the Alternate Futures documentation repository.

## Workflows

### 1. Deploy Documentation (`deploy.yml`)
Automatically builds and deploys the VitePress documentation to GitHub Pages when changes are pushed to the `main` branch.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch
- Repository dispatch events from CLI/SDK repos

**Requirements:**
- `GH_PAT` secret for accessing private CLI/SDK repositories

---

### 2. Claude Code Review (`claude-code-review.yml`)
Automatically reviews pull requests using Claude AI (Sonnet 4.5) and posts constructive feedback as PR comments.

**Triggers:**
- Pull request opened
- Pull request synchronized (new commits)
- Pull request reopened

**Features:**
- Analyzes code changes in the PR
- Reviews for code quality, bugs, security, and performance
- Posts detailed feedback as PR comments
- Provides actionable suggestions

**Setup Required:**

1. **Get an Anthropic API Key:**
   - Visit [Anthropic Console](https://console.anthropic.com/)
   - Create an account or sign in
   - Navigate to API Keys
   - Generate a new API key

2. **Add the API key to GitHub Secrets:**
   - Go to your repository on GitHub
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
   - Click "Add secret"

3. **Usage:**
   - The workflow runs automatically on all pull requests
   - Claude will analyze the changes and post a review comment
   - Reviews typically include:
     - Code quality assessment
     - Potential bugs or issues
     - Security concerns
     - Performance considerations
     - Documentation suggestions
     - Improvement recommendations

**Cost Considerations:**
- The workflow uses Claude Sonnet 4.5
- Each review costs approximately $0.03-0.15 depending on PR size
- Monitor your Anthropic API usage in the console

**Customization:**
You can modify the review criteria by editing the prompt in the workflow file at line 52-65.

---

## Maintenance

All workflows use the latest stable versions of actions. Dependabot is configured to keep these dependencies up to date.
