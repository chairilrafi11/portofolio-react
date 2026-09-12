import { useEffect } from "react"

export function useDocumentMeta(opts: {
  title: string
  description: string
  canonical: string
  ogType?: string
}) {
  const { title, description, canonical, ogType = "website" } = opts

  useEffect(() => {
    document.title = title
    const setMeta = (name: string, content: string) => {
      const el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (el) el.content = content
    }
    setMeta("description", description)

    const setProp = (prop: string, content: string) => {
      const el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null
      if (el) el.content = content
    }
    setProp("og:title", title)
    setProp("og:description", description)
    setProp("og:url", canonical)
    setProp("og:type", ogType)
    setProp("twitter:title", title)
    setProp("twitter:description", description)

    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonicalEl) canonicalEl.href = canonical
  }, [title, description, canonical, ogType])
}
