"use client"

import { Code2, Brain, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "PERN Stack, React, Node.js, PostgreSQL",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "AI-accelerated development workflows",
  },
  {
    icon: Users,
    title: "Technical Training",
    description: "100+ students trained",
  },
  {
    icon: Zap,
    title: "Tight Systems",
    description: "Clarity, execution, and performance",
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
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I&apos;m Sameer, a full-stack developer, AI practitioner, and
              technical trainer focused on building real-world systems and making
              them simple to understand.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I work across{" "}
              <span className="font-medium text-foreground">
                development and AI together
              </span>{" "}
              using AI to speed up execution while I handle the thinking,
              structure, and decisions.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I&apos;ve built full-stack applications using PERN, worked on
              international collaborations (Drexel University), and trained{" "}
              <span className="font-medium text-foreground">
                100+ students
              </span>{" "}
              through hands-on, project-based learning.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 sm:pl-6">
              <p className="text-lg font-medium italic text-foreground sm:text-xl lg:text-2xl">
                &quot;Clarity, execution, and tight systems.&quot;
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If something is overcomplicated or hard to use,
                it&apos;s not done.
              </p>
            </blockquote>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>

                <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
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
