"use client"

import { Code2, Brain, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React, Node.js, PostgreSQL & TypeScript",
  },
  {
    icon: Users,
    title: "Technical Training",
    description: "100+ students mentored through hands-on learning",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Using AI to build faster and work smarter",
  },
  {
    icon: Zap,
    title: "Engineering",
    description: "Clean architecture, performance & scalability",
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
              I'm Sameer, a full-stack developer and technical trainer focused
              on building modern web applications and helping others become
              better developers.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I combine software engineering with AI-powered workflows to build
              faster, teach better, and deliver practical solutions that scale.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I enjoy turning complex ideas into practical solutions, whether
              it's shipping production-ready applications or simplifying
              technical concepts through hands-on learning.
            </p>

            <blockquote className="border-l-2 border-primary pl-5 sm:pl-6">
              <p className="text-lg font-semibold italic text-foreground sm:text-xl lg:text-2xl">
                "Build. Teach. Keep it simple."
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

                <p className="text-sm leading-relaxed text-muted-foreground">
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
