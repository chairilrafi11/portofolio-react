interface MoreWorkItem {
  title: string
  description: string
  tech: string
}

const items: MoreWorkItem[] = [
  {
    title: "Open Source CLI Tool",
    description: "A utility for automating Docker deployments, 500+ stars on GitHub.",
    tech: "Go / Bash",
  },
  {
    title: "E-commerce Dashboard",
    description: "Real-time analytics dashboard for small merchants.",
    tech: "Vue / Firebase",
  },
  {
    title: "Personal Blog Engine",
    description: "Minimalist markdown-based blog engine with high SEO performance.",
    tech: "Next.js",
  },
]

function MoreWork() {
  return (
    <section
      id="more-work"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            07 // MORE WORK
          </h2>
        </div>
      </div>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`grid grid-cols-12 items-center gap-gutter border-b border-border-subtle pb-6 ${
              i === items.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="col-span-12 font-headline-md md:col-span-4">
              {item.title}
            </div>
            <div className="col-span-12 font-body-md text-on-surface-variant md:col-span-6">
              {item.description}
            </div>
            <div className="col-span-12 font-metadata-caps text-tertiary-container md:col-span-2 md:text-right">
              {item.tech}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MoreWork