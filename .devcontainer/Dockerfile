# Base: official Node.js 22 LTS on Debian Bookworm slim
# Matches the Node version required by Claude Code and Vite
FROM node:22-bookworm-slim

# Avoid interactive prompts during apt installs
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies as root
RUN apt-get update && apt-get install -y \
    git \
    curl \
    ca-certificates \
    bash \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code globally as root
RUN npm install -g @anthropic-ai/claude-code

# Give the node user ownership of global node_modules so it can
# update packages later without EACCES errors
RUN chown -R node:node /usr/local/lib/node_modules

# Set working directory — VS Code mounts your WSL repo here
WORKDIR /workspace

# Switch to non-root user (built into the node base image)
USER node

# Confirm tools are available (|| true so build doesn't fail on claude auth check)
RUN node --version && npm --version && claude --version || true