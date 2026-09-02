import { AnimatedSection } from "./AnimatedSection"
import distributorOs from "../assets/project-distributoros.jpg"
import fintech from "../assets/project-fintech.jpg"

interface Project {
  index: string
  label: string
  title: string
  description: string
  role: string
  domain: string
  tags: string[]
  image: string
  alt: string
  reverse: boolean
}

const projects: Project[] = [
  {
    index: "01",
    label: "SAAS PLATFORM",
    title: "Distributor OS",
    description:
      "A comprehensive SaaS platform managing inventory, sales, and logistics for mid-tier distributors. Handled complete lifecycle from DB schema to mobile app deployment.",
    role: "Lead Engineer",
    domain: "Multi-Tenancy, RBAC",
    tags: ["NestJS", "Postgres", "React", "Flutter"],
    image: distributorOs,
    alt: "A highly detailed architectural diagram or abstract representation of a complex SaaS distributor operating system, rendered in a dark mode neo-grotesk style with sharp geometric lines and data visualization elements.",
    reverse: false,
  },
  {
    index: "02",
    label: "INFRASTRUCTURE",
    title: "Fintech Migration",
    description:
      "Legacy monolith to microservices migration for a payment gateway handling 100k+ TPS. Achieved zero downtime during cutover.",
    role: "Backend Engineer",
    domain: "High Throughput, Payments",
    tags: ["Go", "Kubernetes", "Kafka"],
    image: fintech,
    alt: "A dark, abstract representation of data flowing through microservices in a fintech application. Brutalist UI style with stark contrast.",
    reverse: true,
  },
]

function SelectedWork() {
  return (
    <section
      id="work"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <AnimatedSection>
            <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
              02 // SELECTED WORK
            </h2>
          </AnimatedSection>
        </div>
      </div>
      <div className="flex flex-col gap-[120px]">
        {projects.map((project, index) => (
          <AnimatedSection key={project.index} delay={index * 0.1}>
            <article className="group grid grid-cols-12 gap-gutter">
            <div
              className={`col-span-12 overflow-hidden border border-border-subtle bg-surface-container lg:col-span-7 ${
                project.reverse ? "order-1 lg:order-2" : ""
              }`}
            >
              <img
                alt={project.alt}
                className="aspect-[16/9] h-full w-full object-cover opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                src={project.image}
              />
            </div>
            <div
              className={`col-span-12 flex flex-col justify-start lg:col-span-5 ${
                project.reverse ? "order-2 lg:order-1" : ""
              }`}
            >
              <span className="mb-2 font-metadata-caps text-metadata-caps text-tertiary-container">
                PROJECT {project.index} / {project.label}
              </span>
              <h3 className="mb-6 font-headline-lg text-headline-lg">
                {project.title}
              </h3>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                {project.description}
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div>
                  <span className="mb-1 block font-metadata-sm text-metadata-sm text-tertiary-container">
                    ROLE
                  </span>
                  <span className="font-metadata-caps text-metadata-caps">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="mb-1 block font-metadata-sm text-metadata-sm text-tertiary-container">
                    DOMAIN
                  </span>
                  <span className="font-metadata-caps text-metadata-caps">
                    {project.domain}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-subtle px-2 py-1 font-metadata-sm text-metadata-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork