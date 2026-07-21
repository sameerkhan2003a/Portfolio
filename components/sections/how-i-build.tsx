"use client"

import { Layers, Zap, Scale, ShieldCheck } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Simple",
    description:
      "Clear architecture with purposeful code and minimal complexity.",
  },
  {
    icon: Zap,
    title: "Fast",
    description:
      "Responsive experiences built with performance in mind.",
  },
  {
    icon: Scale,
    title: "Scalable",
    description:
      "Reusable components and systems designed to grow over time.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description:
      "Maintainable solutions that remain stable as products evolve.",
  },
]

export function HowIBuildSection() {
  return (
    <section className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            How I Build
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-6">
            <p className="max-w-xl text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Good software solves problems, not complexity.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I focus on building applications that are simple to use,
              easy to maintain, and designed to scale. Every technical
              decision should improve the user experience and make future
              development easier.
            </p>

            <div className="border-l-2 border-primary pl-5 sm:pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
                Every project is an opportunity to build something people
                enjoy using and developers enjoy maintaining.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  <principle.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
                  {principle.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
