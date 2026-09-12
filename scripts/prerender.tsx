import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { renderToString } from "react-dom/server"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import App from "../src/App.tsx"
import ProjectsPage from "../src/pages/ProjectsPage.tsx"
import { projects } from "../src/data/projects.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, "..", "dist")
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

async function main() {
  const template = readFileSync(join(DIST, "index.html"), "utf-8")

  const pages = [
    { entry: "/", jsonld: undefined },
    { entry: "/projects", jsonld: buildJsonld() },
  ]

  for (const page of pages) {
    const router = createMemoryRouter(routes, { initialEntries: [page.entry] })
    const html = renderToString(<RouterProvider router={router} />)
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
