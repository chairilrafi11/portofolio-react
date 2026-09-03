import { useState } from "react"
import { Link } from "react-router-dom"
import { AnimatedSection } from "./AnimatedSection"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import { featuredProjects } from "../data/projects"
import type { Project } from "../data/projects"

function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section
      id="work"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap flex flex-wrap items-end justify-between gap-4 border-b border-border-subtle pb-6">
        <div>
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            05 // SELECTED WORK
          </h2>
          <p className="mt-4 max-w-lg font-body-lg text-on-surface-variant">
            A selection of platforms I've architected and shipped — from
            hospitality SAAS to super apps and fintech.
          </p>
        </div>
        <Link
          to="/projects"
          className="btn-hover inline-flex items-center gap-2 border border-secondary px-6 py-2 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
        >
          View All Projects
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-x-gutter gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={(index % 3) * 0.05}>
            <ProjectCard project={project} onOpen={setActive} />
          </AnimatedSection>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

export default SelectedWork
