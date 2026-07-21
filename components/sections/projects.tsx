"use client"

import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "TaskPilot",
    description:
      "A real-time collaborative task management platform featuring drag-and-drop boards, role-based access, secure authentication, and live updates.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
    ],
    outcome:
      "Built scalable real-time collaboration with synchronized state and secure user management.",
    featured: true,
    url: "https://github.com/sameer-khan-a/Task_Pilot_PERN_Application", // Replace with your GitHub URL
    label: "View on GitHub",
  },
  {
    title: "Deccan Central",
    description:
      "A modern web platform showcasing the history, culture, architecture, wildlife, cuisine, and destinations of South India through an immersive digital experience.",
    tech: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
    ],
    outcome:
      "Designed a large-scale component-driven application with responsive layouts, immersive UI, and optimized performance.",
    featured: false,
    url: "https://deccan-central-neon.vercel.app/",
    label: "Visit Website",
  },
  {
    title: "MythAI",
    description:
      "An NLP-powered platform for exploring and comparing global myths using TF-IDF and cosine similarity techniques.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "NLP",
    ],
    outcome:
      "Applied natural language processing to analyze and discover relationships within unstructured text.",
    featured: false,
    url: "https://github.com/sameer-khan-a/mythai", // Replace with your GitHub URL
    label: "View on GitHub",
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
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              {project.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Flagship Project
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.outcome}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  {project.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
