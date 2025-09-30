"use client"

import React from "react"
import { FileText } from "lucide-react"
import { LINKEDIN_URL } from "@/lib/links"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type FloatingDocCTAProps = {
  href?: string
  tooltip?: string
}

export default function FloatingDocCTA({ href = LINKEDIN_URL, tooltip = "Message me on LinkedIn" }: FloatingDocCTAProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tooltip}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-black/70 text-slate-300 hover:text-red-400 hover:border-red-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <FileText className="h-5 w-5" />
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={6} className="rounded bg-slate-800 px-3 py-1.5 text-sm text-slate-200 shadow">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

