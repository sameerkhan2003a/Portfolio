"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          {/* Left - Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            © {new Date().getFullYear()} Sameer Khan A. Built with clarity.
          </p>

          {/* Right - Social Links */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <a
              href="https://github.com/sameer-khan-a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
            >
              <Github className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-khan-a-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
            >
              <Linkedin className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="mailto:sameerkhan003a@gmail.com"
              aria-label="Email"
              className="rounded-full p-2.5 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground active:scale-95"
            >
              <Mail className="h-5 w-5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
