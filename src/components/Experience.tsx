interface ExperienceItem {
  company: string
  role: string
  context: string
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "PT. ALPHA CIPTA TEKNOLOGI — Bandung, Indonesia",
    role: "Senior Full Stack Developer & IT Consultant | Jun 2025 – Dec 2025",
    context: "Context: Spearheading Web GIS, CRM/PJP, and POS system development.",
    bullets: [
      "Spearheaded the development of a Web GIS application using Next.js for the Kab. Kampar Government to visualize and manage regional geographic data.",
      "Led the end-to-end development of PARMA (CRM & PJP), managing a cross-platform ecosystem including Flutter (Mobile), Vue.js (Web), and Golang with PostgreSQL (API).",
      "Architected the Alpha POS system, overseeing the development of Flutter Mobile, Next.js Web, and a robust Golang backend.",
      "Acted as a Primary Technical Consultant in client meetings to gather requirements, consult on feature feasibility, and translate business needs into technical specifications.",
      "Orchestrated team workflows using Scrum and Sprint methodologies, managing task assignments via Jira to ensure timely project delivery.",
      "Pioneered AI Research for the PARMA application, implementing computer vision features for automated product and people counting.",
      "Directed the full application lifecycle, including development, system analysis, and successful release management on the Play Store and App Store.",
    ],
  },
  {
    company: "PT. INOVASI DINAMIKA SOLUSI — Bandung, Indonesia",
    role: "Senior Mobile Developer & IT Consultant | Dec 2022 – May 2025",
    context: "Context: Scaling mobile solutions and pivoting internal products for external clients.",
    bullets: [
      "Directed the Mobile Development Team in building and scaling internal and client-facing mobile solutions.",
      "Designed and developed \"IDS Attendance\", a comprehensive internal HR system featuring payroll, attendance, leave management, and employee announcements.",
      "Successfully pivoted internal products for external clients, leading the development of \"Sakti POJ\" for PT. Pesona Optima Jasa with advanced features like multi-role access, event management, and task delegation.",
      "Developed the Rabbani Mobile E-Commerce application from scratch using Flutter, integrating TriPay Payment Gateway to facilitate exclusive brand sales.",
      "Modernized legacy data platforms, maintaining and optimizing \"Ticmi Data\" (Stock Sales Application) using Flutter Web.",
      "Performed deep system analysis and research on emerging technologies to implement cutting-edge features into the company's product roadmap.",
      "Managed end-to-end app publishing, including asset creation (previews/screenshots) and submission processes for the App Store and Play Store.",
    ],
  },
  {
    company: "PT. SPHERE GLOBAL SOLUSI — Bandung, Indonesia",
    role: "Senior Full Stack Developer & IT Consultant | Mar 2022 – Nov 2022",
    context: "Context: Leading frontend development of a multi-platform e-commerce ecosystem.",
    bullets: [
      "Led the Front-End development of the \"Pajang\" E-commerce ecosystem, managing three distinct platforms: Customer Mobile, Windows POS, and a React-based Admin CMS, all unified through Flutter technology.",
      "Functioned as a Full Stack Developer for the DRC (Digital Record Card) project for PT. Haleon, utilizing Flutter, Golang, and PostgreSQL to digitize sales worker records.",
      "Coordinated development cycles as a Team Leader, utilizing Trello for agile task management and team synchronization.",
      "Conducted rigorous system analysis to ensure seamless integration between the mobile ecosystem (customer/driver) and desktop sales platforms.",
    ],
  },
  {
    company: "PT. CAHYA ACITYA INDONESIA — Jakarta, Indonesia",
    role: "Kotlin Developer & Startup IT Consultant | Jan 2022 – Mar 2022",
    context: "Context: High-urgency fintech mobile app delivery for Bank Negara Indonesia.",
    bullets: [
      "Accelerated the Phase 1 delivery of the BNI Agen 46 mobile application under a high-urgency timeline for Bank Negara Indonesia.",
      "Developed core financial features, enabling agents to perform monthly bill payments, PPOB transactions, cash withdrawals, and deposits.",
      "Integrated hardware-level communication, implementing EDC machine connectivity for Debit card and TapCash transactions.",
    ],
  },
  {
    company: "PT. Weyland Indonesia Perkasa — Jakarta, Indonesia",
    role: "Senior Mobile Developer | Sep 2019 – Dec 2021",
    context: "Context: Leading R&D and migration from Native Android to Flutter.",
    bullets: [
      "Spearheaded the R&D and migration strategy from Native Android to Flutter, resulting in a 50% reduction in development time by maintaining a single codebase for iOS and Android.",
      "Rebuilt the \"atozGO\" Super App using Flutter, managing complex features like food delivery, e-commerce, and e-money top-ups.",
      "Migrated the Fintech platform \"atozPay\" and the Merchant/Driver apps, ensuring feature parity and improved performance across all mobile products.",
      "Mentored and upskilled the engineering team, conducting knowledge-sharing sessions on Flutter best practices and state management.",
      "Managed the overall team output, overseeing task control, reporting, and product analysis to meet business objectives.",
    ],
  },
  {
    company: "PT. BEE SOLUTION PARTNER — Bandung, Indonesia",
    role: "Web Developer & IT Consultant | May 2019 – Aug 2019",
    context: "Context: Building React-based CMS for company profile management.",
    bullets: [
      "Developed a dynamic CMS using React.js to manage company profile content, including team profiles, service listings, and banner advertisements.",
      "Optimized the web user interface to ensure a responsive and high-performance experience for potential clients and partners.",
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