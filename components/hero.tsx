"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, FileTextIcon, MailIcon } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

const roles = ["Full-Stack Developer", "Software Engineer", "Devops Engineer", "Site Reliablity Engineer"]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const controls = useAnimation()

  // useEffect(() => {
  //   if (!textRef.current) return

  //   const tl = gsap.timeline()
  //   const elements = textRef.current.querySelectorAll(".gsap-text")

  //   if (elements.length > 0) {
  //     tl.from(elements, {
  //       y: 50,
  //       opacity: 0,
  //       stagger: 0.2,
  //       duration: 1,
  //       ease: "power3.out",
  //     })
  //   }

  //   return () => tl.kill()
  // }, []) // Empty dependency array

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timer: NodeJS.Timeout

    if (displayText.length === currentRole.length && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else {
      timer = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
          setTypingSpeed(100 + Math.random() * 50)
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
          setTypingSpeed(50 + Math.random() * 25)
          
          if (displayText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayText, currentRoleIndex, isDeleting, typingSpeed])

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.8 },
    })
  }, [controls])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.getElementById(href.replace("#", ""))
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      })
      window.history.pushState(null, "", href)
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <div ref={textRef} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 gsap-text"
          >
            <span className="inline-block min-w-[180px]">{displayText}</span>
            <span className="ml-1 w-[2px] bg-primary animate-pulse" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gsap-text">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              Hi, I'm{" "}
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={controls} className="text-primary inline-block">
              Shobhit Pandey
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 gsap-text">
          Passionate about building scalable web applications and streamlining infrastructure with DevOps and cloud technologies. I thrive on transforming complex requirements into reliable, full-stack solutions that solve real-world problems efficiently and intelligently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center gsap-text">
            <Button asChild size="lg" className="gap-2">
              <Link href="#contact" onClick={(e) => handleScrollToSection(e, "#contact")}>
                <MailIcon className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/CV/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileTextIcon className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleScrollToSection(e, "#about")}
            aria-label="Scroll to About section"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon className="h-5 w-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}