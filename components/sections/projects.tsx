"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import ScrollRevealText from "@/components/scroll-reveal-text"
import SectionHeader from "@/components/section-header"
import Link from "next/link"
import Image from "next/image"
import type { ProjectItem } from "@/data/projects"
import { ButtonLink } from "@/components/ui/ButtonLink"

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Allow onClick on ButtonLink via Link
  }
}

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyMxMTExMTInLz48L3N2Zz4="

interface ProjectsProps {
  onItemClick: (item: any, type: "experience" | "project") => void
  onOpenProjectModal?: (project: ProjectItem) => void
}

const Projects = ({ onItemClick, onOpenProjectModal }: ProjectsProps) => {
  const [items, setItems] = useState<ProjectItem[]>([])

  useEffect(() => {
    let ignore = false
    ;(async () => {
      try {
        const res = await fetch("/api/projects", { next: { revalidate: 86400 } })
        const data = await res.json()
        if (!ignore) setItems(data.projects)
      } catch (e) {
        console.error("Failed to load projects", e)
      }
    })()
    return () => {
      ignore = true
    }
  }, [])

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>

      <SectionHeader title="PROJECTS" subtitle="Building solutions that make a difference" />

      <div>
        <ul className="group/list space-y-12">
          {items.map((project, index) => (
            <li key={index}>
              <ScrollRevealText
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 150}
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div
                  className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cursor-pointer ${
                    project.isCaseStudy ? "" : ""
                  }`}
                  onClick={() => {
                    if (project.isCaseStudy) {
                      onOpenProjectModal?.(project)
                    } else {
                      onItemClick(project, "project")
                    }
                  }}
                ></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    {project.isCaseStudy ? (
                      <Link
                        href="/work/startup-wars-2025"
                        onClick={(e) => {
                          e.preventDefault()
                          onOpenProjectModal?.(project)
                        }}
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <span className="ml-2 inline-flex items-center rounded-full bg-orange-500/10 px-2 py-1 text-xs font-medium text-orange-400 border border-orange-500/20">
                            Case Study
                          </span>
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => onItemClick(project, "project")}
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300 text-left"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                        </span>
                      </button>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  {project.imageNote && <p className="mt-2 text-xs text-slate-500 italic">{project.imageNote}</p>}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tags.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:scale-105">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {project.period && (
                    <div className="mt-2 text-xs text-slate-500 uppercase tracking-wide">{project.period}</div>
                  )}
                  {project.slug === "choreo-xplore" && (
                    <div className="mt-3">
                      <ButtonLink href="#" variant="primary" size="sm" onClick={undefined as never as any} />
                    </div>
                  )}
                </div>
                <Image
                  alt={project.title}
                  width={400}
                  height={240}
                  sizes="(max-width: 640px) 33vw, 200px"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="rounded border-2 border-slate-200/10 transition-all duration-300 group-hover:border-slate-200/30 group-hover:scale-105 sm:order-1 sm:col-span-2 sm:translate-y-1 cursor-pointer object-cover"
                  src={project.coverSrc || "/placeholder.svg"}
                  onClick={() => {
                    if (project.isCaseStudy) {
                      onOpenProjectModal?.(project)
                    } else {
                      onItemClick(project, "project")
                    }
                  }}
                />
              </ScrollRevealText>
            </li>
          ))}
        </ul>

        <ScrollRevealText direction="scale" delay={1000}>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group transition-all duration-300 hover:scale-105"
              aria-label="View Full GitHub Profile"
              href="https://github.com/AhStayinAlive"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-red-400 motion-reduce:transition-none">
                  View Full
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-red-400 motion-reduce:transition-none">
                    GitHub Profile
                  </span>
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </a>
          </div>
        </ScrollRevealText>
      </div>
    </section>
  )
}

export default Projects
