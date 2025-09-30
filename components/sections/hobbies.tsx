"use client"

import ScrollRevealText from "@/components/scroll-reveal-text"
import SectionHeader from "@/components/section-header"
import { SaveAll as Basketball, Coffee, Calendar, Book, Plane, Users, Code2, Trophy, X } from "lucide-react"
import { useState } from "react"

const hobbies = [
  {
    name: "Basketball",
    icon: Basketball,
    description: "Playing since grade school - my longest passion that keeps me active and competitive",
    image: "/images/basketball-friends.jpeg",
  },
  {
    name: "Freelance Work",
    icon: Code2,
    description: "Taking on projects through Upwork to expand my skills and help businesses grow",
    image: "/images/freelance-broen.png",
  },
  {
    name: "Growth Events",
    icon: Calendar,
    description: "Attending workshops and events focused on personal development like Presentation Presence",
    image: "/images/presentation-workshop.png",
  },
  {
    name: "Comic Books",
    icon: Book,
    description: "Batman and Invincible are my favorites - drawn to complex characters and compelling narratives",
    image: "/images/comic-collection.jpeg",
  },
  {
    name: "Movies & Shows",
    icon: Users,
    description: "Whodunnits and mystery films - love trying to solve the puzzle before the reveal",
    image: "/images/movie-theater.png",
  },
  {
    name: "Coffee Culture",
    icon: Coffee,
    description: "Started because of my mom, now I'm always exploring new cafes and brewing methods",
    image: "/images/coffee-shop.jpeg",
  },
  {
    name: "Travel",
    icon: Plane,
    description: "Exploring new places and experiencing different cultures - every trip teaches me something new",
    image: "/images/travel-coffee-europe.png",
  },
  {
    name: "Competitions",
    icon: Trophy,
    description: "Recently into hackathons and case competitions - love the collaborative problem-solving",
    image: "/images/hackathon-setup.png",
  },
]

const Hobbies = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (image: string, name: string) => {
    setSelectedImage({ src: image, alt: name })
  }

  const closeImageViewer = () => {
    setSelectedImage(null)
  }

  return (
    <section id="hobbies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hobbies</h2>
      </div>

      <SectionHeader title="HOBBIES" subtitle="What keeps me balanced and inspired" />

      <div>
        <ScrollRevealText direction="fade" delay={0}>
          <p className="mb-12 text-lg leading-relaxed text-slate-300">
            Beyond the world of data and code, these interests keep me grounded, creative, and constantly learning. From
            the basketball court to coffee shops, each hobby brings a different perspective that enriches both my
            personal life and professional work.
          </p>
        </ScrollRevealText>

        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <ScrollRevealText
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 100}
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-950/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* Hobby Image */}
              <div className="z-10 sm:order-2 sm:col-span-2">
                <div
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-slate-200/10 transition-all duration-300 group-hover:border-slate-200/30 group-hover:scale-105 cursor-pointer"
                  onClick={() => handleImageClick(hobby.image, hobby.name)}
                >
                  <img
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <hobby.icon className="w-4 h-4 text-red-400" />
                  </div>
                </div>
              </div>

              {/* Hobby Content */}
              <div className="z-10 sm:order-1 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200 mb-2 flex items-center">
                  <hobby.icon className="w-5 h-5 text-red-400 mr-3" />
                  {hobby.name}
                </h3>
                <p className="text-sm leading-normal text-slate-300">{hobby.description}</p>
              </div>
            </ScrollRevealText>
          ))}
        </div>

        <ScrollRevealText direction="scale" delay={1000}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
              These hobbies remind me that the best solutions come from diverse experiences and perspectives. Whether
              it's the strategic thinking from basketball, the patience learned from coffee brewing, or the
              problem-solving skills from competitions and growth events - each interest contributes to who I am as both
              a person and a professional.
            </p>
          </div>
        </ScrollRevealText>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeImageViewer}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hobbies
