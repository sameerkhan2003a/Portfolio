"use client"

import { ChevronRight } from "lucide-react"

const caseStudies = [
  {
    title: "Drexel University — International Collaboration",
    problem:
      "Collaborate on an international automation project while working with teammates across different time zones, communication styles, and project workflows.",

    approach: [
      "Worked closely with international students from Drexel University, learning how real software teams collaborate through meetings, discussions, task ownership, and milestone planning across different time zones.",
      "Adapted to professional development practices by coordinating schedules, communicating effectively, and contributing to an automated customer engagement solution.",
    ],

    result:
      "Successfully delivered the project while gaining valuable experience in international collaboration, cross-time-zone teamwork, professional communication, and real-world software development workflows.",
  },
  {
    title: "V Tech — Client Requirement Analysis",
    problem:
      "Develop a modern training institute website that satisfied business requirements while providing students with an intuitive and responsive user experience.",

    approach: [
      "Worked directly with the client to understand business goals, gather requirements, request missing content, and clarify project expectations before and during development.",
      "Continuously incorporated client feedback, refined features, and validated design decisions to ensure the final product aligned with the client's vision.",
    ],

    result:
      "Delivered a production-ready website while gaining hands-on experience in client communication, requirement analysis, feedback-driven development, and professional project delivery.",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Case Studies
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Case Studies */}
        <div className="space-y-6 lg:space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-6 lg:p-8"
            >
              {/* Title */}
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary sm:h-11 sm:w-11">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-xl lg:text-2xl">
                  {study.title}
                </h3>
              </div>

              {/* Content */}
              <div className="grid gap-8 md:grid-cols-3">
                {/* Problem */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                    Problem
                  </h4>

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {study.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                    Approach
                  </h4>

                  <ul className="space-y-3">
                    {study.approach.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                    Result
                  </h4>

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
