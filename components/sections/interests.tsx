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
    <section className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Beyond Code</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m not just interested in building things — I care about how they work underneath. Systems, stories, places — I look for patterns, structure, and intent.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              That mindset didn’t come from code. It came from exploring places like Belur, Halebidu, and the Kailasa Temple — where every detail exists for a reason. That way of thinking carries into how I build and teach.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of work, I keep things simple — nature, animals, and anything real. It keeps my thinking clear.
            </p>

            {/* Current Focus */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">Current Focus</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Building systems that solve actual problems, not demo projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Teaching development through clarity, not theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Using AI as a tool, not a crutch
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Interests */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="font-semibold text-foreground mb-3">
                  {interest.title}
                </h3>

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