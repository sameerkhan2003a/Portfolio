"use client"

import { Sparkles, Code, Lightbulb, BookOpen, Wrench } from "lucide-react"

const aiUsages = [
  {
    icon: Code,
    text: "Speed up development (boilerplate, debugging, iteration)",
  },
  {
    icon: Lightbulb,
    text: "Explore solutions faster",
  },
  {
    icon: Sparkles,
    text: "Structure ideas and workflows",
  },
  {
    icon: BookOpen,
    text: "Create and refine learning material",
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
            AI & How I Use It
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              AI is a core part of how I work, but not a replacement for
              thinking.
            </p>

            <div className="space-y-5">
              {aiUsages.map((usage) => (
                <div
                  key={usage.text}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                    <usage.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>

                  <p className="pt-1 text-sm leading-relaxed text-foreground sm:pt-2 sm:text-base lg:text-lg">
                    {usage.text}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="rounded-r-xl border-l-2 border-primary bg-card py-5 pl-5 sm:pl-6">
              <p className="text-base font-medium italic leading-relaxed text-foreground sm:text-lg lg:text-xl">
                &quot;I design the solution, break the problem down, and make
                the decisions. AI helps me execute faster.&quot;
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I treat AI as leverage, not a crutch.
              </p>
            </blockquote>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6 lg:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                  <Wrench className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>

                <h3 className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
                  AI Tools I Work With
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="cursor-default rounded-full bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary sm:px-4 sm:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I use tools based on what solves the problem best, not brand
                loyalty.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6 lg:p-7">
              <h4 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                The Difference
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                Most people use AI to replace thinking. I use it to amplify
                thinking. The architecture, the problem breakdown, and the
                critical decisions remain human. AI accelerates the execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
