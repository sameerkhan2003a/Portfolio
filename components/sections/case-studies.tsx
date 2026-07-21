"use client"

import { ChevronRight } from "lucide-react"

const caseStudies = [
  {
    title: "Drexel University — International Collaboration",
    problem:
      "Collaborate with an international team to deliver a customer engagement automation solution while adapting to distributed workflows and communication.",

    approach: [
      "Worked with Drexel University students across time zones, coordinating tasks, meetings, and project milestones in a real-world team environment.",
      "Applied collaborative development practices through continuous communication, shared ownership, and iterative problem-solving.",
    ],

    result:
      "Delivered the project while gaining practical experience in international collaboration, professional teamwork, and distributed software development.",
  },
  {
    title: "V Tech — Client Collaboration",
    problem:
      "Build a training institute website that met business goals while adapting to evolving client requirements throughout development.",

    approach: [
      "Worked directly with the client to gather requirements, request content, and validate features before implementation.",
      "Refined the website through continuous client feedback to ensure the final product matched business expectations.",
    ],

    result:
      "Delivered a production-ready website while strengthening skills in client communication, requirement analysis, and professional project delivery.",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Case Studies
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-6 lg:space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-6 lg:p-8"
            >
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary sm:h-11 sm:w-11">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-primary sm:text-xl lg:text-2xl">
                  {study.title}
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Problem
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {study.problem}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
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

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
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
