import { useEffect } from "react"
import { createPortal } from "react-dom"
import type { Project } from "../data/projects"
import { platformLabel } from "../data/projects"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const hasExternal =
    project.liveLink || project.storeLink || project.githubLink

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button
        aria-label="Close project details"
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-full w-full max-w-4xl overflow-y-auto border border-border-subtle bg-background shadow-2xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-border-subtle bg-background font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
        >
          ESC
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-border-subtle bg-surface-container lg:border-b-0 lg:border-r">
            <img
              alt={project.alt}
              className="h-full max-h-[50vh] w-full object-cover opacity-90 lg:max-h-none"
              src={project.image}
            />
          </div>
          <div className="p-6 md:p-10">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="font-metadata-caps text-metadata-caps text-primary">
                {project.category}
              </span>
              <span className="h-px w-6 bg-border-subtle" />
              <span className="font-metadata-sm text-metadata-sm text-tertiary-container">
                {platformLabel(project.platform)}
              </span>
            </div>
            <h2 className="mb-6 font-headline-lg text-headline-lg">
              {project.title}
            </h2>

            <dl className="mb-6 grid grid-cols-2 gap-6 border-y border-border-subtle py-6">
              <div>
                <dt className="mb-1 font-metadata-sm text-metadata-sm text-tertiary-container">
                  ROLE
                </dt>
                <dd className="font-body-md text-on-background">{project.role}</dd>
              </div>
              <div>
                <dt className="mb-1 font-metadata-sm text-metadata-sm text-tertiary-container">
                  YEAR
                </dt>
                <dd className="font-body-md text-on-background">{project.year}</dd>
              </div>
              {project.company && (
                <div className="col-span-2">
                  <dt className="mb-1 font-metadata-sm text-metadata-sm text-tertiary-container">
                    COMPANY
                  </dt>
                  <dd className="font-body-md text-on-background">
                    {project.company}
                  </dd>
                </div>
              )}
            </dl>

            <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
              {project.longDescription ?? project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="border border-border-subtle px-2 py-1 font-metadata-sm text-metadata-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {hasExternal && (
              <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-hover inline-flex items-center gap-2 border border-secondary px-6 py-3 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
                  >
                    Visit Website
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                )}
                {project.storeLink && (
                  <a
                    href={project.storeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-hover inline-flex items-center gap-2 border border-secondary px-6 py-3 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
                  >
                    View on Play Store
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-hover inline-flex items-center gap-2 border border-secondary px-6 py-3 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
                  >
                    Source Code
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ProjectModal
