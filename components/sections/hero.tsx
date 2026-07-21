"use client"

import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react"
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
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 animate-pulse rounded-full bg-primary/20 blur-3xl transition-transform duration-700 hover:scale-110" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 animate-pulse rounded-full bg-primary/10 blur-3xl delay-1000 transition-transform duration-700 hover:scale-110" />

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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/15 hover:shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            <span className="text-sm font-medium text-primary">
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="bg-gradient-to-r from-foreground via-foreground to-primary bg-[length:200%] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-all duration-700 hover:bg-right sm:text-6xl lg:text-7xl xl:text-8xl">
            Sameer Khan A
          </h1>

          {/* Roles */}
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Full-Stack Developer <span className="text-primary">•</span>{" "}
            Technical Trainer <span className="text-primary">•</span> AI
            Practitioner
          </p>

          {/* Description */}
          <p className="max-w-3xl text-base leading-8 text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-lg">
            Building scalable web applications, integrating AI into modern
            development workflows, and mentoring aspiring developers through
            practical, hands-on learning.
          </p>

          {/* CTA */}
          <div className="mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="group w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg sm:w-auto"
            >
              <a
                href="/Sameer_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex items-center gap-4 sm:mt-6">
            {[
              {
                icon: Github,
                href: "https://github.com/sameer-khan-a",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sameer-khan-a-/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:sameerkhan003a@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:rotate-3 hover:bg-secondary hover:text-foreground hover:shadow-lg"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2 transition-all duration-300 hover:border-primary/50">
          <div className="h-2 w-1 animate-pulse rounded-full bg-primary transition-all duration-300 hover:h-3" />
        </div>
      </div>
    </section>
  )
}
