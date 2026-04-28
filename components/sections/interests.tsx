"use client"

import { Film, Globe, BookOpen, Compass, PawPrint } from "lucide-react"

const interests = [
  {
    icon: Film,
    title: "Cinema & Story",
    items: ["Fargo", "True Detective", "Slow-burn storytelling"],
  },
  {
    icon: Globe,
    title: "Travel & Heritage",
    items: [
      "Hill stations",
      "UNESCO sites",
      "Belur & Halebidu",
      "Kailasa Temple",
      "Shravana Belagola",
    ],
  },
  {
    icon: BookOpen,
    title: "History & Culture",
    items: ["Indian history", "Deccan roots", "Cultural systems"],
  },
  {
    icon: Compass,
    title: "Thinking Style",
    items: ["Patterns", "Connections", "Why things work"],
  },
  {
    icon: PawPrint,
    title: "Nature & Animals",
    items: ["Dogs", "Cats", "Wildlife", "Nature trips"],
  },
]

export function InterestsSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Beyond Code</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don’t just like building things — I like understanding them. Whether it’s a system, a story, or a place, I’m drawn to patterns and how everything connects.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Traveling to hill stations and historic sites like Belur, Halebidu, and the Kailasa temple shaped how I think — detail, structure, and intent behind every layer. That same mindset carries into how I build and teach.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of that, I enjoy being around animals and nature — dogs, cats, wildlife, anything real and unfiltered.
            </p>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">Right now</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Building full-stack apps with real-world use
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Teaching development in a practical, no-fluff way
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Exploring how AI fits into everyday workflows
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Interests Grid */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{interest.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {interest.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
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