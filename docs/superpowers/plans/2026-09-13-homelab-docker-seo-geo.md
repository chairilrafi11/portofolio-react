# Homelab Docker + SEO/GEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Self-host the portfolio on `https://chairil.net` via Docker on the
homelab (bun-native install/build, GitHub Actions CI → GHCR), with build-time
prerendering so SEO crawlers and AI engines see real content without JavaScript.

**Architecture:** Multi-stage Docker image (`oven/bun:1.3-alpine`) — builder
installs deps and runs `vite build` + prerender, runtime serves `dist/` with
`Bun.serve`. GitHub Actions pushes the image to GHCR; homelab pulls and runs
it via Docker Compose on port 3100, bound to localhost behind a reverse proxy
and Cloudflare Tunnel.

**Tech Stack:** React 19, Vite 8, TypeScript, Tailwind CSS v4, `motion`
react, Bun 1.3, Docker, GitHub Actions, ghcr.io.

---

## File Structure

| File | Responsibility |
| --- | --- |
| `Dockerfile` | Multi-stage build + runtime |
| `.dockerignore` | Exclude non-essentials from image context |
| `compose.yaml` | Homelab service (pull image, port 3100) |
| `server/server.ts` | `Bun.serve` static server, SPA fallback, healthz |
| `.github/workflows/docker-publish.yml` | CI build & push to GHCR |
| `scripts/prerender.ts` | Render `/` and `/projects` to static HTML via Vite SSR |
| `src/lib/useDocumentMeta.ts` | Per-route document head updates (no dep) |
| `public/robots.txt` | Crawler rules incl. AI bots + sitemap ref |
| `public/sitemap.xml` | `/` and `/projects` URLs |
| `public/site.webmanifest` | App icons/theme metadata |
| `public/og-image.png` | 1200×630 social preview |
| `index.html` | Canonical, OG/Twitter, JSON-LD Person/WebSite, theme-color |
| `src/main.tsx` | `hydrateRoot` when prerendered |
| `package.json` | Scripts: `build` = vite build + prerender |
| `README.md` | Update pnpm → bun, document deploy |

---

## Task 1: Bootstrap bun package.json & static assets

**Files:**
- Modify: `package.json`
- Create: `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`

- [ ] **Update `package.json` scripts** — set `"build": "vite build && bun run scripts/prerender.ts"`, ensure typecheck/lint scripts unchanged.

- [ ] **Create `public/robots.txt`** with:
```
User-agent: *
Allow: /
Sitemap: https://chairil.net/sitemap.xml

User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Bytespider
Allow: /
```

- [ ] **Create `public/sitemap.xml`**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://chairil.net/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://chairil.net/projects</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
</urlset>
```

- [ ] **Create `public/site.webmanifest`** with name `Chairil Rafi Purnama`, short_name `Chairil`, start_url `/`, display `standalone`, background_color `#0a0a0a`, theme_color `#0a0a0a`, icons referencing existing `/favicon.svg`.

- [ ] **Commit.**

---

## Task 2: OG image & index.html metadata

**Files:**
- Create: `public/og-image.png`
- Modify: `index.html`

- [ ] **Generate `public/og-image.png`** 1200×630 from the existing portrait:
```bash
sips -z 1200 630 src/assets/chairil.jpg --out public/og-image.png
```
(If `sips` produces an odd crop, adjust with `-crop` to center. Confirm the file exists and is ~100-300KB.)

