import { existsSync, statSync } from "node:fs"
import { join } from "node:path"

const PORT = Number(process.env.PORT ?? 3100)
const DIST = join(process.cwd(), "dist")
const ASSET_RE = /^\/assets\/.*\.(js|css|png|jpg|jpeg|svg|woff2?|ico)$/

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
  fetch: async (req) => {
    const pathname = new URL(req.url).pathname
    if (pathname === "/healthz") return new Response("ok", { status: 200 })
    const fsPath = join(DIST, pathname === "/" ? "index.html" : pathname)
    function isFile(p: string) {
      try { return statSync(p).isFile() } catch { return false }
    }
    const resolved = isFile(fsPath) ? fsPath : isFile(join(fsPath, "index.html")) ? join(fsPath, "index.html") : null
    if (resolved) {
      const isAsset = ASSET_RE.test(pathname)
      return new Response(await Bun.file(resolved).arrayBuffer(), {
        headers: {
          "Content-Type": contentTypeFor(resolved),
          ...(isAsset
            ? { "Cache-Control": "public, max-age=31536000, immutable" }
            : { "Cache-Control": "no-cache" }),
        },
      })
    }
    const index = join(DIST, "index.html")
    if (existsSync(index)) {
      return new Response(await Bun.file(index).arrayBuffer(), {
        headers: { "Content-Type": "text/html", "Cache-Control": "no-cache" },
      })
    }
    return new Response("Not found", { status: 404 })
  },
  development: false,
})
console.log(`Serving ${DIST} on ${server.hostname}:${server.port}`)
