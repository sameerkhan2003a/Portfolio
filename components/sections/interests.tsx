"use client"

import {
  BookOpen,
  Globe,
  Film,
  Sparkles,
  Trophy,
} from "lucide-react"

const interests = [
  {
    icon: BookOpen,
    title: "History",
    description:
      "Indian history, the Deccan, ancient civilizations, and cultural heritage.",
  },
  {
    icon: Globe,
    title: "Travel",
    description:
      "Purposeful travel, villages, architecture, geography, and heritage sites.",
  },
  {
    icon: Film,
    title: "Entertainment",
    description:
      "Thoughtful films, great television, documentaries, and gaming.",
  },
  {
    icon: Trophy,
    title: "Sports",
    description:
      "Football, WWE, and the stories, rivalries, and moments that make sports memorable.",
  },
  {
    icon: Sparkles,
    title: "AI & Curiosity",
    description:
      "Artificial intelligence, emerging technology, research, wildlife, and lifelong learning.",
  },
]

export function InterestsSection() {
  return (
    <section className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex items-center gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Beyond Code
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_1.15fr] lg:gap-16">

          {/* Left */}
          <div className="space-y-6">

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Curiosity shapes much of what I do outside software. I'm fascinated
              by history, architecture, geography, and the stories behind places,
              cultures, and civilizations.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I enjoy travelling with purpose, researching places before I visit
              to understand their history, architecture, and local culture.
              Building <span className="font-medium text-foreground">Deccan Central</span> only
              deepened that curiosity.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Away from my desk you'll usually find me reading history, exploring
              villages and heritage sites, watching a great film or series,
              experimenting with AI, playing games, following football, or
              spending time with my pets.
            </p>

          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {interest.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {interest.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
