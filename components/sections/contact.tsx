"use client"

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-light text-gray-400 mb-12 tracking-wide">Contact</h2>

        <div className="space-y-6 text-gray-600 font-light">
          <div>
            <a
              href="mailto:joseph.enriquez@example.com"
              className="text-lg md:text-xl hover:text-gray-800 transition-colors duration-300"
            >
              joseph.enriquez@example.com
            </a>
          </div>

          <div className="flex justify-center space-x-8 pt-8">
            <a
              href="https://linkedin.com/in/josephdeanenriquez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300 font-light"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/josephdean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300 font-light"
            >
              GitHub
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/joseph-dean-te-enriquez/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300 font-light"
            >
              Message me on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
