"use client"

import { useState } from "react"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import ProjectModal from "@/components/ProjectModal"
import StartupWarsModalBody from "@/components/startup-wars/ModalBody"
import type { ProjectItem } from "@/data/projects"
import Hobbies from "@/components/sections/hobbies"
import DetailPanel from "@/components/detail-panel"

const MainContent = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [selectedType, setSelectedType] = useState<"experience" | "project" | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [projectForModal, setProjectForModal] = useState<ProjectItem | null>(null)

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
          <Projects
            onItemClick={handleItemClick}
            onOpenProjectModal={(p) => {
              setProjectForModal(p)
              setProjectModalOpen(true)
            }}
          />
          <Hobbies />
        </div>
      </main>

      {selectedItem && selectedType && (
        <DetailPanel isOpen={isPanelOpen} onClose={handleClosePanel} item={selectedItem} type={selectedType} />
      )}
      {projectForModal && (
        <ProjectModal
          open={projectModalOpen}
          onOpenChange={setProjectModalOpen}
          title={projectForModal.title}
          subtitle={projectForModal.subtitle ?? projectForModal.role}
          tags={projectForModal.tags}
          coverSrc={projectForModal.coverSrc}
          body={<StartupWarsModalBody />}
          ctas={projectForModal.ctas}
        />
      )}
    </>
  )
}

export default MainContent
