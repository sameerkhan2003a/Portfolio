"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Students Trained",
  },
  {
    value: 500,
    suffix: "+",
    label: "Hours of Teaching",
  },
  {
    value: 5,
    suffix: "+",
    label: "Full-Stack Apps Deployed",
  },
  {
    value: 1,
    suffix: "",
    label: "International Collaboration",
    subtext: "Drexel University",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Proof</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              {stat.subtext && (
                <p className="text-sm text-primary mt-1">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Proof Points */}
        <div className="mt-12 p-8 rounded-xl bg-card border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Problems I&apos;ve Solved</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Built a real-time notification system with complex state handling",
              "Designed multi-user collaboration logic from scratch",
              "Solved real client constraints in production systems",
              "Created structured learning systems for large batches",
              "Integrated AI into development and teaching workflows",
              "International collaboration with Drexel University",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
