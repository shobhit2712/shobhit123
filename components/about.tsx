"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-100px", threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <section id="about" ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            Get to know more about me, my background, and what drives my passion
            for Full-Stack web Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/vedanta.jpg"
              alt="Shobhit Pandey"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Full-Stack Web Developer 
            </h3>

            <p className="text-muted-foreground">
            I am an aspiring full-stack web developer and DevOps enthusiast with a strong passion for building scalable applications and streamlining deployment workflows. I have learned how to develop dynamic web solutions and leverage DevOps practices to enhance performance, reliability, and continuous integration.
            </p>

            <p className="text-muted-foreground">
            I believe technology has the power to drive better decisions and create impactful solutions. My goal is to apply my skills in full-stack development and DevOps to build robust, user-centric applications and contribute to innovative projects that make a real difference.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Shobhit Pandey</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">
                shobhitpandey27124@gmail.com 
                </p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Jalandhar, Punjab</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link href="https://github.com/shobhit2712" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link href="https://www.linkedin.com/in/pandey-shobhit/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>

              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link href="/CV/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileTextIcon className="h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