- [ ] **Rewrite `index.html`** with full metadata:
```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Chairil Rafi Purnama — Senior Full Stack Developer. Building software that holds up in production." />
    <meta name="theme-color" content="#0a0a0a" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://chairil.net/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Material+Symbols+Outlined&display=swap" rel="stylesheet" />
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://chairil.net/" />
    <meta property="og:title" content="Chairil Rafi Purnama | Senior Full Stack Developer" />
    <meta property="og:description" content="Building software that holds up in production." />
    <meta property="og:image" content="https://chairil.net/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Chairil Rafi Purnama" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://chairil.net/" />
    <meta name="twitter:title" content="Chairil Rafi Purnama | Senior Full Stack Developer" />
    <meta name="twitter:description" content="Building software that holds up in production." />
    <meta name="twitter:image" content="https://chairil.net/og-image.png" />
    <!-- JSON-LD Person + WebSite -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Chairil Rafi Purnama",
      "jobTitle": "Senior Full Stack Developer",
      "url": "https://chairil.net",
      "image": "https://chairil.net/favicon.svg",
      "sameAs": [
        "https://github.com/chairilrafi11",
        "https://linkedin.com/in/chairilrafi"
      ],
      "knowsAbout": ["Full Stack Development", "React", "Next.js", "Golang", "Laravel", "Python", "PostgreSQL", "Flutter", "Docker"],
      "worksFor": { "@type": "Organization", "name": "PT. Balimmo Development Group" },
      "alumniOf": { "@type": "EducationalOrganization", "name": "Universitas..." }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Chairil Rafi Purnama",
      "url": "https://chairil.net",
      "potentialAction": { "@type": "SearchAction", "target": "https://chairil.net?q={search_term_string}", "query-input": "required name=search_term_string" }
    }
    </script>
    <title>Chairil Rafi Purnama | Senior Full Stack Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

(Replace placeholder LinkedIn/GitHub URLs and alumni org with the real values once confirmed; leave sensible placeholders otherwise.)

- [ ] **Commit.**

---

## Task 3: Per-route meta hook

**Files:**
- Create: `src/lib/useDocumentMeta.ts`
- Modify: `src/App.tsx`
- Modify: `src/pages/ProjectsPage.tsx`

- [ ] **Create `src/lib/useDocumentMeta.ts`** — a zero-dependency hook that
sets `document.title`, `document.querySelector('[name="description"]')`
content, `document.querySelector('[rel="canonical"]')` href, and the OG/Twitter
`content` attributes based on passed props:
```ts
export function useDocumentMeta(opts: {
  title: string
  description: string
  canonical: string
  ogType?: string
}) {
  // useEffect to sync document head
}
```

- [ ] **Update `src/App.tsx`** — call `useDocumentMeta` in `App()` with the
home route values (`title: "Chairil Rafi Purnama | Senior Full Stack Developer"`, `description: "..."`, `canonical: "https://chairil.net/"`).

- [ ] **Update `src/pages/ProjectsPage.tsx`** — call `useDocumentMeta` with
`title: "Projects | Chairil Rafi Purnama"`, `description: "..."`,
`canonical: "https://chairil.net/projects"`.

- [ ] **Run `bun run typecheck` and `bun run lint` — confirm pass.**

- [ ] **Commit.**

---

## Task 4: Static server (`server/server.ts`)

**Files:**
- Create: `server/server.ts`

- [ ] **Create `server/server.ts`** implementing `Bun.serve`:
```ts
import { existsSync } from "node:fs"
import { join } from "node:path"

const PORT = Number(process.env.PORT ?? 3100)
const DIST = join(process.cwd(), "dist")
const ASSET_RE = /^\/assets\/.*\.[a-f0-9]+\.(js|css|png|jpg|jpeg|svg|woff2?|ico)$/

function contentTypeFor(path: string): string {
  if (path.endsWith(".css")) return "text/css"
  if (path.endsWith(".js")) return "application/javascript"
  if (path.endsWith(".json")) return "application/json"
  if (path.endsWith(".png")) return "image/png"
  if (path.endsWith(".svg")) return "image/svg+xml"
  if (path.endsWith(".ico")) return "image/x-icon"
  return "text/html"
}

