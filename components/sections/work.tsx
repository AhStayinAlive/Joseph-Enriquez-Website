"use client"

import { motion } from "framer-motion"

const workExperience = [
  {
    company: "ING Hubs Philippines",
    role: "Retail Tech Intern",
    period: "Mar 2025 - Present",
    description:
      "Centralized reference data across environments using Apache Airflow DAGs. Supported API testing and documented schema mappings for international integration.",
  },
  {
    company: "Shopee",
    role: "Category Management Planner Intern",
    period: "Sept 2024 - Feb 2025",
    description:
      "Built Excel pipelines handling 600K+ data points. Designed tracking systems for 25+ campaigns and created GMV dashboards for top 100 brands.",
  },
  {
    company: "Abstrak Motif",
    role: "Lead Software Engineer",
    period: "May 2024 - Oct 2024",
    description:
      "Led development of e-commerce web application. Deployed CI/CD pipelines and improved backend operations, reducing inventory holding time by 30%.",
  },
  {
    company: "CSINTSY",
    role: "Intelligent Systems Developer",
    period: "Sept 2023 - Dec 2023",
    description:
      "Built NLP chatbot with 85% accuracy for familial relationship inference. Developed Sokoban AI using search algorithms.",
  },
]

const Work = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-2xl md:text-3xl font-light text-gray-400 mb-20 text-center tracking-wide"
        >
          Work
        </motion.h2>

        <div className="space-y-16">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="border-b border-gray-200 pb-12 last:border-b-0"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-light text-gray-700 mb-2">{work.company}</h3>
                  <p className="text-sm text-gray-500 font-light">{work.period}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-light text-gray-600 mb-4">{work.role}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{work.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
