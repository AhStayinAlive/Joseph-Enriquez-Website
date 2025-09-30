import React from "react"
import Header from "@/components/header"
import MainContent from "@/components/main-content"
import CustomCursor from "@/components/custom-cursor"
import ScrollProgress from "@/components/scroll-progress"
import FloatingDocCTA from "@/components/floating-doc-cta"

export const revalidate = 86400

async function getProjects() {
  const init: RequestInit = { cache: 'force-cache' } as any
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || ''
    const res = await fetch(`${base}/api/projects`, { ...(init as any), next: { revalidate: 86400 } } as any)
    if (res.ok) return res.json()
  } catch {}
  const res2 = await fetch(`/api/projects`, { ...(init as any), next: { revalidate: 86400 } } as any)
  return res2.json()
}

export default async function Home() {
  const projects = await getProjects().catch(() => [])
  return (
    <div className="min-h-screen text-slate-300 relative">
      <CustomCursor />
      <ScrollProgress />

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-red-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-950/5 to-red-800/8"></div>
      </div>

      <div className="relative z-40">
        <Header />
        {/* Pass projects to client content for fast rendering */}
        {/* @ts-expect-error Server-to-client prop */}
        <MainContent projectsData={projects} />
      </div>

      <FloatingDocCTA />
    </div>
  )
}
