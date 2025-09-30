"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Calendar, ArrowUpRight } from "lucide-react"
import ScrollRevealText from "@/components/scroll-reveal-text"

interface DetailPanelProps {
  isOpen: boolean
  onClose: () => void
  item: any
  type: "experience" | "project"
}

const DetailPanel = ({ isOpen, onClose, item, type }: DetailPanelProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  // ING-specific photos
  const ingPhotos = [
    {
      src: "/images/ing-office-view.jpeg",
      caption: "Office Workspace & City Views",
      description: "My daily workspace with Manila's stunning skyline - where data engineering happens",
    },
    {
      src: "/images/ing-onboarding.jpeg",
      caption: "AWOW Onboarding Session",
      description: "Learning the Agile Way of Working with the amazing ING team",
    },
    {
      src: "/images/ing-team-1.jpeg",
      caption: "Tech Workshop & Team Collaboration",
      description: "Working together on data pipeline solutions and sharing knowledge",
    },
    {
      src: "/images/ing-team-2.jpeg",
      caption: "Team Outing & Bonding",
      description: "Building stronger relationships outside the office environment",
    },
    {
      src: "/images/ing-team-3.jpeg",
      caption: "Outdoor Team Activities",
      description: "Enjoying nature and team building exercises together",
    },
    {
      src: "/images/ing-team-4.jpeg",
      caption: "Training & Development",
      description: "Presentation skills workshop and professional development",
    },
  ]

  // Shopee-specific photos
  const shopeePhotos = [
    {
      src: "/images/shopee-logo-professional.png",
      caption: "Professional Milestone",
      description: "Celebrating achievements at Shopee - representing the electronics cluster team",
    },
    {
      src: "/images/shopee-office-wall.png",
      caption: "Modern Office Design",
      description: "Shopee's signature orange and blue dot pattern - where innovation meets creativity",
    },
    {
      src: "/images/shopee-meeting-area.png",
      caption: "Collaboration Spaces",
      description: "Clean, modern meeting areas where we planned campaigns and analyzed data",
    },
    {
      src: "/images/shopee-team-group.png",
      caption: "Business Development Electronics Team",
      description:
        "My amazing team from the Business Development Electronics division - the people who made every project successful",
    },
    {
      src: "/images/shopee-team-dinner.png",
      caption: "Team Bonding Dinner",
      description:
        "Celebrating successful campaigns and building relationships beyond work with the BD Electronics team",
    },
    {
      src: "/images/shopee-elevator-selfie.png",
      caption: "Daily Work Life",
      description: "Coffee in hand, ready to tackle another day of data analysis and campaign optimization",
    },
  ]

  const renderExperienceDetail = () => (
    <div className="space-y-16">
      {/* Header with smooth entry */}
      <ScrollRevealText direction="scale" delay={100}>
        <div className="border-b border-slate-700/30 pb-8">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 uppercase tracking-wide mb-3">
              {item.title}
            </h1>
            <h2 className="text-2xl font-medium text-slate-200 mb-2 flex items-center">
              {item.company}
              {item.isFreelance && (
                <span className="ml-3 inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 border border-green-500/20">
                  Freelance
                </span>
              )}
            </h2>
            <div className="flex items-center text-slate-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {item.period}
            </div>
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300"
            >
              <span>
                Visit Company
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          )}
        </div>
      </ScrollRevealText>

      {/* Description */}
      <ScrollRevealText direction="fade" delay={200}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-4">Role Overview</h3>
          {item.company === "ING Hubs Philippines" && (
            <p className="text-slate-300 leading-relaxed text-lg">
              As a Data Engineer Intern at ING Hubs Philippines, I focus on building resilient data infrastructure and
              automation systems. My primary achievement was designing an internal static table management system that
              eliminated dependencies on the global data platform, preventing pipeline disruptions and improving
              developer productivity. I've automated critical processes using Apache Airflow DAGs and extended these
              solutions to optimize mock data materialization workflows, creating repeatable frameworks that strengthen
              system reliability across the organization.
            </p>
          )}
          {item.company === "Shopee" && (
            <p className="text-slate-300 leading-relaxed text-lg">
              As a Category Management Planner Intern at Shopee, I specialized in data-driven campaign optimization and
              business intelligence for the electronics cluster. My primary achievements included designing Excel
              pipelines that handled 600K+ data points for Shopee Mall, contributing to significantly higher growth
              rates than all other business units. I developed comprehensive tracking systems that optimized 25+
              marketing campaigns and automated weekly rebate processes, enabling account managers to effectively manage
              550+ mall shops while maintaining our position as the top e-commerce market share leader in electronics.
            </p>
          )}
          {item.company === "Freelance" && (
            <p className="text-slate-300 leading-relaxed text-lg">
              As a Freelance Shopify Developer & E-commerce Consultant, I specialize in creating custom,
              conversion-focused online stores for small to medium businesses. I leverage the data-driven approach and
              automation expertise gained from my corporate roles to build scalable e-commerce platforms. My work
              focuses on custom theme development, performance optimization, and creating dynamic components that
              enhance user experience and drive business growth. I've successfully implemented flexible schema
              configurations, responsive design systems, and integrated testimonial showcases that significantly improve
              conversion rates for my clients.
            </p>
          )}
        </div>
      </ScrollRevealText>

      {/* Key Responsibilities */}
      <ScrollRevealText direction="up" delay={300}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-6">Key Responsibilities</h3>
          <div className="space-y-4">
            {item.company === "ING Hubs Philippines" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">System Architecture</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Designed and implemented an internal static table management system within ClientServices,
                      eliminating dependency on ING's global data platform crashes and reducing pipeline downtime
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Automation & CI/CD</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Automated entire reference data lifecycle using Airflow DAGs with singleton logic for resilience -
                      developers can now add entries in code and the system handles registration, validation,
                      deployment, and refresh automatically
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Process Optimization</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Extended automation framework to mock data materialization processes, eliminating manual PAM
                      change requests and reducing dependencies on external Hive tables and MSSQL processes
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Impact & Results</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Eliminated unnecessary downtime, minimized developer context-switching, and created a single
                      source of truth that enables teams to focus on innovation rather than maintenance
                    </p>
                  </div>
                </div>
              </>
            ) : item.company === "Shopee" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Data Pipeline Architecture
                    </p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Designed and implemented Excel pipelines handling 600K+ data points for Shopee Mall, contributing
                      to significantly higher growth rates than all other business units
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Campaign Optimization
                    </p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Developed comprehensive Add-to-Cart tracking system that optimized 25+ marketing campaigns,
                      significantly improving SKU management and rebate processes
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Automation & Analytics
                    </p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Automated weekly rebate tracker systems, enabling account managers to effectively visualize and
                      manage 550+ mall shops while maintaining market leadership
                    </p>
                  </div>
                </div>
              </>
            ) : item.company === "Freelance" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Custom Theme Development
                    </p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Built custom Shopify themes using Liquid templating language with responsive design and
                      mobile-first approach, creating scalable e-commerce solutions for growing businesses
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Dynamic Components</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Developed dynamic client testimonial systems with product integration, supporting up to 8
                      testimonials with advanced customization and schema-driven configuration
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Performance Optimization
                    </p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Optimized store performance and user experience through custom code, implementing flexible schema
                      configurations for easy client management and enhanced conversion rates
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Default for other companies
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Development</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Led full-stack development using modern technologies and best practices
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ScrollRevealText>

      {/* Featured Project Section - Only for Freelance */}
      {item.company === "Freelance" && (
        <ScrollRevealText direction="left" delay={400}>
          <div>
            <h3 className="text-xl font-medium text-slate-200 mb-6">
              Featured Project: Advanced Product Details Metafield System
            </h3>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">CHALLENGE</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Client needed a comprehensive product showcase system that could handle complex product information,
                    demonstration videos, and detailed feature descriptions through Shopify's metafield system, while
                    maintaining easy content management for non-technical users.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">SOLUTION</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Built an advanced Liquid component featuring three integrated carousels with sophisticated metafield
                    integration, media handling, responsive navigation, and 50+ customization options for complete
                    content management flexibility.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">IMPACT</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Enhanced product presentation capabilities through rich media experiences, seamless catalog
                  integration, and professional product storytelling, leading to improved customer understanding and
                  conversion rates.
                </p>
              </div>
            </div>
          </div>
        </ScrollRevealText>
      )}

      {/* Technologies */}
      <ScrollRevealText direction="right" delay={500}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-6">Technologies Used</h3>
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {item.technologies.map((tech: string, index: number) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:scale-105">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollRevealText>

      {/* Fun Moments Section - Show for both ING and Shopee */}
      {(item.company === "ING Hubs Philippines" || item.company === "Shopee") && (
        <ScrollRevealText direction="up" delay={600}>
          <div>
            <h3 className="text-xl font-medium text-slate-200 mb-6">Where We Had Fun</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              {item.company === "ING Hubs Philippines"
                ? "Beyond the professional work, here are some memorable moments from my time at ING. These experiences show how we built strong relationships, learned together, and created lasting memories as a team."
                : "Beyond the data analysis and campaign optimization, here are some memorable moments from my time at Shopee. These experiences show how we built strong relationships with the Business Development Electronics team, celebrated successes, and created lasting memories together."}
            </p>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {(item.company === "ING Hubs Philippines" ? ingPhotos : shopeePhotos).map((photo, index) => (
                <div key={index} className="group relative aspect-[4/3] bg-slate-800 rounded-lg overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-medium text-sm mb-1">{photo.caption}</h4>
                    <p className="text-xs text-slate-200">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {item.company === "ING Hubs Philippines"
                ? "These moments remind me that great work happens when teams connect beyond just professional tasks. At ING, we didn't just build data pipelines together – we built relationships, shared knowledge, and supported each other's growth. The collaborative culture and team spirit made every challenge more manageable and every success more meaningful."
                : "These moments remind me that great work happens when teams connect beyond just professional tasks. At Shopee, working with the Business Development Electronics team wasn't just about optimizing campaigns and analyzing data – we built genuine relationships, celebrated wins together, and supported each other's growth. The collaborative culture and team spirit made every challenge more manageable and every success more meaningful."}
            </p>
          </div>
        </ScrollRevealText>
      )}
    </div>
  )

  const renderProjectDetail = () => (
    <div className="space-y-16">
      {/* Header with smooth entry */}
      <ScrollRevealText direction="scale" delay={100}>
        <div className="border-b border-slate-700/30 pb-8">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 uppercase tracking-wide mb-3">
              {item.title}
            </h1>
            <p className="text-slate-400 text-lg">Personal Project</p>
          </div>
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300"
            >
              <span>
                View Source Code
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          )}
        </div>
      </ScrollRevealText>

      {/* Project Overview */}
      <ScrollRevealText direction="fade" delay={200}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-4">Project Overview</h3>
          <p className="text-slate-300 leading-relaxed text-lg">{item.description}</p>
        </div>
      </ScrollRevealText>

      {/* Problem & Solution */}
      <ScrollRevealText direction="up" delay={300}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-6">Problem & Solution</h3>
          <div className="space-y-4">
            {item.title === "Harry Mocker — AI Interview Coach" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Early-career candidates lack objective, structured feedback; practice tools are usually unimodal
                      and don't connect delivery with content.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      A multimodal mock-interview coach that analyzes facial expressions, voice (pitch/pace/prosody),
                      and answer content, then delivers real-time, context-aware feedback via an LLM plus an analytics
                      dashboard.
                    </p>
                  </div>
                </div>
              </>
            ) : item.title === "ChoreoXplore — Procedural Dance Visuals" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Choreographers hit creative blocks; existing tools focus on steps/annotation and treat visuals as
                      a passive backdrop, breaking flow.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      An immersive, projection-based system that turns music into responsive, procedurally generated
                      visuals (audio → prompt → Stable Diffusion → Unity) with live controls to keep dancers in flow.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Default content for other projects
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Needed efficient data management and user interaction in modern web applications
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Implemented scalable architecture using modern frameworks and best practices
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ScrollRevealText>

      {/* Key Features */}
      <ScrollRevealText direction="left" delay={400}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-6">Key Features</h3>
          <div className="space-y-4">
            {item.title === "Harry Mocker — AI Interview Coach" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Emotion + Voice</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Facial expression and voice feature analysis with temporal smoothing to reduce false spikes and
                      anxiety-driven noise.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contextual Feedback</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Embeddings map answers to intent categories (leadership, problem-solving, impact); LLM provides
                      STAR/CAR guidance and role-aware tips.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Trust & Insights</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Emotion Override/Confirm UI for transparency; session summaries, trends, and benchmarks to track
                      improvement.
                    </p>
                  </div>
                </div>
              </>
            ) : item.title === "ChoreoXplore — Procedural Dance Visuals" ? (
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reactive Visuals</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Real-time visuals synchronized to audio features (tempo/mood/frequency) to nudge new movement
                      ideas.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Live Controls</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      On-screen sliders for speed, intensity, color, and reactivity; quick actions to rewind, favorite,
                      and queue visual states without disrupting improvisation.
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Studio-Ready</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Projection mapping with camera + mirror; no wearables; drop-in setup for typical rehearsal spaces.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Default content for other projects
              <>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Authentication</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Secure login system with role-based access control and session management
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Real-time</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Live data synchronization across all connected clients with WebSocket integration
                    </p>
                  </div>
                </div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Responsive</p>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <p className="text-sm leading-normal text-slate-300">
                      Optimized for all devices and screen sizes with mobile-first design approach
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ScrollRevealText>

      {/* Technologies */}
      <ScrollRevealText direction="right" delay={500}>
        <div>
          <h3 className="text-xl font-medium text-slate-200 mb-6">Technologies Used</h3>
          <ul className="flex flex-wrap" aria-label="Technologies used">
            {item.technologies.map((tech: string, index: number) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 transition-all duration-300 hover:bg-red-500/20 hover:scale-105">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollRevealText>

      {/* Live Demo Section */}
      <ScrollRevealText direction="scale" delay={600}>
        <div className="border-t border-slate-700/30 pt-8">
          <h3 className="text-xl font-medium text-slate-200 mb-4">Explore Project</h3>
          <div className="flex gap-4">
            <a
              href={item.links?.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-400 focus-visible:text-red-400 group/link text-base transition-colors duration-300"
            >
              <span>
                View Source Code
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
              </span>
            </a>
          </div>
        </div>
      </ScrollRevealText>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop with smooth fade */}
      <div
        className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Panel with smooth slide */}
      <div
        className={`relative ml-auto w-full lg:w-3/4 xl:w-2/3 bg-slate-900 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 25%, #0f0f0f 50%, #1a0505 75%, #0a0a0a 100%)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-red-400 transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content with scroll animations */}
        <div className="h-full overflow-y-auto px-8 py-16 lg:px-12">
          {type === "experience" ? renderExperienceDetail() : renderProjectDetail()}
        </div>
      </div>
    </div>
  )
}

export default DetailPanel
