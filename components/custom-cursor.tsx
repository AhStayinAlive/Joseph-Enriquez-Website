"use client"

import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnterLink = () => setCursorVariant("link")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners to all interactive elements
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    },
  }

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${variants[cursorVariant as keyof typeof variants].x}px`,
          top: `${variants[cursorVariant as keyof typeof variants].y}px`,
          transform: `scale(${variants[cursorVariant as keyof typeof variants].scale})`,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${mousePosition.x - 2}px`,
          top: `${mousePosition.y - 2}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
