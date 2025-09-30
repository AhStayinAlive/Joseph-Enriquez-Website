"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/ButtonLink"

type CTA = { label: string; href: string; external?: boolean }

export type ProjectModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  subtitle?: string
  tags: string[]
  coverSrc: string
  body: React.ReactNode
  ctas?: CTA[]
}

export default function ProjectModal({ open, onOpenChange, title, subtitle, tags, coverSrc, body, ctas }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false)
    }
    if (open) window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden sm:max-w-3xl bg-slate-950/95 backdrop-blur-md border-slate-800">
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-slate-700/60">
              <Image src={coverSrc} alt={title} fill sizes="64px" className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-slate-100">{title}</h2>
              {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
              {tags?.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t, i) => (
                    <li key={i} className="px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none mt-6 text-slate-300">{body}</div>

          {ctas && ctas.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <ButtonLink key={c.label} href={c.href} external={c.external} variant="primary" size="sm">
                  {c.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

