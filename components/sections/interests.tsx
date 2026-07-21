"use client"

import { Film, Globe, BookOpen, Compass, PawPrint } from "lucide-react"

const interests = [
  {
    icon: Film,
    title: "Cinema & Narrative",
    items: ["Fargo", "True Detective", "Slow-burn storytelling"],
  },
  {
    icon: Globe,
    title: "Places & Architecture",
    items: ["Hill stations", "Belur & Halebidu", "Kailasa Temple", "Heritage sites"],
  },
  {
    icon: BookOpen,
    title: "History & Systems",
    items: ["Indian history", "Deccan", "Cultural structures"],
  },
  {
    icon: Compass,
    title: "Thinking",
    items: ["Patterns", "Connections", "First principles"],
  },
  {
    icon: PawPrint,
    title: "Nature",
    items: ["Dogs", "Cats", "Wildlife", "Quiet environments"],
  },
]

export function InterestsSection() {
  return (
    <section className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Beyond Code
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-6">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I’m not just interested in building things. I care about how they
              work underneath. Systems, stories, places, I naturally look for
              patterns, structure, and intent.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              That mindset didn’t come from code. It came from exploring places
              like Belur, Halebidu, and the Kailasa Temple, where every detail
              exists for a reason. That way of thinking carries into how I build
              and teach.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Outside of work, I keep things simple: nature, animals, history,
              and quiet places. They help keep my thinking clear.
            </p>

            {/* Current Focus */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6">
              <h4 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">
                Current Focus
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    Building systems that solve actual problems, not demo
                    projects.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    Teaching development through clarity, not theory.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    Using AI as leverage, not a crutch.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  <interest.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-4 text-lg font-semibold text-foreground sm:text-xl">
                  {interest.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {interest.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground sm:px-3 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
