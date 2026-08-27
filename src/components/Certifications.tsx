interface Certification {
  title: string
  issuer: string
  year: string
}

const certifications: Certification[] = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { title: "Google Cloud Professional Engineer", issuer: "Google Cloud", year: "2022" },
  { title: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", year: "2021" },
  { title: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2020" },
  { title: "Flutter Certified Application Developer", issuer: "Google", year: "2019" },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            04 // CERTIFICATIONS
          </h2>
        </div>
      </div>
      <ul className="space-y-0">
        {certifications.map((cert, i) => (
          <li
            key={cert.title}
            className={`grid grid-cols-12 items-center gap-gutter px-6 py-8 transition-colors duration-300 hover:bg-surface-container ${
              i < certifications.length - 1 ? "-mx-6 border-b border-border-subtle" : "-mx-6"
            }`}
          >
            <div className="col-span-12 font-headline-md text-on-background md:col-span-5">
              {cert.title}
            </div>
            <div className="col-span-12 font-body-md text-on-surface-variant md:col-span-4">
              {cert.issuer}
            </div>
            <div className="col-span-12 font-metadata-caps text-tertiary-container md:col-span-3 md:text-right">
              {cert.year}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications