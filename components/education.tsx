"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    specialization: "Computer Science",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2022 - Present",
    description: "Pursuing a Bachelor's degree with a focus on Web development, data structures, algorithms, and system design.",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    degree: "Intermediate",
    specialization: "Science",
    institution: "Kendriya Vidyalaya",
    location: "Haridwar, Uttarakhand",
    period: "Apr 2021 - Mar 2022",
    description: "Completed intermediate education with a strong foundation in mathematics, physics, and computer science.",
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
    ],
  },
  {
    degree: "Matriculation",
    specialization: "General Education",
    institution: "Kendriya Vidyalaya",
    location: "Haridwar, Uttarakhand",
    period: "Apr 2019 - Mar 2020",
    description: "Excelled in academics with solid scores, developing a strong analytical and problem-solving mindset.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
    ],
  },
];


export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={sectionRef} className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            My academic journey that has shaped my expertise in Web-Development and Devops.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:rtl" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 hidden md:block"></div>

              <div className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} md:text-right ltr`}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                      <GraduationCapIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <p className="text-primary font-medium mb-4">{item.specialization}</p>

                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                      <span>
                        {item.institution}, {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div>
                      <h4 className="font-medium mb-2">Key Courses:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {item.courses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Empty column for timeline layout */}
              <div className={`hidden md:block ${index % 2 === 0 ? "" : ""}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

