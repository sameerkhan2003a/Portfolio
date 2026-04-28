"use client"

import { Layers, Zap, Scale, Lock } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Simple",
    description: "No unnecessary complexity. Every line of code serves a purpose.",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Performance is a feature. Slow systems are broken systems.",
  },
  {
    icon: Scale,
    title: "Scalable",
    description: "Built to grow. Architecture that handles increasing load.",
  },
  {
    icon: Lock,
    title: "Tight",
    description: "No loose ends. Everything connects, nothing leaks.",
  },
]

export function HowIBuildSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How I Build</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Philosophy */}
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight text-balance">
              I don&apos;t believe in overengineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If something can be simpler, it should be. If the user struggles, the system is wrong. I build systems that work—not systems that impress other developers.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="text-lg text-foreground font-medium">
                &quot;The best code is no code. The second best is simple code.&quot;
              </p>
            </blockquote>
          </div>

          {/* Right - Principles Grid */}
          <div className="grid grid-cols-2 gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
