"use client"

import { useState } from "react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Hobbies from "@/components/sections/hobbies"
import DetailPanel from "@/components/detail-panel"

const MainContent = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [selectedType, setSelectedType] = useState<"experience" | "project" | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleItemClick = (item: any, type: "experience" | "project") => {
    setSelectedItem(item)
    setSelectedType(type)
    setIsPanelOpen(true)
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
    setTimeout(() => {
      setSelectedItem(null)
      setSelectedType(null)
    }, 300)
  }

  return (
    <>
      <main className="pt-20">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          <About />
          <Experience onItemClick={handleItemClick} />
          <Projects onItemClick={handleItemClick} />
          <Hobbies />
        </div>
      </main>

      {selectedItem && selectedType && (
        <DetailPanel isOpen={isPanelOpen} onClose={handleClosePanel} item={selectedItem} type={selectedType} />
      )}
    </>
  )
}

export default MainContent
