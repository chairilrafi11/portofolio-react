import previewAct from "../assets/projects/preview_act.png"
import previewAposMobile from "../assets/projects/preview_apos_mobile.png"
import previewArtami from "../assets/projects/preview_artami.png"
import previewAtozgo from "../assets/projects/preview_atozgo.png"
import previewAtozpay from "../assets/projects/preview_atozpay.png"
import previewDapvmcCms from "../assets/projects/preview_dapvmc_cms.png"
import previewDapvmcMobile from "../assets/projects/preview_dapvmc_mobile.png"
import previewDisqueCms from "../assets/projects/preview_disque_cms.png"
import previewDisqueDisplay from "../assets/projects/preview_disque_display.png"
import previewDisqueMobile from "../assets/projects/preview_disque_mobile.png"
import previewDrc from "../assets/projects/preview_drc.png"
import previewDrcCms from "../assets/projects/preview_drc_cms.png"
import previewEcoop from "../assets/projects/preview_ecoop.png"
import previewGis from "../assets/projects/preview_gis.png"
import previewGisCms from "../assets/projects/preview_gis_cms.png"
import previewHade from "../assets/projects/preview_hade.png"
import previewHadeCms from "../assets/projects/preview_hade_cms.png"
import previewIdsAttendance from "../assets/projects/preview_ids_attendance.png"
import previewKonimex from "../assets/projects/preview_konimex.png"
import previewKopkar from "../assets/projects/preview_kopkar.png"
import previewParmaCms from "../assets/projects/preview_parma_cms.png"
import previewParmaMobile from "../assets/projects/preview_parma_mobile.png"
import previewPos from "../assets/projects/preview_pos.png"
import previewRabbani from "../assets/projects/preview_rabbani.png"
import previewSakti from "../assets/projects/preview_sakti.png"
import previewSpka from "../assets/projects/preview_spka.png"
import previewVillaConstruction from "../assets/projects/villa_construction.png"
import previewVillaManagementMaster from "../assets/projects/preview_villa_management_master.png"
import previewVillaManagementMobile from "../assets/projects/preview_villa_management_mobile.png"
import previewVillaManagementWeb from "../assets/projects/preview_villa_management_web.png"

export type ProjectPlatform = "web" | "mobile" | "both"

