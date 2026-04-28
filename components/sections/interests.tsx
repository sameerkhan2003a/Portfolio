"use client"

import { Film, Globe, BookOpen, Compass } from "lucide-react"

const interests = [
  {
    icon: Film,
    title: "Structured Storytelling",
    items: ["Fargo", "True Detective", "Layered narratives"],
  },
  {
    icon: Globe,
    title: "Anthropology",
    items: ["Human evolution", "Behavioral patterns", "Cultural systems"],
  },
  {
    icon: BookOpen,
    title: "History",
    items: ["Indian history", "Deccan history", "Historical systems"],
  },
  {
    icon: Compass,
    title: "Systems Thinking",
    items: ["How things connect", "Why patterns emerge", "Meaningful structures"],
  },
]

export function InterestsSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Drives Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m interested in <span className="text-foreground font-medium">systems</span> — in software, history, and human behavior. I&apos;m drawn to things that are layered, structured, and meaningful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This perspective shapes how I build and teach. Everything connects. Patterns matter. Understanding the &quot;why&quot; unlocks the &quot;how&quot;.
            </p>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">Currently</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Building full-stack + AI-supported systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Training students in real-world development and AI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Exploring better workflows using AI
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
