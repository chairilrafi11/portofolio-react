import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatedSection } from "../components/AnimatedSection"
import { projects, isPlatformMatch } from "../data/projects"
import type { Project, ProjectPlatform } from "../data/projects"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"

type Filter = "all" | ProjectPlatform

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
]

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all")
  const [active, setActive] = useState<Project | null>(null)

  const visible = useMemo(
    () => projects.filter((p) => isPlatformMatch(p, filter)),
    [filter],
  )

  return (
    <div className="relative min-h-screen bg-background-base font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <div className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-20" />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-[1920px] px-margin-desktop pt-[80px]">
        <section className="border-b border-border-subtle py-vertical-section">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
                ALL PROJECTS
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mb-8 font-display-lg text-display-lg leading-tight tracking-tighter">
                A body of work built to hold up in production.
              </h1>
              <p className="max-w-2xl font-body-lg text-on-surface-variant">
                Across SaaS platforms, CRM, hospitality, fintech, government and
                mobile — the products I've designed, engineered, and shipped
                end-to-end.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border-subtle py-vertical-section">
          <div className="mb-module-gap flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {FILTERS.map((f) => {
                const count = f.id === "all" ? projects.length : projects.filter((p) => isPlatformMatch(p, f.id)).length
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`border px-4 py-2 font-metadata-caps text-metadata-caps transition-colors duration-200 ${
                      filter === f.id
                        ? "border-secondary bg-secondary text-on-secondary"
                        : "border-border-subtle text-on-surface-variant hover:border-secondary hover:text-on-background"
                    }`}
                  >
                    {f.label}
                    <span className="ml-2 opacity-60">
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                )
              })}
            </div>
            <Link
              to="/"
              className="font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              ← BACK TO HOME
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <AnimatedSection key={project.id} delay={(index % 3) * 0.05}>
                <ProjectCard project={project} onOpen={setActive} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  )
}

export default ProjectsPage
