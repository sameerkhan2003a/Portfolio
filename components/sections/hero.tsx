"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8 xl:px-10">
        <div className="flex max-w-4xl flex-col items-start gap-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            <span className="text-sm font-medium text-primary">
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Sameer Khan A
          </h1>

          {/* Roles */}
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Full-Stack Developer{" "}
            <span className="text-primary">•</span> Technical Trainer{" "}
            <span className="text-primary">•</span> AI Practitioner
          </p>

          {/* Description */}
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Building scalable web applications, leveraging AI to accelerate
            modern development workflows, and mentoring aspiring developers
            through practical, fundamentals-first software engineering.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="group w-full sm:w-auto"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex items-center gap-4 sm:mt-6">
            <a
              href="https://github.com/sameer-khan-a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-khan-a-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:sameerkhan003a@gmail.com"
              aria-label="Email"
              className="rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2">
          <div className="h-2 w-1 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
