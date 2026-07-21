"use client"

import { Target, MessageSquare, Lightbulb, CheckCircle } from "lucide-react"

const teachingApproach = [
  {
    icon: Target,
    title: "Practical-First",
    description:
      "Real projects from day one. No theoretical fluff that doesn't translate to actual work.",
  },
  {
    icon: MessageSquare,
    title: "Tight Explanations",
    description:
      "Relatable, to-the-point explanations. Complex ideas broken down into simple mental models.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Focus",
    description:
      "Teaching how to think through problems, not just memorize solutions.",
  },
  {
    icon: CheckCircle,
    title: "Hands-On Sessions",
    description:
      "Hundreds of hours of live, project-based training with real feedback loops.",
  },
]

export function TeachingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            How I Teach
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I train students in both{" "}
              <span className="font-medium text-foreground">
                development and AI usage
              </span>
              . My approach is simple: build real things and understand why
              they work.
            </p>

            <blockquote className="border-l-2 border-primary pl-5 sm:pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg lg:text-xl">
                &quot;Most beginners struggle because they don't know how to
                think through problems. I fix that.&quot;
              </p>
            </blockquote>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This approach has helped me train{" "}
              <span className="font-semibold text-primary">
                100+ students
              </span>{" "}
              through hundreds of hours of hands-on, project-based sessions.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {teachingApproach.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  <item.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
