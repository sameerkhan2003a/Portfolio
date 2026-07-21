"use client"

import { Code2, Brain, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React, Node.js, PostgreSQL, TypeScript & modern web technologies",
  },
  {
    icon: Users,
    title: "Technical Training",
    description: "100+ students mentored through practical, project-based learning",
  },
  {
    icon: Brain,
    title: "AI-Powered Development",
    description: "Integrating AI into modern software development workflows",
  },
  {
    icon: Zap,
    title: "Engineering Mindset",
    description: "Clean architecture, performance, scalability & maintainability",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            About Me
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I'm Sameer, a full-stack developer and technical trainer with a
              passion for building modern software and helping others become
              better developers through practical, hands-on learning.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              My work combines full-stack engineering with AI-assisted
              development, using intelligent tools to accelerate delivery while
              maintaining strong software engineering principles, clean
              architecture, and thoughtful decision-making.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I've developed scalable web applications using the PERN stack,
              collaborated on international academic projects with Drexel
              University, and mentored more than{" "}
              <span className="font-semibold text-foreground">
                100 aspiring developers
              </span>{" "}
              through project-based technical training.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 sm:pl-6">
              <p className="text-lg font-semibold italic text-foreground sm:text-xl lg:text-2xl">
                "Build with clarity. Teach with purpose."
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Great software isn't just about writing code. It's about solving
                problems, communicating ideas, and creating systems people can
                trust.
              </p>
            </blockquote>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
