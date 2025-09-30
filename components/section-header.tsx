"use client"

import ScrollRevealText from "@/components/scroll-reveal-text"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  // More conservative font sizing to prevent cutoff
  const getFontSizeClass = (title: string) => {
    if (title.length > 8) {
      return "text-3xl md:text-5xl lg:text-6xl xl:text-7xl" // Much smaller for long titles like "EXPERIENCE"
    } else if (title.length > 6) {
      return "text-4xl md:text-6xl lg:text-7xl xl:text-8xl" // Medium for titles like "PROJECTS"
    } else {
      return "text-5xl md:text-7xl lg:text-8xl xl:text-9xl" // Largest for short titles like "ABOUT"
    }
  }

  return (
    <div className={`mb-16 overflow-hidden ${className}`}>
      <ScrollRevealText
        direction="scale"
        delay={0}
        className={`${getFontSizeClass(title)} font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600 uppercase tracking-wide mb-4 transition-all duration-1000 ease-out leading-none`}
      >
        {title}
      </ScrollRevealText>
      {subtitle && (
        <ScrollRevealText
          direction="up"
          delay={300}
          className="text-xl md:text-2xl text-slate-400 font-light tracking-wide"
        >
          {subtitle}
        </ScrollRevealText>
      )}
    </div>
  )
}

export default SectionHeader
