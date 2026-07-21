"use client"

import {
  MessageSquare,
  Lightbulb,
  Target,
  CheckCircle,
} from "lucide-react"

const teachingApproach = [
  {
    icon: MessageSquare,
    title: "Approachable",
    description:
      "Students learn best when they feel comfortable asking questions in a supportive environment with clear expectations.",
  },
  {
    icon: Lightbulb,
    title: "Relatable",
    description:
      "Technical concepts explained through simple language, real-world examples, and practical analogies.",
  },
  {
    icon: Target,
    title: "Hands-On",
    description:
      "Learning happens by building. Every concept is reinforced through live coding, projects, and practical exercises.",
  },
  {
    icon: CheckCircle,
    title: "Engaging",
    description:
      "Interactive sessions designed to keep students involved, curious, and confident throughout the learning process.",
  },
]

export function TeachingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            How I Teach
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">

          {/* Left */}
          <div className="space-y-6 lg:col-span-2">

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              I believe software development is learned by building, not just
              listening. My sessions combine practical development, relatable
              examples, and hands-on learning so students understand both
              <span className="font-medium text-foreground"> what </span>
              they're building and
              <span className="font-medium text-foreground"> why </span>
              it works.
            </p>

            <div className="rounded-r-xl border-l-2 border-primary bg-card py-5 pl-5 sm:pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg lg:text-xl">
                I teach like a mentor, not a lecturer. My goal is to make every
                session practical, approachable, and genuinely enjoyable while
                helping students become confident problem solvers.
              </p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Over{" "}
              <span className="font-semibold text-primary">500+</span> hours of
              live technical training have allowed me to mentor{" "}
              <span className="font-semibold text-primary">100+</span> students
              through projects, code reviews, interactive discussions, and
              modern AI-assisted development workflows.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {teachingApproach.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-3 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
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