const server = Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  fetch(req) {
    const pathname = new URL(req.url).pathname
    if (pathname === "/healthz") return new Response("ok", { status: 200 })
    const fsPath = join(DIST, pathname === "/" ? "index.html" : pathname)
    if (existsSync(fsPath)) {
      const isAsset = ASSET_RE.test(pathname)
      return new Response(await Bun.file(fsPath).arrayBuffer(), {
        headers: { "Content-Type": contentTypeFor(fsPath), ...(isAsset ? { "Cache-Control": "public, max-age=31536000, immutable" } : { "Cache-Control": "no-cache" }) }
      })
    }
    const index = join(DIST, "index.html")
    if (existsSync(index)) {
      return new Response(await Bun.file(index).arrayBuffer(), { headers: { "Content-Type": "text/html", "Cache-Control": "no-cache" } })
    }
    return new Response("Not found", { status: 404 })
  },
  development: false,
})
console.log(`Serving ${DIST} on ${server.hostname}:${server.port}`)
```

- [ ] **Test locally:**
```bash
bun install --frozen-lockfile && bun run build
bun run server/server.ts &
curl -s localhost:3100/ | grep -o "BUILDING SOFTWARE THAT HOLDS UP"
curl -s localhost:3100/projects | grep -o "ALL PROJECTS"
curl -sI localhost:3100/healthz | head -1
curl -sI localhost:3100/assets/*.js | grep -i "cache-control"
```
(Use `timeout`/`kill` for the background process.)

- [ ] **Run `bun run typecheck` and `bun run lint` — confirm pass.**

- [ ] **Commit.**

---

## Task 5: Prerender script (`scripts/prerender.ts`)

**Files:**
- Create: `scripts/prerender.ts`

- [ ] **Create `scripts/prerender.ts`** that:
  1. Reads `dist/index.html` into a string template.
  2. Creates a Vite server in middleware mode via `createServer(...)` (import from `vite`, already a dependency).
  3. Uses `server.ssrLoadModule("/src/App.tsx")` and `server.ssrLoadModule("/src/pages/ProjectsPage.tsx")`.
  4. Uses `renderToString` from `react-dom/server` and `StaticRouter` from `react-router-dom` to render each route.
  5. For each rendered route, replaces `<div id="root"></div>` in the template with the rendered markup, and injects `CollectionPage` + `ItemList` JSON-LD for `/projects`.
  6. Writes `dist/index.html` and `dist/projects/index.html`.
  7. Closes the Vite server and exits with non-zero code on error.

The JSON-LD for `/projects` should build an `ItemList` of projects from `src/data/projects.ts` with `name`, `description`, `image` (full URL), `url`.

```ts
// skeleton
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { projects } from "../src/data/projects.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, "..", "dist")
const BASE = "https://chairil.net"

async function main() {
  const template = readFileSync(join(DIST, "index.html"), "utf-8")
  const vite = await createServer({ server: { middlewareMode: true } })
  const App = await vite.ssrLoadModule("/src/App.tsx")
  const ProjectsPage = await vite.ssrLoadModule("/src/pages/ProjectsPage.tsx")

  // build ItemList JSON-LD
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, description: p.description, image: BASE + p.image, url: BASE + "/projects" })) }

  const routes = [
    { path: "/", component: App.default, jsonld: undefined },
    { path: "/projects", component: ProjectsPage.default, jsonld: itemList },
  ]

  for (const route of routes) {
    const html = renderToString(() =>
      <StaticRouter location={route.path}>
        <route.component />
      </StaticRouter>
    )
    const jsonld = route.jsonld ? `<script type="application/ld+json">${JSON.stringify(route.jsonld)}</script>` : ""
    const out = template
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace("</head>", `${jsonld}</head>`)
    const outPath = route.path === "/" ? join(DIST, "index.html") : join(DIST, route.path.slice(1), "index.html")
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, out)
  }

  await vite.close()
}
main().catch((e) => { console.error(e); process.exit(1) })
```

(Note: imports from `.tsx` paths and JSX transform are handled by Vite's SSR pipeline; `tsconfig` paths resolve. If `renderToString`/`StaticRouter` import style differs from the installed `react-dom`/`react-router-dom` version, adjust to the actual API — check the installed packages.)

- [ ] **Run `bun run build` — confirm dist/index.html and dist/projects/index.html contain rendered text.**
```bash
bun run build
grep -o "Chairil Rafi" dist/index.html | head -1
grep -o "ALL PROJECTS" dist/projects/index.html | head -1
```

- [ ] **Commit.**

---

## Task 6: Hydration in `main.tsx`

**Files:**
- Modify: `src/main.tsx`

- [ ] **Update `src/main.tsx`** to hydrate when prerendered markup exists:
```ts
import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import ProjectsPage from "./pages/ProjectsPage"
import ScrollToTop from "./components/ScrollToTop"

const rootEl = document.getElementById("root")
if (!rootEl) throw new Error("Root element #root not found")

const router = (
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, router)
} else {
  createRoot(rootEl).render(router)
}
```

- [ ] **Run `bun run typecheck` and `bun run lint` — confirm pass.**

- [ ] **Commit.**

---

## Task 7: Dockerfile & Docker Compose

**Files:**
- Create: `Dockerfile`
- Create: `compose.yaml`
- Create: `.dockerignore`

- [ ] **Create `.dockerignore`:**
```
node_modules
dist
.git
.gitignore
*.md
.github
docs
.env
```

- [ ] **Create `Dockerfile`:**
```dockerfile
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
```

- [ ] **Create `compose.yaml`:**
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

- [ ] **Build & test locally:**
```bash
docker build -t portofolio-test .
docker run --rm -p 3100:3100 portofolio-test
curl -s localhost:3100/ | grep -o "Chairil Rafi"
curl -s localhost:3100/projects | grep -o "ALL PROJECTS"
curl -s localhost:3100/healthz
```

- [ ] **Commit.**

---

## Task 8: GitHub Actions CI & README update

**Files:**
- Create: `.github/workflows/docker-publish.yml`
- Modify: `README.md`

- [ ] **Create `.github/workflows/docker-publish.yml`:**
```yaml
name: Publish Docker image
on:
  push:
    branches: [main]
    tags: ["v*"]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Log in to GHCR
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Docker meta
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=sha,prefix=
            type=raw,value=latest
      - name: Build and push
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

- [ ] **Update `README.md`:** replace `pnpm` references with `bun`, add deploy notes (Docker image at `ghcr.io/chairilrafi11/portofolio-react`, compose on port 3100), remove the `pnpm` code block example. Keep existing structure.

- [ ] **Commit.**

---

## Task 9: End-to-end verification

- [ ] **Run the full pipeline locally:**
```bash
bun install --frozen-lockfile
bun run typecheck
bun run lint
bun run build
docker build -t portofolio-final .
docker run --rm -p 3100:3100 portofolio-final
```
Verify:
- `curl -s localhost:3100/ | grep -o '<script type="application/ld+json"'` returns JSON-LD
- `grep -o "Chairil Rafi" dist/index.html` returns content in prerendered HTML
- `grep -o "ALL PROJECTS" dist/projects/index.html` returns content
- `curl -s localhost:3100/unknown-path` returns the SPA shell (fallback)
- `curl -sI localhost:3100/assets/*.js | grep "immutable"` confirms caching
- Container exits cleanly on `--rm` (no dangling)

- [ ] **Commit final state.**

---

## Self-Review Checklist (against spec)

| Spec requirement | Implemented in |
| --- | --- |
| Docker multi-stage bun builder | Task 7 (Dockerfile) |
| Bun native runtime serve | Task 4 (server.ts) + Task 7 |
| Port 3100 | Task 4 (`PORT`), Task 7 (`EXPOSE 3100`, compose `3100:3100`) |
| GitHub Actions → GHCR | Task 8 (docker-publish.yml) |
| Homelab compose pulls image | Task 7 (compose.yaml) |
| `robots.txt` allow AI bots | Task 1 |
| `sitemap.xml` | Task 1 |
| OG/Twitter/canonical/meta | Task 2 (index.html) |
| JSON-LD Person + WebSite | Task 2 (index.html) |
| OG image 1200×630 | Task 2 |
| Prerender `/` and `/projects` | Task 5 (prerender.ts) |
| Hydrate when prerendered | Task 6 (main.tsx) |
| Per-route meta hook | Task 3 (useDocumentMeta.ts) |
| Healthcheck | Task 4 (server.ts) + Task 7 (compose) |
| Cache headers (assets immutable, HTML no-cache) | Task 4 (server.ts) |
| SPA fallback (`/unknown` → index) | Task 4 (server.ts) |
| No new runtime dependency | Task 3, 4, 5 (zero deps) |
