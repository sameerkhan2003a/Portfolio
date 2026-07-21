"use client"

import { ChevronRight } from "lucide-react"

const caseStudies = [
  {
    title: "TaskPilot — Real-Time Collaboration",
    problem:
      "Develop a collaborative task management platform that supports secure multi-user access, real-time communication, and efficient project organization.",

    approach: [
      "Designed a scalable PERN architecture with JWT authentication and role-based access control.",
      "Implemented WebSocket-powered real-time updates for task synchronization and notifications.",
      "Built responsive dashboards and Kanban workflows focused on usability and collaboration.",
    ],

    result:
      "Delivered a secure, scalable project management platform that enables teams to collaborate seamlessly through real-time task tracking and intuitive workflows.",
  },
  {
    title: "Deccan Central — Information Architecture",
    problem:
      "Build a single platform that presents South India's history, culture, architecture, wildlife, cuisine, and travel in a structured, engaging, and easy-to-navigate experience.",

    approach: [
      "Designed a reusable React component architecture supporting multiple states and content categories.",
      "Developed dynamic routing, responsive layouts, and consistent navigation for seamless exploration.",
      "Organized extensive historical and cultural content using reusable data structures and optimized media assets.",
    ],

    result:
      "Created a content-rich React platform that transforms complex regional information into an immersive, responsive, and accessible digital experience.",
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
