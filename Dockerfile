# Use the official Bun image
# See all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1.20
WORKDIR /app

# Install curl
USER root
RUN apt-get update && apt-get install -y curl

# Install dependencies
COPY package.json bun.lockb /app/
RUN bun install

# Copy the rest of the app
COPY . .

# Build the app
ENV NODE_ENV=production
RUN bun run generate

# Serve the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bunx", "serve", ".output/public" ]
