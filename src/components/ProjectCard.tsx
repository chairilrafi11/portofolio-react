import type { Project } from "../data/projects"
import { platformLabel } from "../data/projects"

interface ProjectCardProps {
  project: Project
  onOpen?: (project: Project) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const handleClick = () => onOpen?.(project)

  return (
    <article
      onClick={handleClick}
      className={`group flex h-full cursor-pointer flex-col ${
        onOpen ? "focus-within:outline focus-within:outline-primary" : ""
      }`}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={
        onOpen
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleClick()
              }
            }
          : undefined
      }
    >
      <div className="mb-6 overflow-hidden border border-border-subtle bg-surface-container">
        <img
          alt={project.alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          src={project.image}
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-headline-md text-headline-md">
          {project.title}
        </h3>
        <span className="shrink-0 font-metadata-sm text-metadata-sm text-tertiary-container">
          {platformLabel(project.platform)}
        </span>
      </div>
      <span className="mb-2 mt-2 font-metadata-sm text-metadata-sm text-tertiary-container">
        {project.category}
      </span>
      <p className="mb-4 flex-1 font-body-md text-body-md text-on-surface-variant">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="border border-border-subtle px-2 py-1 font-metadata-sm text-metadata-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard