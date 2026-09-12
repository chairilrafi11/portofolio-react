# Homelab Deployment + SEO/GEO — Design

**Date:** 2026-09-12
**Status:** Approved (pending written spec review)

## Goal

Move the portfolio off Netlify and self-host it on the homelab at the root
domain `https://chairil.net`, using **bun native** for install/build, Docker for
packaging, and GitHub Actions for CI. At the same time, add real SEO and GEO
(Generative Engine Optimization) without a framework rewrite.

## Current State

- React 19 + Vite 8 SPA, TypeScript, Tailwind CSS v4, `motion` for animation.
- Client-side routing via `react-router-dom` (`/`, `/projects`, `*` fallback).
- Fully client-rendered: raw HTML is only `<div id="root"></div>`.
- Deployed on Netlify (`netlify.toml`, publish `dist`, SPA redirect).
- `bun` 1.3.1, Docker 29, Docker Compose v5 available.
- Repo remote: `github.com:chairilrafi11/portofolio-react` (public).
- Both `bun.lock` and `pnpm-lock.yaml` exist; README references pnpm.

## Key Constraint & Consequence

AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) generally do **not** execute
JavaScript. A pure CSR SPA therefore exposes no content to them, which defeats
GEO. Google/Bing can render JS, but LLM-based engines cannot.

=> Minimum viable GEO requires **build-time prerendering of HTML content**, not
just meta tags.

## Approach (chosen): Meta + Prerender 2 Routes

Keep the SPA and existing component structure untouched. Add:
1. Complete static metadata in `index.html`.
2. A build-time prerender step that emits fully-populated HTML for `/` and
   `/projects`.
3. Hydration on the client so runtime behavior stays identical.
4. Docker packaging + GitHub Actions CI + homelab compose.

Rejected alternatives:
- **Meta-only:** zero risk but GEO stays ineffective.
- **SSR framework migration (Next.js / React Router v7):** large rewrite,
  contradicts the "minimal change" requirement.

## Architecture

### Deployment pipeline

```
GitHub push (main / tag)
  -> GitHub Actions: buildx build Dockerfile
  -> push image to ghcr.io/chairilrafi11/portofolio-react
  -> homelab: docker compose pull && up -d
  -> Cloudflare Tunnel -> reverse proxy -> container 127.0.0.1:3100
  -> https://chairil.net
```

- **CI:** GitHub Actions, not GitLab.
- **Registry:** GHCR, public image.
- **Homelab role:** "terima beres" — only pulls and runs the image.
- **Port:** container listens on **3100**, bound to `127.0.0.1` by compose so only
  the local reverse proxy / Cloudflare Tunnel can reach it.

### Files added / changed

| File | Purpose |
| --- | --- |
| `Dockerfile` | Multi-stage, `oven/bun:1.3-alpine` builder + runtime |
| `.dockerignore` | Exclude `node_modules`, `dist`, `.git`, docs |
| `compose.yaml` | Homelab service definition (pull image, port 3100, healthcheck) |
| `server/server.ts` | `Bun.serve` static server + SPA fallback + cache/security headers |
| `.github/workflows/docker-publish.yml` | Build & push image to GHCR |
| `scripts/prerender.ts` | Render `/` and `/projects` to static HTML in `dist/` |
| `src/lib/useDocumentMeta.ts` | No-dependency per-route title/description/canonical |
| `public/robots.txt` | Allow AI crawlers explicitly, reference sitemap |
| `public/sitemap.xml` | `/` and `/projects` |
| `public/site.webmanifest` | PWA/icon metadata |
| `public/og-image.png` | 1200x630 social preview |
| `index.html` | Canonical, OG/Twitter, JSON-LD Person/WebSite, theme-color |
| `src/main.tsx` | `hydrateRoot` when prerendered, else `createRoot` |
| `package.json` | Build script runs prerender (`vite build && bun run scripts/prerender.ts`); bun is the package manager |
| `README.md` | Update pnpm -> bun, document deploy |

Netlify leftovers (`netlify.toml`, `pnpm-lock.yaml`) are left in place but may be
removed later; they are not part of the deploy path.

### Dockerfile

- **builder** stage: copy manifests -> `bun install --frozen-lockfile` -> copy
  source -> `bun run build` (Vite build + prerender) -> `dist/`.
- **runtime** stage: `oven/bun:1.3-alpine`, copy `dist/` + `server/server.ts`,
  run as a non-root user, `EXPOSE 3100`, `HEALTHCHECK` hitting a `/healthz`
  route.
