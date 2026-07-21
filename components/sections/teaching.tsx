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
      "A supportive environment where students feel comfortable asking questions and learning through discussion.",
  },
  {
    icon: Lightbulb,
    title: "Relatable",
    description:
      "Complex concepts explained using simple language, real-world examples, and practical analogies.",
  },
  {
    icon: Target,
    title: "Hands-On",
    description:
      "Students learn by building through live coding, projects, and practical exercises.",
  },
  {
    icon: CheckCircle,
    title: "Interactive",
    description:
      "Every session is engaging, collaborative, and focused on building confidence.",
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
              I believe software development is learned by building. My classes
              combine practical projects, relatable examples, and clear
              explanations to help students understand not just
              <span className="font-medium text-foreground"> what </span>
              they're building, but
              <span className="font-medium text-foreground"> why </span>
              it works.
            </p>

            <div className="rounded-r-xl border-l-2 border-primary bg-card py-5 pl-5 sm:pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg lg:text-xl">
                I teach like a mentor, not a lecturer. Every session is
                practical, approachable, and designed to make learning an
                enjoyable experience.
              </p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I've delivered{" "}
              <span className="font-semibold text-primary">500+</span> hours of
              technical training, mentoring{" "}
              <span className="font-semibold text-primary">100+</span> students
              through projects, code reviews, AI-assisted workflows, and
              interactive discussions.
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
