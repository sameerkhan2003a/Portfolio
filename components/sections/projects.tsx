"use client"

import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "TaskPilot",
    description:
      "Real-time collaborative task management app with drag-and-drop boards, role-based access, and live notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Socket.io"],
    outcome: "Real-time systems, access control, and state synchronization",
    featured: false,
  },
  {
    title: "MythAI",
    description:
      "NLP-powered platform to analyze and compare global myths using TF-IDF and cosine similarity.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "NLP"],
    outcome: "Applied NLP concepts to extract meaning from unstructured text",
    featured: false,
  },
  {
    title: "Drexel Engagement System",
    description:
      "Designed survey-driven workflows using Google Forms, Sheets, and Zapier to track user engagement and automate follow-ups.",
    tech: ["Google Forms", "Google Sheets", "Zapier", "KPI Tracking", "Automation"],
    outcome: "Built a real-world automation pipeline with measurable engagement tracking",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {project.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Key Project
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 🔥 New Bottom Section (replaces buttons) */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {project.outcome}
                </p>

                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}