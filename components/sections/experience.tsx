"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"
import ScrollRevealText from "@/components/scroll-reveal-text"
import SectionHeader from "@/components/section-header"
import { LINKEDIN_URL } from "@/lib/links"

const experiences = [
  {
    period: "MAR 2025 — PRESENT",
    title: "Retail Tech Intern",
    company: "ING Hubs Philippines",
    description:
      "Designed and implemented an internal static table management system that eliminated dependencies on ING's global data platform, preventing pipeline disruptions and improving developer productivity. Automated entire reference data lifecycle using Apache Airflow DAGs with singleton logic for resilience. Extended automation framework to mock data materialization processes, eliminating manual PAM change requests and creating repeatable frameworks that optimize productivity across teams.",
    technologies: [
      "Apache Airflow",
      "Python",
      "SQL",
      "API Testing",
      "Data Engineering",
      "CI/CD",
      "System Architecture",
    ],
    link: "https://ing.com",
  },
  {
    period: "2024 — PRESENT",
    title: "Shopify Developer & E-commerce Consultant",
    company: "Freelance",
    description:
      "Specializing in custom Shopify theme development and e-commerce optimization for small to medium businesses. Built scalable, conversion-focused online stores using modern development practices. Created dynamic client testimonial systems with product integration, developed responsive e-commerce components, and implemented flexible schema configurations for easy client management. Enhanced social proof leading to improved conversion rates through custom Liquid components and performance optimization.",
    technologies: [
      "Shopify Liquid",
      "JavaScript",
      "HTML/CSS",
      "Responsive Design",
      "E-commerce Optimization",
      "Theme Customization",
    ],
    isFreelance: true,
  },
  {
    period: "SEPT 2024 — FEB 2025",
    title: "Category Management Planner Intern",
    company: "Shopee",
    description:
      "Designed and implemented Excel pipelines handling 600K+ data points for Shopee Mall, contributing to significantly higher growth rates than all other business units. Developed comprehensive Add-to-Cart tracking system that optimized 25+ marketing campaigns, significantly improving SKU management, rebate processes, and campaign efficiency across the electronics cluster. Automated weekly rebate tracker systems, enabling account managers to effectively visualize and manage 550+ mall shops while maintaining the electronics cluster's position as the top e-commerce market share leader.",
    technologies: [
      "Advanced Excel",
      "Data Analysis",
      "Campaign Management",
      "Dashboard Development",
      "Business Intelligence",
    ],
    link: "https://shopee.com",
  },
  {
    period: "MAY 2024 — OCT 2024",
    title: "Lead Software Engineer",
    company: "Abstrak Motif",
    description:
      "Led development of an e-commerce web app using JavaScript, MongoDB, and REST APIs. Deployed CI/CD pipelines with Playwright, GitHub Actions, and Node.js. Improved backend operations, reducing inventory holding time by 30%.",
    technologies: ["JavaScript", "MongoDB", "REST APIs", "CI/CD", "Playwright", "Node.js"],
  },
]

interface ExperienceProps {
  onItemClick: (item: any, type: "experience" | "project") => void
}

const Experience = ({ onItemClick }: ExperienceProps) => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>

      <SectionHeader title="EXPERIENCE" subtitle="My professional journey through tech" />

      <div>
        <ol className="group/list space-y-12">
          {experiences.map((exp, index) => (
            <li key={index}>
              <ScrollRevealText
                direction="up"
                delay={index * 200}
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cursor-pointer"
                  onClick={() => onItemClick(exp, "experience")}
                ></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <button
                        onClick={() => onItemClick(exp, "experience")}
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300 text-left"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="flex items-center">
                          {exp.title} · {exp.company}
                          {exp.isFreelance && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 border border-green-500/20">
                              Freelance
                            </span>
                          )}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1" />
                        </span>
                      </button>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:scale-105">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealText>
            </li>
          ))}
        </ol>

        <ScrollRevealText direction="scale" delay={800}>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group transition-all duration-300 hover:scale-105"
              aria-label="Message me on LinkedIn"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-red-400 motion-reduce:transition-none">
                  Message me on
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-red-400 motion-reduce:transition-none">
                    LinkedIn
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

export default Experience
