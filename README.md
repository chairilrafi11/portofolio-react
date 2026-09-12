# Chairil Rafi Purnama — Portfolio

Personal portfolio website for **Chairil Rafi Purnama**, Senior Full Stack Developer.

Built as a lightweight **React + Vite** project with **TypeScript** and **Tailwind CSS v4**, implementing the "Portfolio Home (V3)" screen from Stitch.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/postcss`)
- [Oxlint](https://oxc.rs/) for linting
- [Bun](https://bun.sh/) as package manager

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun dev

# Typecheck
bun typecheck

# Lint
bun lint

# Production build (includes prerender for SEO/GEO)
bun build

# Preview production build
bun preview
```

## Docker / Deploy

This project is packaged with Docker and deployed via GitHub Actions → GHCR → homelab.

### Local Docker

```bash
docker build -t portofolio .
docker run -p 3100:3100 portofolio
```

The app is served by a lightweight Bun server on port `3100` with SPA fallback.

### Homelab (compose)

```yaml
services:
  portfolio:
    image: ghcr.io/chairilrafi11/portofolio-react:latest
    ports:
      - "127.0.0.1:3100:3100"
    environment:
      - PORT=3100
    restart: unless-stopped
```

Point your reverse proxy (or Cloudflare Tunnel) at `127.0.0.1:3100`.

## Project Structure

```
src/
├── assets/          # Local images (portrait, project screenshots)
├── components/      # Section components (Hero, SelectedWork, etc.)
├── App.tsx          # Root component assembling all sections
├── index.css        # Tailwind import + design tokens
├── main.tsx         # React entry point
└── vite-env.d.ts    # Vite client type references
```

## Design System

The design tokens (colors, typography, spacing) are defined in `src/index.css` via Tailwind CSS v4's `@theme` directive, matching the original Stitch design — a dark, editorial, architectural-minimalist aesthetic with IBM Plex Sans.
