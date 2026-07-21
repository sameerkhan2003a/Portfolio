"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Students Mentored",
  },
  {
    value: 500,
    suffix: "+",
    label: "Hours of Technical Training",
  },
  {
    value: 6,
    suffix: "+",
    label: "Full-Stack Applications",
  },
  {
    value: 1,
    suffix: "",
    label: "International Project",
    subtext: "Drexel University",
  },
]

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return

        hasAnimated.current = true

        const duration = 2000
        const startTime = performance.now()

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          setCount(Math.floor(progress * value))

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(value)
          }
        }

        requestAnimationFrame(animate)
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
    >
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-card/30 py-16 sm:py-20 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 sm:gap-4 lg:mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Experience at a Glance
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-7"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />

              <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>

              {stat.subtext && (
                <p className="mt-2 text-sm text-primary">
                  {stat.subtext}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:mt-12 sm:p-8">
          <h3 className="mb-6 text-xl font-semibold text-foreground sm:text-2xl">
            Experience Highlights
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "Built a real-time task management platform with live collaboration.",
              "Developed an AI-powered recommendation system using NLP techniques.",
              "Created a content-rich platform showcasing South India's history and culture.",
              "Delivered a client website through requirement gathering and iterative feedback.",
              "Designed technical presentations, quizzes, and learning material for 100+ students.",
              "Collaborated with an international team from Drexel University on a customer engagement automation project.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
