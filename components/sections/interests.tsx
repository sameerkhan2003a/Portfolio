"use client"

import {
  BookOpen,
  Globe,
  Film,
  Sparkles,
  Trophy,
  PawPrint,
} from "lucide-react"

const interests = [
  {
    icon: BookOpen,
    title: "History",
    items: [
      "Indian History",
      "Deccan",
      "Ancient Civilizations",
      "Heritage",
    ],
  },
  {
    icon: Globe,
    title: "Travel",
    items: [
      "Purposeful Travel",
      "Villages",
      "Architecture",
      "Geography",
    ],
  },
  {
    icon: Film,
    title: "Entertainment",
    items: [
      "Cinema",
      "TV Series",
      "Gaming",
      "Documentaries",
    ],
  },
  {
    icon: Trophy,
    title: "Sports",
    items: [
      "Football",
      "WWE",
    ],
  },
  {
    icon: Sparkles,
    title: "AI",
    items: [
      "Artificial Intelligence",
      "Emerging Tech",
      "Research",
    ],
  },
  {
    icon: PawPrint,
    title: "Nature",
    items: [
      "Wildlife",
      "Dogs",
      "Cats",
    ],
  },
]

export function InterestsSection() {
  return (
    <section className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-10 flex items-center gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Beyond Code
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

          {/* Left */}
          <div className="space-y-6">

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Curiosity drives much of what I do outside software. I'm fascinated
              by history, architecture, geography, and the stories behind
              civilizations, cultures, and places.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I enjoy travelling with purpose, researching villages, towns, and
              heritage sites before I visit. Building{" "}
              <span className="font-medium text-foreground">
                Deccan Central
              </span>{" "}
              transformed that curiosity into a lasting passion for India's
              history and regional cultures.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Away from the keyboard you'll usually find me reading history,
              exploring old architecture, watching a great series or film,
              experimenting with AI, playing games, following football, or
              spending time with my pets.
            </p>

          </div>

          {/* Right */}
          <div className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">

            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group flex items-start gap-5 p-5 transition-all duration-300 hover:bg-primary/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                  <interest.icon className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <h3 className="mb-2 text-base font-semibold transition-colors duration-300 group-hover:text-primary">
                    {interest.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {interest.items.join(" • ")}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}
