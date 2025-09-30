export type ProjectStatus = 'shipped' | 'ongoing'

export type ProjectRecord = {
  title: string
  description: string
  technologies: string[]
  image: string
  period?: string
  role?: string
  status: ProjectStatus
  sourceUrl?: string | null
  // Optional modal details for case studies / pop-outs
  modal?: {
    subtitle?: string
    pills?: { label: string }[]
    sections: { heading: string; body: string | string[] }[]
    accent?: 'orange' | 'blue' | 'pink' | 'gray'
  }
}

const projects: ProjectRecord[] = [
  {
    title: 'Startup Wars 2025 — Top 6 out of 175+ teams across Southeast Asia',
    description:
      "Led sector research and Multi-Criteria Decision Analysis for cloud security investments, delivering investor-grade thesis showing Cloud over Managed Security Services and Disaster Recovery as a Service over Identity and Access Management with Philippines-first dataset, method-robust rankings, and audit-ready outputs that accelerated investment committee decisions.",
    technologies: ['Python', 'R', 'SQL', 'MCDA', 'Cloud Security', 'DRaaS'],
    image: '/images/foxmont-team.jpeg',
    period: 'AUG 2025 — CURRENT',
    role: 'Lead Data Analyst & Sector Research',
    status: 'shipped',
    sourceUrl: null,
    modal: {
      subtitle: 'Top 6 of 175+ Teams · Cloud Security Investment Analysis',
      pills: [
        { label: 'Region: Indonesia, Malaysia, Philippines, Singapore, Vietnam' },
        { label: 'Thesis: Cloud > MSS · DRaaS > IAM' },
        { label: 'Role: Lead Data Analyst · Sector Research' },
      ],
      accent: 'orange',
      sections: [
        {
          heading: 'Overview',
          body:
            'Delivered investor-grade thesis demonstrating Cloud over Managed Security Services on scale and liquidity, and within Cloud, Business Continuity and Disaster Recovery as a Service over Identity and Access Management based on market size and winnability. Built Philippines-first dataset with Multi-Criteria Decision Analysis producing method-robust rankings and audit-ready outputs.',
        },
        {
          heading: 'Team & Stack',
          body: ['5 members', 'Python, R, SQL, Jupyter'],
        },
        {
          heading: 'Methods',
          body: 'SAW, TOPSIS, PROMETHEE II, VIKOR · Policy and market concentration guardrails',
        },
        {
          heading: 'Key Outcomes',
          body: ['Top 6 ranking with clear thesis across 175+ teams', 'Philippines-first dataset with cited sources', 'Method-robust rankings validated across approaches'],
        },
        {
          heading: 'Methodology',
          body:
            'Scored five subsectors across six venture capital criteria using multiple MCDA methods. Simple Additive Weighting provided transparent rankings, TOPSIS measured closeness to ideal, PROMETHEE II applied non-compensatory logic, and VIKOR minimized worst-case regret. Validated stability through ±10–15% weight stress tests.',
        },
        {
          heading: 'Data Pipeline',
          body:
            'Philippines-first approach with Asia-Pacific supplementary data from 2023–2025. Collected, cleaned, geo-tagged, and evidence-scored sources; normalized to 0–100 scale; exported reproducible R and SQL notebooks.',
        },
      ],
    },
  },
  {
    title: 'DiagnoAssist',
    description:
      'Co-developing a full-stack AI-powered clinical assistant built with FastAPI/Python and React that streamlines patient documentation through speech-to-text transcription and on-demand diagnostic insights. Engineered HL7 FHIR R4-compliant data architecture, validated through iterative design with 8+ healthcare professionals to create structured workflows supporting SOAP formatting.',
    technologies: ['FastAPI', 'Python', 'React', 'HL7 FHIR', 'Speech-to-Text', 'AI/ML', 'Healthcare'],
    image: '/images/diagnoassist-dashboard.png',
    period: 'MAY 2025 — CURRENT',
    role: 'Intelligent Systems Developer',
    status: 'shipped',
    sourceUrl: null,
  },
  {
    title: 'Harry Mocker — AI Interview Coach',
    description:
      'A multimodal mock-interview platform that analyzes facial expressions, voice patterns, and content quality to provide real-time, personalized feedback. Built end-to-end pipeline with emotion/voice analysis, semantic scoring, LLM coaching, and analytics dashboard. Research with 73 respondents showed 93% interest and 60% willingness to pay, signaling strong product-market fit.',
    technologies: ['Llama LLM', 'Facial Recognition', 'Voice Analysis', 'Semantic Scoring', 'React', 'Python', 'Emotion AI'],
    image: '/images/harry-mocker-interview.png',
    period: 'ONGOING RESEARCH PROJECT',
    role: 'Lead Engineer/Developer',
    status: 'ongoing',
    sourceUrl: null,
  },
  {
    title: 'ChoreoXplore — Procedural Dance Visuals',
    description:
      'HCI thesis prototype that transforms music into responsive, procedurally generated visuals to help choreographers break creative blocks. Designed multimodal audio→prompt→Stable Diffusion pipeline with Unity rendering, live controls, and projection mapping for immersive studio environments. Treats visuals as an active creative partner rather than passive backdrop.',
    technologies: ['Stable Diffusion', 'Unity', 'Audio Analysis', 'Projection Mapping', 'HCI', 'Generative AI', 'Real-time Rendering'],
    image: '/images/choreoxplore-dancer.png',
    period: 'THESIS PROJECT',
    role: 'Lead Engineer/Developer',
    status: 'ongoing',
    sourceUrl: null,
  },
  {
    title: 'Ultimate Collection & Order Management System',
    description:
      'A comprehensive web application designed for a clothing company (ABSTRAKTMOTIF) to manage product collections, orders, expenses, and user interactions efficiently. Built with modern web technologies including JavaScript, MongoDB, and RESTful APIs.',
    technologies: ['JavaScript', 'MongoDB', 'Express.js', 'Node.js', 'RESTful APIs', 'Web Application'],
    image: '/images/abstrak-motif-sculpture.png',
    period: 'COMPLETED',
    role: 'Lead Software Engineer',
    status: 'shipped',
    sourceUrl: 'https://github.com/AhStayinAlive/The-Ultimate-Collection-and-Order-Management-System',
  },
]

export default projects

