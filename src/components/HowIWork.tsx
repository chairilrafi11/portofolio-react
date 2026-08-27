interface Principle {
  number: string
  title: string
  description: string
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into business requirements before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect for scalability and maintainability. Choose the right tools.",
  },
  {
    number: "03",
    title: "Build",
    description: "Execute with precision, adhering to best practices and clean code principles.",
  },
  {
    number: "04",
    title: "Iterate",
    description: "Monitor, optimize, and refine based on real-world usage and feedback.",
  },
]

function HowIWork() {
  return (
    <section
      id="principles"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            05 // HOW I WORK
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter">
        {principles.map((principle) => (
          <div key={principle.number} className="col-span-12 md:col-span-3">
            <h4 className="mb-4 font-headline-md text-headline-md">
              {principle.number}. {principle.title}
            </h4>
            <p className="font-body-md text-on-surface-variant">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowIWork