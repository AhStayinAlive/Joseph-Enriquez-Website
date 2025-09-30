"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Award } from "lucide-react"

const leadershipActivities = [
  {
    role: "Project Management Director",
    organization: "Computer Studies Government",
    period: "Dec 2023 - Dec 2024",
    description: "Managed 15+ student-led tech initiatives; led a Web3 and fintech summit with 100+ attendees.",
    icon: Users,
  },
  {
    role: "Programs Lead",
    organization: "InsightLoops (CCS Week)",
    period: "Aug 2024 - Nov 2024",
    description: "Organized a tech seminar on Flutter and digital transformation with 100+ participants.",
    icon: Calendar,
  },
]

const Leadership = () => {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Leadership & Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Leading initiatives and organizing tech events</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leadershipActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <activity.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{activity.role}</CardTitle>
                    <p className="text-gray-600">{activity.organization}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3">
                    {activity.period}
                  </Badge>
                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <Award className="h-5 w-5 text-gray-700" />
            <span className="text-gray-700 font-medium">
              Committed to tech community leadership and knowledge sharing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
