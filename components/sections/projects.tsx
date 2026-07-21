"use client"

import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "TaskPilot",
    description:
      "Real-time collaborative task management app with drag-and-drop boards, role-based access, and live notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Socket.io"],
    outcome:
      "Real-time systems, access control, and state synchronization",
    featured: false,
  },
  {
    title: "MythAI",
    description:
      "NLP-powered platform to analyze and compare global myths using TF-IDF and cosine similarity.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "NLP"],
    outcome:
      "Applied NLP concepts to extract meaning from unstructured text",
    featured: false,
  },
  {
    title: "Drexel Engagement System",
    description:
      "Designed survey-driven workflows using Google Forms, Sheets, and Zapier to track user engagement and automate follow-ups.",
    tech: [
      "Google Forms",
      "Google Sheets",
      "Zapier",
      "KPI Tracking",
      "Automation",
    ],
    outcome:
      "Built a real-world automation pipeline with measurable engagement tracking",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Selected Work
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6"
            >
              {project.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Key Project
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground sm:px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
                <p className="flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.outcome}
                </p>

                <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
