# --- build ---
    FROM node:20-bookworm-slim AS builder
    WORKDIR /app
    ENV NODE_ENV=production
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    
    # --- run ---
    FROM node:20-bookworm-slim AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    COPY --from=builder /app/package*.json ./
    RUN npm ci --omit=dev
    COPY --from=builder /app/. /app/
    ENV HOST=0.0.0.0
    ENV PORT=1337
    EXPOSE 1337
    CMD ["npm","run","start"]
    