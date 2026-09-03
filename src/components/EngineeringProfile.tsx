interface SkillGroup {
  title: string
  items: string[]
}

const groups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["NestJS", "Golang", "Laravel", "Python / FastAPI", "REST / API Design"],
  },
  {
    title: "Frontend",
    items: ["React / Next.js", "Vue.js", "Flutter (Web)", "TypeScript"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Kotlin (Android)", "Native Android"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Database Design", "MinIO / S3 Storage"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Play Store Deployment", "App Store Deployment", "CI/CD", "TriPay Gateway"],
  },
  {
    title: "Architecture",
    items: ["Computer Vision", "Scrum / Agile", "System Design", "Team Leadership"],
  },
]

function EngineeringProfile() {
  return (
    <section
      id="profile"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            03 // ENGINEERING PROFILE
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter">
        {groups.map((group, i) => (
          <div
            key={group.title}
            className={`col-span-12 border-b border-border-subtle pb-8 md:col-span-6 lg:col-span-4 ${
              i < 3 ? "md:border-b-0" : ""
            } ${i === 3 ? "mt-0 lg:mt-module-gap" : ""} ${
              i === 4 ? "mt-0 md:border-b-0 lg:mt-module-gap" : ""
            } ${i === 5 ? "mt-0 lg:mt-module-gap" : ""} ${
              i > 1 ? "md:pb-8 lg:pb-0" : ""
            }`}
          >
            <h3 className="mb-6 font-headline-md text-headline-md">
              {group.title}
            </h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              {group.items.map((item) => (
                <li key={item} className="border-b border-border-subtle pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EngineeringProfile