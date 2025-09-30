"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade"
  trigger?: "enter" | "center" | "exit"
}

const ScrollRevealText = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  trigger = "enter",
}: ScrollRevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const triggerPoint = trigger === "center" ? 0.5 : trigger === "exit" ? 0.1 : 0.3

        if (entry.isIntersecting && entry.intersectionRatio >= triggerPoint && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 1.0],
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, trigger, hasAnimated])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} translate-y-20 opacity-0`
        case "down":
          return `${baseClasses} -translate-y-20 opacity-0`
        case "left":
          return `${baseClasses} translate-x-20 opacity-0`
        case "right":
          return `${baseClasses} -translate-x-20 opacity-0`
        case "scale":
          return `${baseClasses} scale-75 opacity-0`
        case "fade":
          return `${baseClasses} opacity-0`
        default:
          return `${baseClasses} translate-y-20 opacity-0`
      }
    }

    return `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}

export default ScrollRevealText
