"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "hobbies"]
      const scrollPosition = window.scrollY + 200

      setIsScrolled(window.scrollY > 50)

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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
  ]

  return (
    <>
      {/* Minimal Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Simple Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700">
              <Image src="/images/joseph-profile.png" alt="Joseph Dean Te Enriquez" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-medium text-slate-200">Joseph Dean</h1>
            </div>
          </div>

          {/* Clean Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === item.id ? "text-red-400" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Minimal Social Links */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://github.com/AhStayinAlive"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-red-400 transition-colors duration-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-dean-te-enriquez/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-red-400 transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:joseph.enriquez@example.com"
                className="text-slate-400 hover:text-red-400 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-red-400 transition-colors duration-300"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-400 hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/95" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-6 right-6 bg-slate-900/95 rounded-lg border border-slate-800 p-6 transform transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-red-400 bg-red-500/10"
                    : "text-slate-300 hover:text-red-400 hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-800">
            <a
              href="https://github.com/AhStayinAlive"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-dean-te-enriquez/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:joseph.enriquez@example.com"
              className="text-slate-400 hover:text-red-400 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors duration-300"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
