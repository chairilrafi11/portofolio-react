interface EducationItem {
  institution: string
  program: string
  period: string
}

const education: EducationItem[] = [
  {
    institution: "Universitas Komputer Indonesia",
    program: "High School Diploma, Information Systems | GPA: 3.62/4.00",
    period: "Sep 2023 — Jul 2027 (Expected)",
  },
  {
    institution: "SMKN 4 Bandung",
    program: "Senior High School, Software Engineering | Score: 85.00/100.00",
    period: "Aug 2016 — Jun 2019",
  },
]

function Education() {
  return (
    <section
      id="education"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            06 // EDUCATION
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="grid grid-cols-12 gap-gutter border-b border-border-subtle pb-12"
          >
            <div className="col-span-12 md:col-span-4">
              <h3 className="mb-2 font-headline-md text-headline-md">
                {edu.institution}
              </h3>
              <span className="font-metadata-caps text-metadata-caps text-tertiary-container">
                {edu.program}
              </span>
            </div>
            <div className="col-span-12 md:col-span-8 md:text-right">
              <span className="font-headline-md text-headline-md opacity-20">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education