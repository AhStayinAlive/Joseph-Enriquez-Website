"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Terminal, Wrench, Globe, BarChart } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "JavaScript", "Python", "Go", "Springboot", "Lit"],
  },
  {
    name: "Tools & Frameworks",
    icon: Wrench,
    skills: ["Apache Airflow", "PySpark", "Selenium", "Docker", "Kubernetes", "Playwright"],
  },
  {
    name: "Data & Analytics",
    icon: Database,
    skills: ["SQL", "MongoDB", "Excel", "Statistical Modeling", "ETL"],
  },
  {
    name: "Web Development",
    icon: Globe,
    skills: ["HTML/CSS", "React", "Node.js", "RESTful APIs", "WebApp Dev"],
  },
  {
    name: "AI & ML",
    icon: BarChart,
    skills: ["NLP", "Search Algorithms", "Machine Learning Basics"],
  },
  {
    name: "Languages",
    icon: Terminal,
    skills: ["English", "Tagalog", "Basic Chinese"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Technical expertise and competencies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <category.icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <h3 className="font-medium text-lg">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
