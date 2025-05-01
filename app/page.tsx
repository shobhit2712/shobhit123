import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import CodingProfiles from "@/components/coding-profiles"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Shobhit Pandey | Full-Stack Developer",
  description: "Portfolio website of Shobhit Pandey, Web-Developer specializing in Fullstack Web Devlopement and Devops",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Certificates />
      <Contact />
    </main>
  )
}

