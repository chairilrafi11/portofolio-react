import { AnimatedSection } from "./AnimatedSection"

function Biography() {
  return (
    <section
      id="biography"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <AnimatedSection className="col-span-12 lg:col-span-4">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            01 // BIOGRAPHY
          </h2>
        </AnimatedSection>
        <div className="col-span-12 lg:col-span-8">
          <AnimatedSection>
            <h2 className="mb-12 font-display-xl text-display-lg leading-tight tracking-tighter">
              I deliver comprehensive end-to-end solutions, bridging modern
              frontend and robust backend stacks.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <p className="font-body-lg text-on-surface-variant">
                As an experienced Full Stack Developer, I leverage expertise in
                modern frontend (Flutter, React, Next.js) and robust backend
                stacks including Golang, Laravel, and Python, with strong
                PostgreSQL database proficiency.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="font-body-lg text-on-surface-variant">
                I've participated in projects across diverse industrial domains —
                HR, Point-of-Sale, CRM, GIS, Fintech, and Logistics — overseeing
                the full application lifecycle from initial development and system
                analysis to deployment and release management on Play Store and
                App Store.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
