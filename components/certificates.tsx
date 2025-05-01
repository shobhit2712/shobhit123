"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLinkIcon, CalendarIcon, AwardIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificatesData = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - deeplearning.ai",
    date: "January 2024",
    image: "/placeholder.svg",
    description:
      "Five-course specialization covering neural networks, deep learning, structuring ML projects, CNNs, and sequence models.",
    credentialUrl: "#",
    skills: ["Neural Networks", "Deep Learning", "CNNs", "RNNs", "TensorFlow"],
  },
  {
    title: "Building Web Applications in PHP",
    issuer: "Coursera",
    date: "December 2024",
    image: "/placeholder.svg",
   "description": "In-depth course focused on developing dynamic web applications using PHP, covering topics like server-side scripting, form handling, database integration, and session management.",
  "credentialUrl": "#",
  "skills": ["PHP", "HTML", "MySQL", "Web Development", "Form Handling", "Session Management"],
  },
  {
    title: "Cyber Security and Privacy(IIT Madras)",
    issuer: "NPTEL",
    date: "October 2024",
    image: "/placeholder.svg",
    description:
      "Comprehensive course by IIT Madras focusing on key concepts in cyber security and privacy, including cryptography, network security, access control, and data protection strategies.",
    credentialUrl: "#",
    skills:["Cyber Security", "Privacy", "Cryptography", "Network Security", "Access Control", "Data Protection"],
  },
  {
    title: "Server side JavaScript with Node.js",
    issuer: "Coursera",
    date: "May 2024",
    image: "/placeholder.svg",
    description:
      "Hands-on course focused on building scalable server-side applications using Node.js. Covered asynchronous programming, RESTful APIs, Express.js, and working with databases.",
    credentialUrl: "#",
    skills: ["Node.js", "Express.js", "JavaScript", "RESTful APIs", "Asynchronous Programming", "MongoDB"]
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    date: "May 2024",
    image: "/placeholder.svg",
    description:  "Introductory course focused on front-end web development using HTML, CSS, and JavaScript. Emphasized responsive design, DOM manipulation, and modern web standards.",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation", "Web Development"],
  },
  {
    title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
    issuer: "Coursera",
    date: "May 2024",
    image: "/placeholder.svg",
    description: "Practical course on building AI-powered applications using OpenAI tools like ChatGPT, DALL·E, and GPT-4. Covered prompt engineering, API integration, and creating intelligent web experiences.",
    credentialUrl: "#",
    skills:  ["ChatGPT", "GPT-4", "DALL·E", "Prompt Engineering", "OpenAI API", "AI Integration", "Web Development"],
  },
]

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="certificates" ref={sectionRef} className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            Professional certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      <AwardIcon className="h-5 w-5" />
                      <span className="font-medium">{certificate.issuer}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{certificate.date}</span>
                  </div>
                  <CardTitle>{certificate.title}</CardTitle>
                  <CardDescription>{certificate.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block px-2 py-1 text-xs rounded-md bg-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Verify Credential
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

  