import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { renderToString } from "react-dom/server"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import App from "../src/App.tsx"
import ProjectsPage from "../src/pages/ProjectsPage.tsx"
import { projects } from "../src/data/projects.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const DIST = join(ROOT, "dist")
const BASE = "https://chairil.net"

const routes = [
  { path: "/", element: <App /> },
  { path: "/projects", element: <ProjectsPage /> },
]

function buildJsonld() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: p.description,
      image: BASE + p.image,
      url: BASE + "/projects",
    })),
  }
  return `<script type="application/ld+json">${JSON.stringify(itemList)}</script>`
}

function buildAssetRewriteMap(): Record<string, string> {
  const manifest = JSON.parse(
    readFileSync(join(DIST, ".vite", "manifest.json"), "utf-8")
  ) as Record<
    string,
    { file: string; src?: string; assets?: string[] }
  >
  const map: Record<string, string> = {}
  for (const [, entry] of Object.entries(manifest)) {
    if (entry.src) {
      map[join(ROOT, entry.src)] = "/" + entry.file
    }
  }
  return map
}

function rewriteAssets(html: string, map: Record<string, string>): string {
  let out = html
  for (const [src, dist] of Object.entries(map)) {
    out = out.split(src).join(dist)
  }
  return out
}

async function main() {
  const template = readFileSync(join(DIST, "index.html"), "utf-8")
  const assetMap = buildAssetRewriteMap()

  const pages = [
    { entry: "/", jsonld: undefined },
    { entry: "/projects", jsonld: buildJsonld() },
  ]

  for (const page of pages) {
    const router = createMemoryRouter(routes, { initialEntries: [page.entry] })
    let html = renderToString(<RouterProvider router={router} />)
    html = rewriteAssets(html, assetMap)
    const out = template
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace("</head>", `${page.jsonld ?? ""}</head>`)
    const outPath =
      page.entry === "/"
        ? join(DIST, "index.html")
        : join(DIST, page.entry.slice(1), "index.html")
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, out)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
