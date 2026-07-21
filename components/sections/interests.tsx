"use client"

import {
  Film,
  Globe,
  BookOpen,
  Sparkles,
  PawPrint,
} from "lucide-react"

const interests = [
  {
    icon: BookOpen,
    title: "History & Heritage",
    items: [
      "Indian History",
      "Deccan",
      "Ancient Civilizations",
      "Cultural Heritage",
    ],
  },
  {
    icon: Globe,
    title: "Travel & Architecture",
    items: [
      "Heritage Travel",
      "Villages",
      "Architecture",
      "Geography",
    ],
  },
  {
    icon: Film,
    title: "Storytelling",
    items: [
      "Cinema",
      "Television",
      "Documentaries",
      "Great Writing",
    ],
  },
  {
    icon: Sparkles,
    title: "Learning & AI",
    items: [
      "Artificial Intelligence",
      "Emerging Technology",
      "Research",
      "Software",
    ],
  },
  {
    icon: PawPrint,
    title: "Nature",
    items: [
      "Wildlife",
      "Dogs",
      "Cats",
      "Quiet Places",
    ],
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
              Curiosity shapes how I learn. I'm fascinated by history,
              architecture, geography, and the stories behind places, cultures,
              and civilizations.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I enjoy travelling with purpose, researching places before I
              visit to better understand their history, architecture, and local
              culture. That same curiosity influences how I build software and
              teach others.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Building <span className="font-medium text-foreground">Deccan Central</span> turned that curiosity
              into a long-term passion for exploring India's heritage and
              regional cultures.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  <interest.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-4 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {interest.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {interest.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-foreground sm:px-3 sm:text-sm"
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
