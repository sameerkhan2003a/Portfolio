"use client"

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sameerkhan003a@gmail.com",
    href: "mailto:sameerkhan003a@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sameer-khan-a",
    href: "https://github.com/sameer-khan-a",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sameer-khan-a-",
    href: "https://www.linkedin.com/in/sameer-khan-a-/",
  },
]

const openTo = [
  "Freelance Development",
  "AI + Development Training",
  "Collaborative Projects",
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Work With Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="space-y-8">
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
              Have a project in mind? Looking for a technical trainer or a
              development partner? I'm always interested in building useful
              products and collaborating with great people.
            </p>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Open To
              </h3>

              <div className="flex flex-wrap gap-3">
                {openTo.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs transition-colors hover:border-primary/40 hover:bg-primary/5 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="group w-full sm:w-fit"
            >
              <a href="mailto:sameerkhan003a@gmail.com">
                Let's Talk
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {link.label}
                  </p>

                  <p className="break-all text-sm font-medium text-foreground transition-colors group-hover:text-primary sm:text-base">
                    {link.value}
                  </p>
                </div>

                <ArrowUpRight className="hidden h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
