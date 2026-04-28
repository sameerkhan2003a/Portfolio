"use client"

import { ChevronRight } from "lucide-react"

const caseStudies = [
  {
    title: "TaskPilot — Collaborative System Design",
    problem: "Managing tasks across multiple users with real-time updates required a robust architecture that could handle concurrent access and instant notifications.",
    approach: [
      "Designed system architecture and access control for multi-user collaboration",
      "Built notification logic for real-time updates using WebSockets",
      "Focused on simplicity and responsiveness for seamless user experience",
    ],
    result: "A scalable, multi-user system with smooth interaction and reliable real-time synchronization.",
  },
  {
    title: "V Tech Website — Real Client Work",
    problem: "Deliver a functional website aligned with real business needs while working within client constraints and expectations.",
    approach: [
      "Translated client requirements into usable UI components",
      "Prioritized clarity and usability over unnecessary complexity",
      "Iterated based on client feedback for optimal results",
    ],
    result: "A clean, production-ready website that met all business requirements and user expectations.",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Problem
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Approach
                  </h4>
                  <ul className="space-y-2">
                    {study.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Result
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