- Deterministic installs via `bun.lock`.

### Static server (`server/server.ts`)

- `Bun.serve` on `PORT` (default 3100), host `0.0.0.0`.
- Serves `dist/` with pretty URLs: `/projects` -> `dist/projects/index.html`.
- SPA fallback: unknown non-asset paths return `dist/index.html` with 200.
- `GET /healthz` -> 200 `ok`.
- Cache headers: hashed `assets/*` immutable 1 year; HTML `no-cache`.
- Security headers: `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`.
- Correct MIME types; compression handled by the reverse proxy (Cloudflare).

### compose.yaml (homelab)

```yaml
services:
  portfolio:
    image: ghcr.io/chairilrafi11/portofolio-react:latest
    container_name: portfolio
    restart: unless-stopped
    ports:
      - "127.0.0.1:3100:3100"
    environment:
      - PORT=3100
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://127.0.0.1:3100/healthz"]
      interval: 30s
      timeout: 5s
      retries: 3
```

### SEO

- `index.html`: `<link rel="canonical" href="https://chairil.net/">`, Open Graph
  (`og:type`, `og:title`, `og:description`, `og:url`, `og:image` 1200x630,
  `og:site_name`), Twitter `summary_large_image`, `theme-color`, `robots`.
- `src/lib/useDocumentMeta.ts`: tiny hook used on each route to set document
  title, meta description, and canonical. No new dependency.
  - `/` -> "Chairil Rafi Purnama | Senior Full Stack Developer"
  - `/projects` -> "Projects | Chairil Rafi Purnama"
- `public/robots.txt` + `public/sitemap.xml` + `site.webmanifest`.

### GEO

- Static JSON-LD in `index.html`: `Person` (name, jobTitle, url, image,
  `sameAs` LinkedIn/GitHub, `knowsAbout`, `worksFor`, `alumniOf`) and `WebSite`.
- `CollectionPage` + `ItemList` JSON-LD for the project list, injected during
  prerender of `/projects` from `src/data/projects.ts`.
- `robots.txt` explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`,
  `Google-Extended`, `CCBot`, `anthropic-ai`, `Bytespider`.
- Prerender guarantees bio, experience, education and project catalog exist in
  the raw HTML.

### Prerender & Hydration

- `scripts/prerender.ts`:
  - runs after `vite build`, started by bun.
  - creates a Vite dev server in middleware mode via `createServer()` from the
    already-installed `vite`, then loads `App` / `ProjectsPage` through
    `server.ssrLoadModule`. This is required because those modules import `.png`
    assets and CSS, which a bare bun runtime cannot resolve. No new dependency.
  - renders each route with `renderToString` + `StaticRouter`.
  - reads the built `dist/index.html` as the template and injects the rendered
    markup into `<div id="root">`, preserving Vite's hashed `<script>`/`<link>`
    tags.
  - writes `dist/index.html` and `dist/projects/index.html` (creating the
    `dist/projects/` directory).
  - injects the `CollectionPage` / `ItemList` JSON-LD into the `/projects`
    output only.
  - closes the Vite server on completion and exits non-zero on error.
- `src/main.tsx`: use `hydrateRoot` when `#root` has child nodes, else
  `createRoot`. Root element lookup guarded for the Node prerender environment.
- Known tradeoff: `motion` initial `opacity:0` states may cause hydration
  warnings. Content is still present in the prerendered HTML, so SEO/GEO is
  unaffected and runtime visuals are unchanged.

## Testing / Verification

1. `bun install --frozen-lockfile` then `bun run build` succeeds.
2. `bun run typecheck` and `bun run lint` pass.
3. Inspect `dist/index.html` and `dist/projects/index.html`: contain rendered
   text and JSON-LD (verify with grep, not just a browser).
4. `docker build` succeeds; `docker run -p 3100:3100` serves the site.
5. `curl -s localhost:3100/ | grep -i "BUILDING SOFTWARE"` returns content.
6. `curl -sI localhost:3100/assets/<hash>.js` shows immutable cache header.
7. `/nonexistent` returns the SPA shell (fallback), `/healthz` returns `ok`.
8. `robots.txt`, `sitemap.xml`, `og-image.png` reachable at expected URLs.

## Out of Scope

- Migrating to an SSR framework.
- Replacing Netlify config or deleting `pnpm-lock.yaml` (optional cleanup).
- CMS/blog, analytics, multilingual, search-console submission.
- TLS/Cloudflare Tunnel configuration on the homelab side (assumed existing).
