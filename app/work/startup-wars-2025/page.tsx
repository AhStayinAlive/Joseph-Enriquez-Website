"use client"

import React from "react"
import { notFound } from "next/navigation"
import projects from "@/data/projects"
import ProjectModal from "@/components/ProjectModal"

export default function StartupWars2025() {
  const p = projects.find((x) => x.title.startsWith("Startup Wars 2025"))
  if (!p || !p.modal) return notFound()

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-16">
      <ProjectModal
        isOpen={true}
        onClose={() => (window.location.href = "/#projects")}
        title="Startup Wars 2025"
        subtitle={p.modal.subtitle}
        pills={p.modal.pills}
        sections={p.modal.sections.map((s) => ({ heading: s.heading, body: Array.isArray(s.body) ? (
          <ul className="list-disc pl-5 space-y-1 text-slate-300">{s.body.map((it, i) => <li key={i}>{it}</li>)}</ul>
        ) : (<p>{s.body}</p>) }))}
        accent={p.modal.accent || 'orange'}
      />
    </div>
  )
}
