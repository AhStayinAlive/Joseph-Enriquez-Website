"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("about")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "hobbies"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }

      setRotation(window.scrollY * 0.1)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("profile-container")?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / 10
        const deltaY = (e.clientY - centerY) / 10
        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "hobbies", label: "HOBBIES" },
  ]

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
      <div>
        {/* Clean Profile Picture */}
        <div
          id="profile-container"
          className="relative w-48 h-48 mx-auto mb-6 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 rounded-full">
            <div
              className={`absolute inset-0 rounded-full border-2 border-red-500/30 transition-all duration-700 ${
                isHovered ? "scale-110 border-red-400/60" : "scale-100"
              }`}
              style={{
                transform: `rotate(${rotation}deg) scale(${isHovered ? 1.1 : 1})`,
              }}
            ></div>
            <div
              className={`absolute inset-2 rounded-full border border-red-400/20 transition-all duration-500 ${
                isHovered ? "scale-105 border-red-300/50" : "scale-100"
              }`}
              style={{
                transform: `rotate(${-rotation * 0.8}deg) scale(${isHovered ? 1.05 : 1})`,
              }}
            ></div>
            <div
              className={`absolute inset-4 rounded-full border border-red-300/10 transition-all duration-300 ${
                isHovered ? "scale-102 border-red-200/30" : "scale-100"
              }`}
              style={{
                transform: `rotate(${rotation * 1.2}deg) scale(${isHovered ? 1.02 : 1})`,
              }}
            ></div>
          </div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-red-400 rounded-full transition-all duration-1000 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                top: `${20 + Math.sin((i * Math.PI) / 4) * 30}%`,
                left: `${50 + Math.cos((i * Math.PI) / 4) * 35}%`,
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(${
                  isHovered ? 1.5 : 0.5
                })`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}

          {/* Main profile image container */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 transition-all duration-500 shadow-2xl"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(${
                mousePosition.y * 0.1
              }deg) rotateY(${mousePosition.x * 0.1}deg)`,
              boxShadow: isHovered
                ? "0 25px 50px -12px rgba(239, 68, 68, 0.4), 0 0 0 1px rgba(239, 68, 68, 0.2)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Animated overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-900/20 transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Scanning line effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent transition-all duration-2000 ${
                isHovered ? "translate-x-full" : "-translate-x-full"
              }`}
              style={{
                width: "200%",
                height: "2px",
                top: "50%",
                left: "-100%",
              }}
            ></div>

            {/* Profile image */}
            <Image
              src="/images/joseph-profile.png"
              alt="Joseph Dean Te Enriquez"
              fill
              className={`object-cover transition-all duration-500 ${
                isHovered ? "scale-110 brightness-110" : "scale-100 brightness-100"
              }`}
              style={{
                filter: isHovered ? "contrast(1.1) saturate(1.2)" : "contrast(1) saturate(1)",
              }}
            />

            {/* Glowing border effect */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isHovered ? "shadow-[inset_0_0_20px_rgba(239,68,68,0.3)]" : ""
              }`}
            ></div>
          </div>

          {/* Floating name tag */}
          <div
            className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2">
              <p className="text-red-400 text-sm font-medium">Joseph Dean</p>
            </div>
          </div>

          {/* Pulsing glow effect */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${isHovered ? "animate-pulse" : ""}`}
            style={{
              background: isHovered
                ? "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)"
                : "transparent",
            }}
          ></div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl text-center lg:text-left">
          <a href="/">Joseph Dean Te Enriquez</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl text-center lg:text-left">
          Data Engineer | Software Developer
        </h2>
        <p className="mt-3 max-w-xs leading-normal text-slate-400 text-center lg:text-left mx-auto lg:mx-0">
          I build accessible, pixel-perfect data pipelines and software solutions for the web.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-8 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center py-3 ${activeSection === item.id ? "active" : ""}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === item.id
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === item.id ? "text-slate-200" : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-6">
        <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-4" aria-label="Social media">
          <li>
            <a
              className="block hover:text-red-400 transition-all duration-300 hover:scale-110"
              href="https://github.com/AhStayinAlive"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <Github className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              className="block hover:text-red-400 transition-all duration-300 hover:scale-110"
              href="https://www.linkedin.com/in/joseph-dean-te-enriquez/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              className="block hover:text-red-400 transition-all duration-300 hover:scale-110"
              href="mailto:joseph.enriquez@example.com"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </li>
          <li>
            <Link
              className="block hover:text-red-400 transition-all duration-300 hover:scale-110"
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/joseph-dean-te-enriquez/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message me on LinkedIn (opens in a new tab)"
            >
              <FileText className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Sidebar
