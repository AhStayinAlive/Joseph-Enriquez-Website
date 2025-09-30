"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const DynamicProfile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
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

    const handleScroll = () => {
      setRotation(window.scrollY * 0.1)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      id="profile-container"
      className="relative w-64 h-64 mx-auto mb-8 group"
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
          background: isHovered ? "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)" : "transparent",
        }}
      ></div>
    </div>
  )
}

export default DynamicProfile
