"use client"

import { useState, useEffect } from "react"
import { Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollRevealText from "@/components/scroll-reveal-text"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("hero-profile")?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / 20
        const deltaY = (e.clientY - centerY) / 20
        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Minimalist Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <ScrollRevealText direction="up" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-red-950/20 border border-red-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <span className="text-red-400 text-sm">Available for new opportunities</span>
            </div>
          </ScrollRevealText>

          <ScrollRevealText direction="up" delay={200}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 uppercase tracking-wide leading-none">
              Joseph Dean
            </h1>
          </ScrollRevealText>

          <ScrollRevealText direction="up" delay={400}>
            <h2 className="text-2xl md:text-3xl font-light text-slate-300">Data Engineer & Software Developer</h2>
          </ScrollRevealText>

          <ScrollRevealText direction="up" delay={600}>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I craft accessible, pixel-perfect data pipelines and software solutions that blend thoughtful engineering
              with robust performance. Currently building the future of retail tech at{" "}
              <span className="text-red-400">ING Hubs Philippines</span>.
            </p>
          </ScrollRevealText>

          <ScrollRevealText direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/joseph-dean-te-enriquez/"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Message me on LinkedIn</span>
              </Link>
              <a
                href="mailto:joseph.enriquez@example.com"
                className="group inline-flex items-center justify-center space-x-2 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-red-300 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </ScrollRevealText>

          <ScrollRevealText direction="up" delay={1000}>
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <span>5+ Years Experience</span>
              <span>•</span>
              <span>15+ Projects Delivered</span>
            </div>
          </ScrollRevealText>
        </div>

        {/* Right Side - Clean Profile */}
        <div className="order-1 lg:order-2 flex justify-center">
          <ScrollRevealText direction="scale" delay={300}>
            <div
              id="hero-profile"
              className="relative w-80 h-80 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Single subtle ring */}
              <div
                className="absolute inset-0 rounded-full border border-red-500/20 transition-all duration-500"
                style={{
                  transform: `scale(${isHovered ? 1.05 : 1})`,
                  borderColor: isHovered ? "rgba(239, 68, 68, 0.4)" : "rgba(239, 68, 68, 0.2)",
                }}
              />

              {/* Main profile image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 transition-all duration-500"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  boxShadow: isHovered
                    ? "0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(239, 68, 68, 0.2)"
                    : "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Image
                  src="/images/joseph-profile.png"
                  alt="Joseph Dean Te Enriquez"
                  fill
                  className={`object-cover transition-all duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
                />

                {/* Subtle overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <ScrollRevealText direction="up" delay={1200}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-slate-500 hover:text-red-400 transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </ScrollRevealText>
    </section>
  )
}

export default Hero
