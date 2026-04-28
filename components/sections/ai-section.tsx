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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">AI & How I Use It</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Philosophy */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI is a core part of how I work — but not a replacement for thinking.
            </p>
            
            <div className="space-y-4">
              {aiUsages.map((usage) => (
                <div key={usage.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <usage.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground pt-2">{usage.text}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-primary pl-6 py-4 mt-8 bg-card rounded-r-lg">
              <p className="text-lg text-foreground font-medium italic">
                &quot;I design the solution, break the problem down, and make the decisions — AI helps me execute faster.&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                I treat AI as leverage, not a crutch.
              </p>
            </blockquote>
          </div>

          {/* Right - Tools */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Tools I Work With</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                I use tools based on what solves the problem best — not brand loyalty.
              </p>
            </div>

            {/* Difference Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">The Difference</h4>
              <p className="text-muted-foreground leading-relaxed">
                Most people use AI to replace thinking. I use it to amplify thinking. The architecture, the problem breakdown, the critical decisions — that&apos;s human. The execution gets accelerated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
