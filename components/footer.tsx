import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}Shobhit Pandey. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/shobhit2712" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <GithubIcon className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/pandey-shobhit/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <LinkedinIcon className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <TwitterIcon className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="shobhitpandey27124@gmail.com" className="text-muted-foreground hover:text-foreground">
            <MailIcon className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

