# MCP Server Configuration

## Overview

This project has the Model Context Protocol (MCP) server enabled to provide enhanced development tools for AI coding agents like Claude and Cursor.

## Configuration Files

### `.mcp.json`

The `.mcp.json` file in the project root configures the MCP servers:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    },
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

### `next.config.ts`

The Next.js configuration has the experimental MCP server feature enabled:

```typescript
const nextConfig: NextConfig = {
  experimental: {
    mcpServer: true,
  },
  // ... other config
};
```

## MCP Servers

### next-devtools-mcp

The `next-devtools-mcp@latest` package provides Next.js development tools and utilities for coding agents.

**Features:**
- Next.js-specific development tools
- Integration with AI coding agents
- Enhanced development workflow capabilities

**Package:** [next-devtools-mcp](https://www.npmjs.com/package/next-devtools-mcp)

### chrome-devtools-mcp

The `chrome-devtools-mcp@latest` package provides Chrome DevTools integration for MCP clients.

**Features:**
- Browser automation capabilities
- Chrome DevTools Protocol access
- Enhanced debugging tools

**Package:** [chrome-devtools-mcp](https://www.npmjs.com/package/chrome-devtools-mcp)

## Requirements

- Node.js v20.19 or newer (latest LTS recommended)
- npm or pnpm

## Usage

When using AI coding agents that support MCP (like Claude or Cursor), these tools will automatically be available once configured. The servers are invoked via `npx` with the `@latest` tag to ensure you always use the most recent version.

## Troubleshooting

### MCP Server Not Starting

If the MCP server doesn't start:

1. Ensure you're using Node.js v20.19 or newer:
   ```bash
   node --version
   ```

2. Verify the `.mcp.json` file is valid JSON:
   ```bash
   cat .mcp.json | python3 -m json.tool
   ```

3. Check that the `experimental.mcpServer` flag is enabled in `next.config.ts`

### Development Server Issues

If the development server has issues:

1. Clear the Next.js cache:
   ```bash
   rm -rf .next
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

## References

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [next-devtools-mcp Documentation](https://github.com/vercel/next-devtools-mcp)
- [Next.js Experimental Features](https://nextjs.org/docs/app/api-reference/config/next-config-js)
