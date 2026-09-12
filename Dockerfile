# ---- builder ----
FROM oven/bun:1.3-alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# ---- runtime ----
FROM oven/bun:1.3-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server/server.ts ./server/server.ts
RUN addgroup -S app && adduser -S app -G app
USER app
EXPOSE 3100
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:3100/healthz || exit 1
CMD ["bun", "run", "server/server.ts"]
