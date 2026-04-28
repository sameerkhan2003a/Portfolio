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
    value: "github.com/sameerkhan-a",
    href: "https://github.com/sameer-khan-a",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sameerkhan-a-",
    href: "https://www.linkedin.com/in/sameer-khan-a-/",
  },
]

const openTo = [
  "Freelance development",
  "AI + development training",
  "Collaborative projects",
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Work With Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - CTA */}
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? Want to discuss a collaboration? I&apos;m open to freelance work, training engagements, and interesting projects.
            </p>

            {/* Open To */}
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Open To
              </h3>
              <div className="flex flex-wrap gap-3">
                {openTo.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:sameerkhan003a@gmail.com">
                Let&apos;s Talk
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Right - Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
