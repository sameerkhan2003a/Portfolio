"use client"

import { Target, MessageSquare, Lightbulb, CheckCircle } from "lucide-react"

const teachingApproach = [
  {
    icon: Target,
    title: "Practical-First",
    description: "Real projects from day one. No theoretical fluff that doesn't translate to actual work.",
  },
  {
    icon: MessageSquare,
    title: "Tight Explanations",
    description: "Relatable, to-the-point explanations. Complex ideas broken down into simple mental models.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Focus",
    description: "Teaching how to think through problems, not just memorize solutions.",
  },
  {
    icon: CheckCircle,
    title: "Hands-On Sessions",
    description: "Hundreds of hours of live, project-based training with real feedback loops.",
  },
]

export function TeachingSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How I Teach</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Philosophy */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I train students in both <span className="text-foreground font-medium">development and AI usage</span>. My approach is simple: build real things and understand why they work.
            </p>
            
            <blockquote className="border-l-2 border-primary pl-6 py-4">
              <p className="text-lg text-foreground font-medium">
                &quot;Most beginners struggle because they don&apos;t know how to think through problems. I fix that.&quot;
              </p>
            </blockquote>

            <p className="text-muted-foreground">
              This approach has helped me train <span className="text-primary font-semibold">100+ students</span> through hundreds of hours of hands-on sessions.
            </p>
          </div>

          {/* Right - Approach Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {teachingApproach.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
