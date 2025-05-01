"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { BracesIcon, WrenchIcon, UsersIcon } from "lucide-react";


import {
  CodeIcon,
  DatabaseIcon,
  LineChartIcon,
  BrainCircuitIcon,
  BarChartIcon,
  CloudIcon,
  GitBranchIcon,
  LayoutDashboardIcon,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <CodeIcon className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frameworks & Web Technologies",
    icon: <BracesIcon className="h-6 w-6" />,
    skills: [
      { name: "Angular Js", level: 85 },
      { name: "Laravel", level: 90 },
      { name: "React Js", level: 80 },
      { name: "Node.Js", level: 88 },
      { name: "Express Js", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <WrenchIcon className="h-6 w-6" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "Mongo DB", level: 80 },
      { name: "SQL", level: 80 },
      
    ],
  },
  {
    title: "Devops & Cloud",
    icon: <BarChartIcon className="h-6 w-6" />,
    skills: [
      { name: "Aws", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Jenkins", level: 76 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <UsersIcon className="h-6 w-6" />,
    skills: [
      { name: "Problem-Solving Skills", level: 90 },
      { name: "Team Player", level: 85 },
      { name: "Adaptability", level: 85 },
      { name: "Critical Thinking", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
];


export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px", amount: 0.1 })

  // Fix for animation performance issues
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // If user prefers reduced motion, we can skip animations or make them instant
    if (prefersReducedMotion && sectionRef.current) {
      const progressBars = sectionRef.current.querySelectorAll(".progress-bar")
      progressBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          bar.style.width = bar.dataset.level || "0%"
          bar.style.transition = "none"
        }
      })
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            My technical expertise and proficiency in various Web Development and Devops Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-primary rounded-full progress-bar"
                        data-level={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

