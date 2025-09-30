"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const styles = cva(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-red-500 text-white hover:bg-red-600",
        secondary: "border border-slate-600 text-slate-200 hover:border-slate-500",
        ghost: "text-slate-300 hover:text-white",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export type ButtonLinkProps = VariantProps<typeof styles> & {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export function ButtonLink({ href, children, external, variant, size, className }: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href)
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(styles({ variant, size }), className)}
    >
      <span>{children}</span>
      {isExternal && <ArrowUpRight className="ml-1 h-4 w-4" />}
    </Link>
  )
}