export interface Project {
  id: string
  title: string
  category: string
  platform: ProjectPlatform
  description: string
  longDescription?: string
  role: string
  year: string
  company?: string
  tech: string[]
  image: string
  alt: string
  liveLink?: string
  storeLink?: string
  githubLink?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "villa-management",
    title: "Villa Management",
    category: "SAAS / Hospitality",
    platform: "both",
    description:
      "Omnichannel PMS for villa rental operations — unifies Airbnb, Booking.com, Trip.com and other OTAs into a single hub with accounting, per-villa P&L reporting, and task/inspection scheduling for housekeeping, pool, and villa manager staff.",
    longDescription:
      "A greenfield property management system I architected from scratch as microservices. It connects villas to major OTAs through ChannelX so every booking channel is managed in one place. Beyond reservations it covers accounting, per-villa P&L reports, and role-based task & inspection scheduling for housekeeping, pool, and villa-manager staff. The platform spans a Next.js + React/Vite web frontend, NestJS monorepo (Prisma + Fastify), MinIO object storage, a FastAPI image-compression service, Redis caching, and Flutter mobile apps (Android & iOS) with FCM push notifications — all containerized with Docker on PostgreSQL.",
    role: "Lead Engineer & Architect",
    year: "2026",
    company: "PT. Balimmo Development Group",
    tech: ["Next.js", "NestJS", "Flutter", "Redis", "MinIO", "Docker"],
    image: previewVillaManagementWeb,
    alt: "Villa Management omnichannel property management system dashboard",
    storeLink: "https://play.google.com/store/apps/details?id=com.balimmo.vmm",
    featured: true,
  },
  {
    id: "villa-management-master",
    title: "Villa Management — Master",
    category: "SAAS / Hospitality",
    platform: "web",
    description:
      "Internal SAAS console for Villa Management — onboarding villa tenants, managing the properties that operate on the PMS, and controlling access across villa owners and operators.",
    longDescription:
      "The internal 'master' application behind the Villa Management SAAS. Used by the platform team to onboard and manage villa tenants (property owners & operators) onto the SAAS, provision villas into the PMS, and administer subscriptions, resources, and access across the ecosystem.",
    role: "Lead Engineer & Architect",
    year: "2026",
    company: "PT. Balimmo Development Group",
    tech: ["Next.js", "NestJS", "Flutter", "Redis", "MinIO", "Docker"],
    image: previewVillaManagementMaster,
    alt: "Villa Management master application for managing villa tenants",
    featured: false,
  },
  {
    id: "villa-management-mobile",
    title: "Villa Management — Mobile",
    category: "SAAS / Hospitality",
    platform: "mobile",
    description:
      "Mobile companion for the Villa Management PMS — staff task & inspection scheduling, real-time villa status, and push notifications on the go.",
    longDescription:
      "Flutter mobile app for Villa Management, giving villa staff and managers a mobile window into the PMS: role-based task & inspection schedules (housekeeping, pool, villa manager), real-time status, and FCM push notifications. Built alongside the web platform in the same microservices ecosystem.",
    role: "Lead Engineer & Architect",
    year: "2026",
    company: "PT. Balimmo Development Group",
    tech: ["Flutter", "NestJS", "Redis", "Docker"],
    image: previewVillaManagementMobile,
    alt: "Villa Management mobile app for staff task and inspection",
    storeLink: "https://play.google.com/store/apps/details?id=com.balimmo.vmm",
    featured: false,
  },
  {
    id: "villa-construction",
    title: "Villa Construction",
    category: "CRM / Real Estate",
    platform: "web",
    description:
      "Internal CRM for villa development — leads, prospects, projects, billing transactions (estimates, fundcalls, contracts), accounting, contractor payments, share-invest, and Odoo document signing across a Laravel monolith.",
    longDescription:
      "An internal CRM for PT. Balimmo Development Group covering the full villa development lifecycle for clients across multiple countries. Built as a Laravel monolith, it manages leads, prospects, and projects alongside billing transactions (estimates, fundcalls, contracts, land fundcalls), accounting (forecasting, recurring billing, contractor payments), share-invest, and webinar management — with Odoo integrated for document-signing workflows.",
    role: "Senior Full Stack Developer",
    year: "2026",
    company: "PT. Balimmo Development Group",
    tech: ["Laravel", "Odoo", "PostgreSQL", "Docker"],
    image: previewVillaConstruction,
    alt: "Villa Construction internal CRM for villa development projects",
    featured: true,
  },
  {
    id: "alpha-pos",
    title: "Alpha POS — Mobile",
    category: "POS / Retail",
    platform: "mobile",
    description:
      "Flutter point-of-sale app for retail operations — transactions, inventory, and reporting on Android & iOS.",
    longDescription:
      "The Flutter mobile point-of-sale application within the Alpha POS ecosystem. Handles the day-to-day retail transaction flow on Android & iOS, backed by a robust Golang API on PostgreSQL. Led development from architecture through store release.",
    role: "Lead Full Stack Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Flutter", "Golang", "PostgreSQL", "Android", "iOS"],
    image: previewAposMobile,
    alt: "Alpha POS mobile point-of-sale application",
    storeLink: "https://play.google.com/store/apps/details?id=id.act.pos",
    featured: true,
  },
  {
    id: "alpha-pos-web",
    title: "Alpha POS — Web",
    category: "POS / Retail",
    platform: "web",
    description:
      "Next.js web dashboard for the Alpha POS ecosystem — real-time sales overview, product & category management, and reporting for admins.",
    longDescription:
      "The Next.js web dashboard of the Alpha POS ecosystem. Gives admins a real-time overview of sales, product & category management, and reporting — consuming the same Golang backend as the mobile app.",
    role: "Full Stack Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Next.js", "Golang", "PostgreSQL"],
    image: previewPos,
    alt: "Alpha POS web dashboard",
    featured: false,
  },
  {
    id: "act-company-profile",
    title: "Alpha Cipta Technology — Company Profile",
    category: "Web / Company Profile",
    platform: "web",
    description:
      "Company profile website for PT. Alpha Cipta Teknologi showcasing services, portfolio, and engineering capabilities.",
    role: "IT Consultant & Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["React"],
    image: previewAct,
    alt: "Alpha Cipta Technology company profile website",
    liveLink: "https://www.alphaciptatech.com",
    featured: true,
  },
  {
    id: "atozgo",
    title: "AtozGo Super App",
    category: "Super App",
    platform: "mobile",
    description:
      "Super app for food delivery, basic-needs shopping, cleaning services, dine-in and drive-thru mall services, rebuilt in Flutter from native Android.",
    longDescription:
      "Rebuilt the 'atozGO' super app in Flutter, migrating from a native Android codebase to a single cross-platform codebase. Handled complex features such as food delivery, e-commerce, and e-money top-ups while driving a migration strategy that cut development time by ~50%.",
    role: "Senior Mobile Developer",
    year: "2019 – 2021",
    company: "PT. Weyland Indonesia Perkasa",
    tech: ["Flutter", "Android", "iOS"],
    image: previewAtozgo,
    alt: "AtozGo super app for food delivery and services",
    liveLink: "https://www.instagram.com/atozgo_indonesia",
    featured: true,
  },
  {
    id: "sakti",
    title: "Sakti POJ",
    category: "HR / Attendance",
    platform: "mobile",
    description:
      "Real-time employee attendance & activity reporting app for PT Pesona Optima Jasa — permits, pay slips, and multi-role access with a monitoring dashboard.",
    longDescription:
      "Successfully pivoted an internal product for external client PT. Pesona Optima Jasa, leading the development of Sakti POJ — a real-time attendance and outsourcing activity-report app with multi-role access, event management, task delegation, permits, pay slips, and a website dashboard for monitoring anywhere, anytime.",
    role: "Senior Mobile Developer",
    year: "2023",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewSakti,
    alt: "Sakti POJ attendance and activity report mobile application",
    storeLink: "https://play.google.com/store/apps/details?id=com.poj.attendance",
    featured: true,
  },
  {
    id: "parma",
    title: "PARMA (CRM & PJP)",
    category: "CRM / Sales",
    platform: "both",
    description:
      "Mobile + CMS CRM for minimarket sales promotions. Led end-to-end development across Flutter (Mobile), Vue.js (CMS), and Golang API with computer vision features.",
    longDescription:
      "Led end-to-end development of PARMA (CRM & PJP), managing a cross-platform ecosystem including Flutter (Mobile), Vue.js (Web CMS), and Golang with PostgreSQL (API). Also pioneered AI research for the product, implementing computer vision features for automated product and people counting.",
    role: "Lead Engineer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Flutter", "Vue.js", "Golang", "PostgreSQL"],
    image: previewParmaMobile,
    alt: "PARMA CRM mobile application for sales promotions",
  },
  {
    id: "gis-kampar",
    title: "GIS Kampar",
    category: "Government / GIS",
    platform: "web",
    description:
      "WebGIS for Kampar Regency Government — spatial data visualization, land use mapping, infrastructure and administrative boundaries to support decision-making and public services.",
    longDescription:
      "Spearheaded the development of a Web GIS application for the Kab. Kampar Government to visualize and manage regional geographic data — spatial data visualization, land-use mapping, infrastructure information, and administrative boundaries.",
    role: "Full Stack Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Next.js", "Vue.js", "PostgreSQL"],
    image: previewGis,
    alt: "WebGIS application for Kampar Regency Government",
  },
  {
    id: "ids-attendance",
    title: "IDS Attendance",
    category: "HR / Attendance",
    platform: "mobile",
    description:
      "Comprehensive internal HR system featuring attendance, payroll, leave management, and employee announcements, integrated with Odoo.",
    longDescription:
      "Designed and developed 'IDS Attendance', a comprehensive internal HR system for PT. Inovasi Dinamika Solusi featuring payroll, attendance, leave management, and employee announcements, integrated with Odoo.",
    role: "Lead Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Odoo", "Android", "iOS"],
    image: previewIdsAttendance,
    alt: "IDS Attendance HR management mobile application",
  },
  {
    id: "rabbani",
    title: "Rabbani Digital",
    category: "E-Commerce",
    platform: "mobile",
    description:
      "Mobile e-commerce for Rabbani, Indonesia's Muslim fashion brand — exclusive brand sales with integrated payment gateway, built from scratch.",
    longDescription:
      "Developed the Rabbani Mobile E-Commerce application from scratch using Flutter, integrating the TriPay Payment Gateway to facilitate exclusive brand sales for Indonesia's Muslim fashion brand.",
    role: "Mobile Developer",
    year: "2023",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewRabbani,
    alt: "Rabbani Digital mobile e-commerce application",
    storeLink: "https://play.google.com/store/apps/details?id=id.rabbani.digital",
  },
  {
    id: "hade",
    title: "Hade",
    category: "HR / Attendance",
    platform: "mobile",
    description:
      "Employee attendance app — streamlines attendance tracking, work hours, and workforce productivity for organizations with an admin CMS.",
    longDescription:
      "An employee-attendance mobile app that helps HR administrators efficiently manage attendance records, monitor work hours, and improve overall workforce productivity — complemented by a web admin CMS.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Next.js", "Android", "iOS"],
    image: previewHade,
    alt: "Hade employee attendance mobile application",
    storeLink: "https://play.google.com/store/apps/details?id=id.act.hade",
  },
  {
    id: "drc",
    title: "Digital Record Card",
    category: "Sales / Field",
    platform: "mobile",
    description:
      "Sales digitization app for PT. Haleon (GSK) field teams — record and manage transactions digitally across mobile and CMS.",
    longDescription:
      "Functioned as a Full Stack Developer for the DRC (Digital Record Card) project for PT. Haleon, utilizing Flutter, Golang, and PostgreSQL to digitize sales-worker records.",
    role: "Full Stack Developer",
    year: "2022",
    company: "PT. Sphere Global Solusi",
    tech: ["Flutter", "Next.js", "Golang", "PostgreSQL"],
    image: previewDrc,
    alt: "Digital Record Card mobile application for Haleon sales teams",
    storeLink: "https://play.google.com/store/apps/details?id=id.sphere154.drc",
  },
  {
    id: "atozpay",
    title: "AtozPay",
    category: "Fintech",
    platform: "mobile",
    description:
      "Fintech wallet for BPJS, PDAM, electricity, PGN, pulses, e-money and QR-code peer-to-peer payments.",
    longDescription:
      "Migrated the fintech platform 'AtozPay' and its Merchant/Driver apps, ensuring feature parity and improved performance. Serves online digital payments such as BPJS, PDAM, electricity, PGN, pulses, and QR-code peer-to-peer transfers.",
    role: "Senior Mobile Developer",
    year: "2019 – 2021",
    company: "PT. Weyland Indonesia Perkasa",
    tech: ["Flutter", "Android", "iOS"],
    image: previewAtozpay,
    alt: "AtozPay digital payments mobile wallet",
    liveLink: "https://atoz-vue.netlify.app/#/",
  },
  {
    id: "ecoop",
    title: "Ecoop 212",
    category: "Fintech / Cooperative",
    platform: "mobile",
    description:
      "Sharia cooperative mobile app for the 212 Syariah Cooperative — savings, investments, financing, and Sharia-compliant digital transactions.",
    longDescription:
      "A dedicated platform for the 212 Sharia Cooperative enabling members to access accounts, monitor savings and investments, apply for financing, and conduct Sharia-compliant digital transactions — with secure authentication and real-time notifications.",
    role: "Mobile Developer",
    year: "2023 – 2025",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewEcoop,
    alt: "Ecoop 212 Sharia cooperative mobile application",
    liveLink: "https://koperasisyariah212.co.id/aplikasi-ecoop/",
  },
  {
    id: "artami",
    title: "Artami",
    category: "Fintech",
    platform: "mobile",
    description:
      "Virtual money management, savings reports and PPOB payment app.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewArtami,
    alt: "Artami virtual money and PPOB payment application",
  },
  {
    id: "spka",
    title: "SPKA Mobile",
    category: "Organization / Membership",
    platform: "mobile",
    description:
      "Official app for the Serikat Pekerja Kereta Api (railway workers' union) — members can access information, manage membership, and participate in organizational activities.",
    longDescription:
      "SPKA Mobile is the official application for the Serikat Pekerja Kereta Api (railway workers' union) — a digital solution for members to access information, manage membership, and take part in organizational activities quickly, transparently, and efficiently.",
    role: "Mobile Developer",
    year: "2023 – 2025",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewSpka,
    alt: "SPKA Mobile official railway workers union application",
    storeLink: "https://play.google.com/store/apps/details?id=id.lid.spka_mobile",
  },
  {
    id: "disque",
    title: "Disque",
    category: "Queue Management",
    platform: "mobile",
    description:
      "Queue management ecosystem for bank tellers — mobile caller, admin CMS, and TV display app for queue counters.",
    longDescription:
      "Mobile app for bank tellers to call queue numbers, built entirely from structure to release. Part of a queue-management ecosystem alongside an admin CMS and TV display app.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Next.js", "Android"],
    image: previewDisqueMobile,
    alt: "Disque queue management mobile application",
    storeLink: "https://play.google.com/store/apps/details?id=id.act.disque.teller",
  },
  {
    id: "konimex",
    title: "Konimex Mobile",
    category: "Sales / Field",
    platform: "mobile",
    description:
      "Sales app for Konimex — developed independently from initial structure to final release.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android", "iOS"],
    image: previewKonimex,
    alt: "Konimex Mobile sales application",
  },
  {
    id: "dapvmc",
    title: "DAP VMC",
    category: "Sales / Promo",
    platform: "mobile",
    description:
      "Sales app handling promotional programs in minimarkets for DAP VMC, built end-to-end independently.",
    longDescription:
      "Sales app for DAP VMC to handle promotional programs in minimarkets, developed end-to-end independently.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Vue.js", "Android", "iOS"],
    image: previewDapvmcMobile,
    alt: "DAP VMC sales promotion mobile application",
    storeLink: "https://play.google.com/store/apps/details?id=id.act.dap_vmc",
  },
  {
    id: "koperasi-harapan-kita",
    title: "Koperasi Harapan Kita",
    category: "Fintech / Cooperative",
    platform: "mobile",
    description:
      "Cooperative mobile application for Koperasi Harapan Kita membership and services.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android"],
    image: previewKopkar,
    alt: "Koperasi Harapan Kita cooperative mobile application",
  },
  {
    id: "hade-admin",
    title: "Hade Admin",
    category: "HR / CMS",
    platform: "web",
    description:
      "Web CMS for company employee management — developed independently from scratch to deployment.",
    role: "Full Stack Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Next.js"],
    image: previewHadeCms,
    alt: "Hade Admin employee management web CMS",
  },
  {
    id: "drc-cms",
    title: "Digital Record Card CMS",
    category: "Sales / CMS",
    platform: "web",
    description:
      "CMS to manage sales visit reports to minimarkets for Haleon field teams.",
    role: "Full Stack Developer",
    year: "2022",
    company: "PT. Sphere Global Solusi",
    tech: ["Next.js"],
    image: previewDrcCms,
    alt: "Digital Record Card CMS web application",
  },
  {
    id: "parma-cms",
    title: "PARMA CMS",
    category: "Sales / CMS",
    platform: "web",
    description:
      "CMS to manage minimarket sales promotions, working with the team to develop the application.",
    role: "Full Stack Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Vue.js"],
    image: previewParmaCms,
    alt: "PARMA CMS for minimarket sales promotions",
  },
  {
    id: "gis-kampar-cms",
    title: "GIS Kampar CMS",
    category: "Government / CMS",
    platform: "web",
    description:
      "Admin CMS for the Kampar WebGIS — manage spatial and non-spatial data with role-based access control.",
    role: "Full Stack Developer",
    year: "2025",
    company: "PT. Alpha Cipta Teknologi",
    tech: ["Vue.js"],
    image: previewGisCms,
    alt: "GIS Kampar content management system",
  },
  {
    id: "dapvmc-cms",
    title: "DAP VMC CMS",
    category: "Sales / CMS",
    platform: "web",
    description:
      "Admin CMS to manage DAP VMC sales promotions as part of the development team.",
    role: "Full Stack Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Vue.js"],
    image: previewDapvmcCms,
    alt: "DAP VMC sales promotion management CMS",
  },
  {
    id: "disque-cms",
    title: "Disque Admin CMS",
    category: "Queue / CMS",
    platform: "web",
    description:
      "Web CMS to manage queue data, contributed as part of the development team.",
    role: "Full Stack Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Next.js"],
    image: previewDisqueCms,
    alt: "Disque admin CMS for queue data",
  },
  {
    id: "disque-display",
    title: "Disque Display",
    category: "Queue Management",
    platform: "mobile",
    description:
      "TV display app for queue counters, developed independently from start to finish.",
    role: "Mobile Developer",
    year: "2022 – 2024",
    company: "PT. Inovasi Dinamika Solusi",
    tech: ["Flutter", "Android"],
    image: previewDisqueDisplay,
    alt: "Disque display TV app for queue counters",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function isPlatformMatch(
  project: Project,
  filter: "all" | ProjectPlatform,
): boolean {
  if (filter === "all") return true
  if (project.platform === "both") return true
  return project.platform === filter
}

export function platformLabel(platform: ProjectPlatform): string {
  if (platform === "both") return "Web + Mobile"
  return platform.charAt(0).toUpperCase() + platform.slice(1)
}
