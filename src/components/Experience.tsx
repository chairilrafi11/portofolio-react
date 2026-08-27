interface ExperienceItem {
  company: string
  role: string
  context: string
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Tech Innovators Inc.",
    role: "Senior Engineer | 2021 - Present",
    context: "Context: Leading modernization of core legacy systems.",
    bullets: [
      "Led a team of 5 engineers to migrate monolithic backend to microservices.",
      "Improved API response times by 40% through Redis caching and query optimization.",
      "Established CI/CD pipelines reducing deployment time from hours to minutes.",
    ],
  },
  {
    company: "Digital Solutions Ltd.",
    role: "Full Stack Dev | 2018 - 2021",
    context: "Context: Rapid prototyping and client project delivery.",
    bullets: [
      "Developed 10+ custom web applications using React and Node.js.",
      "Integrated various third-party APIs including Stripe, Twilio, and SendGrid.",
      "Mentored junior developers and instituted code review standards.",
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            06 // EXPERIENCE
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="grid grid-cols-12 gap-gutter border-b border-border-subtle pb-12"
          >
            <div className="col-span-12 md:col-span-4">
              <h3 className="mb-2 font-headline-md text-headline-md">
                {exp.company}
              </h3>
              <span className="mb-4 block font-metadata-caps text-metadata-caps text-tertiary-container">
                {exp.role}
              </span>
              <p className="mb-4 font-body-md text-on-surface-variant italic">
                {exp.context}
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ul className="space-y-4 font-body-md text-on-background">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start">
                    <span className="material-symbols-outlined mt-1 mr-2 text-sm text-primary">
                      arrow_forward
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience