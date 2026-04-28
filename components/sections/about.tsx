"use client"

import { Code2, Brain, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "PERN Stack, React, Node.js, PostgreSQL",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "AI-accelerated development workflows",
  },
  {
    icon: Users,
    title: "Technical Training",
    description: "100+ students trained",
  },
  {
    icon: Zap,
    title: "Tight Systems",
    description: "Clarity, execution, and performance",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Sameer — a full-stack developer, AI practitioner, and technical trainer focused on building real-world systems and making them simple to understand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work across <span className="text-foreground font-medium">development and AI together</span> — using AI to speed up execution, while I handle the thinking, structure, and decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve built full-stack applications using PERN, worked on international collaborations (Drexel University), and trained <span className="text-foreground font-medium">100+ students</span> through hands-on, project-based learning.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 py-2 mt-8">
              <p className="text-xl font-medium text-foreground italic">
                &quot;Clarity, execution, and tight systems.&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                If something is overcomplicated or hard to use, it&apos;s not done.
              </p>
            </blockquote>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
