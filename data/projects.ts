export type ProjectCTA = {
  label: string
  href: string
  external?: boolean
}

export type ProjectItem = {
  slug: string
  title: string
  subtitle?: string
  description: string
  tags: string[]
  coverSrc: string
  imageNote?: string
  role?: string
  period?: string
  isCaseStudy?: boolean
  ctas?: ProjectCTA[]
}

// Centralized project data. Image paths should exist under public/images or public/projects.
export const projects: ProjectItem[] = [
  {
    slug: 'startup-wars-2025',
    title: 'Startup Wars 2025 — Top 6 of 175+ teams',
    subtitle: 'Cloud Security Investment Analysis',
    description:
      'Delivered investor-grade thesis demonstrating Cloud over MSS and DRaaS over IAM with Philippines-first dataset and method-robust rankings.',
    tags: ['Python', 'R', 'SQL', 'MCDA', 'Cloud', 'Security'],
    coverSrc: '/images/foxmont-team.jpeg',
    role: 'Lead Data Analyst • Sector Research',
    period: 'AUG 2025 — CURRENT',
    isCaseStudy: true,
    ctas: [
      { label: 'View Team Photo', href: '/images/foxmont-team.jpeg', external: false },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    slug: 'diagnoassist',
    title: 'DiagnoAssist',
    subtitle: 'AI clinical assistant',
    description:
      'Full‑stack AI clinical assistant using FastAPI/Python and React; HL7 FHIR R4 compliant data architecture and SOAP workflows.',
    tags: ['FastAPI', 'Python', 'React', 'HL7 FHIR', 'Speech‑to‑Text', 'AI/ML'],
    coverSrc: '/images/diagnoassist-dashboard.png',
    period: 'MAY 2025 — CURRENT',
    role: 'Intelligent Systems Developer',
    ctas: [],
  },
  {
    slug: 'harry-mocker',
    title: 'Harry Mocker — AI Interview Coach',
    description:
      'Multimodal mock‑interview platform analyzing facial expressions, voice features, and content for real‑time feedback with analytics.',
    tags: ['Llama LLM', 'Facial Recognition', 'Voice Analysis', 'Semantic Scoring', 'React', 'Python'],
    coverSrc: '/images/harry-mocker-interview.png',
    imageNote: 'Interface mockup (image from online resources)',
    period: 'ONGOING RESEARCH PROJECT',
    role: 'Lead Engineer/Developer',
  },
  {
    slug: 'choreo-xplore',
    title: 'ChoreoXplore — Procedural Dance Visuals',
    description:
      'HCI prototype transforming music into reactive, procedurally generated visuals for choreography with Unity rendering and projection mapping.',
    tags: ['Stable Diffusion', 'Unity', 'Audio Analysis', 'Projection Mapping', 'HCI', 'Generative AI'],
    coverSrc: '/images/choreoxplore-dancer.png',
    period: 'THESIS PROJECT',
    role: 'Lead Engineer/Developer',
  },
  {
    slug: 'abstraktmotif-oms',
    title: 'Ultimate Collection & Order Management System',
    description:
      'Web app for a clothing company to manage product collections, orders, and operations using JavaScript, MongoDB, and REST APIs.',
    tags: ['JavaScript', 'MongoDB', 'Express', 'Node', 'REST APIs', 'Web App'],
    coverSrc: '/images/abstrak-motif-sculpture.png',
    period: 'COMPLETED',
    role: 'Lead Software Engineer',
    ctas: [
      { label: 'GitHub', href: 'https://github.com/AhStayinAlive/The-Ultimate-Collection-and-Order-Management-System', external: true },
    ],
  },
]

export type ProjectsResponse = {
  projects: ProjectItem[]
}

export function getProjects(): ProjectsResponse {
  return { projects }
}

