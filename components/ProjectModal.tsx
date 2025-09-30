"use client"

import React, { useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  pills?: { label: string }[]
  sections: { heading: string; body: React.ReactNode }[]
  accent?: "orange" | "blue" | "pink" | "gray"
}

const accentMap: Record<NonNullable<ProjectModalProps["accent"]>, string> = {
  orange: "from-orange-400 via-red-500 to-red-600",
  blue: "from-sky-400 via-blue-500 to-indigo-600",
  pink: "from-pink-400 via-fuchsia-500 to-purple-600",
  gray: "from-slate-300 via-slate-400 to-slate-500",
}

export default function ProjectModal({ isOpen, onClose, title, subtitle, pills, sections, accent = "orange" }: ProjectModalProps) {
  // Close on ESC for safety even though Radix handles it; ensures consistency when embedded elsewhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-w-4xl w-[92vw] md:w-[80vw] bg-slate-900 border border-slate-800 px-6 py-8 md:px-10 md:py-10 focus:outline-none"
      >
        <div className="mb-6">
          <DialogTitle asChild>
            <h1 id="project-modal-title" className={cn("text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r", accentMap[accent], "mb-2")}>{title}</h1>
          </DialogTitle>
          {subtitle && <p className="text-slate-300 text-base md:text-lg">{subtitle}</p>}
          {!!pills?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {pills.map((p, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 border border-red-500/20">
                  {p.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-1">
          {sections.map((sec, idx) => (
            <section key={idx} className="border-t border-slate-700/30 pt-6 first:border-0 first:pt-0">
              <h2 className="text-xl font-medium text-slate-200 mb-3">{sec.heading}</h2>
              <div className="text-slate-300 leading-relaxed text-base">{sec.body}</div>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

