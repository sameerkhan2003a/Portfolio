"use client"

import {
  Sparkles,
  Code,
  Lightbulb,
  BookOpen,
  Wrench,
} from "lucide-react"

const aiUsages = [
  {
    icon: Code,
    text: "Prototype ideas, debug issues, and iterate on implementations faster.",
  },
  {
    icon: Lightbulb,
    text: "Research technologies, compare approaches, and validate technical decisions.",
  },
  {
    icon: Sparkles,
    text: "Refine user interfaces, improve code quality, and overcome development roadblocks.",
  },
  {
    icon: BookOpen,
    text: "Design presentations, training material, quizzes, and technical documentation.",
  },
]

const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "v0.dev",
  "Windsurf",
  "NotebookLM",
  "Sora",
  "Veo",
]

export function AISection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            AI in My Workflow
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              AI is an integral part of my workflow. I use it to accelerate
              development, research unfamiliar topics, refine ideas, improve
              code quality, and create technical learning content while keeping
              the architecture, trade-offs, and engineering decisions my own.
            </p>

            <div className="space-y-5">
              {aiUsages.map((usage) => (
                <div
                  key={usage.text}
                  className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-muted/40"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                    <usage.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground sm:h-6 sm:w-6" />
                  </div>

                  <p className="pt-1 text-sm leading-relaxed text-foreground sm:pt-2 sm:text-base lg:text-lg">
                    {usage.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-r-xl border-l-2 border-primary bg-card py-5 pl-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg lg:text-xl">
                AI is my collaborator, not my replacement.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                It helps me learn faster, explore better solutions, and execute
                more efficiently, while I remain responsible for every design,
                implementation, and technical decision.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-6 lg:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 hover:bg-primary sm:h-12 sm:w-12">
                  <Wrench className="h-5 w-5 text-primary transition-colors duration-300 hover:text-primary-foreground sm:h-6 sm:w-6" />
                </div>

                <h3 className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
                  AI Tools I Use
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="cursor-default rounded-full bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md sm:px-4 sm:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I choose tools based on the problem I'm solving, combining
                different models and platforms to improve productivity rather
                than relying on a single ecosystem.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:from-primary/15 hover:shadow-xl sm:p-6 lg:p-7">
              <h4 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                My Approach
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                I use AI to accelerate research, debugging, UI refinement,
                documentation, and content creation. It reduces repetitive work
                and expands what's possible, but every architectural choice,
                implementation strategy, and final review remains my
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
