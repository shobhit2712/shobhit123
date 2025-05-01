"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { GithubIcon, CodeIcon, ExternalLinkIcon, TrophyIcon, CodepenIcon, BookIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const profilesData = [
  {
    platform: "GitHub",
    username: "shobhit2712",
    url: "https://github.com/shobhit2712",
    icon: <GithubIcon className="h-10 w-10" />,
    stats: [
      { label: "Repositories", value: "+" },
      { label: "Stars", value: "250+" },
      { label: "Contributions", value: "1,200+" },
    ],
    description:
      "Open source contributions and personal projects in Full-Stack web development.",
  },
  {
    platform: "LeetCode",
    username: "shobhitp933",
    url: "https://leetcode.com/u/shobhitp933",
    icon: <CodeIcon className="h-10 w-10" />,
    stats: [
      { label: "Problems Solved", value: "160+" },
      { label: "Contest Rating", value: "1850" },
      { label: "Global Rank", value: "under 740k" },
    ],
    description:
      "Regular participant in coding contests with expertise in algorithms, data structures, and problem-solving.",
  },
  {
    platform: "Stack Overflow",
    username: "shobhitp933",
    url: "https://stackoverflow.com/users/30364344/shobhitp131",
    icon: <CodepenIcon className="h-10 w-10" />,
    stats: [
      { label: "Reputation", value: "15,000+" },
      { label: "Answers", value: "250+" },
      { label: "Reach", value: "500K+" },
    ],
    description:
      "Active contributor in web-development topics with gold badges in several tags.",
  },
  {
    platform: "HackerRank",
    username: "shobhitpandey271",
    url: "https://hackerrank.com/shobhitpandey271",
    icon: <CodeIcon className="h-10 w-10" />,
    stats: [
      { label: "Skills Verified", value: "Python, SQL, Problem Solving" },
      { label: "Certificates", value: "5+" },
      { label: "Badges", value: "15+" },
    ],
    description: "Certified in various programming skills with 5-star ratings in Python, SQL, and Problem Solving.",
  },
]

export default function CodingProfiles() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="profiles" ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-3xl">
            My presence across various coding platforms and communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profilesData.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{profile.icon}</div>
                  <div>
                    <CardTitle>{profile.platform}</CardTitle>
                    <CardDescription>@{profile.username}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{profile.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {profile.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="space-y-1">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="font-medium">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Visit Profile
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

