"use client"

import { Globe, MapPin } from "lucide-react"
import { FadeIn, StaggerChildren } from "@/components/animations"

const timeline = [
  {
    year: "2025",
    company: "Rekord AG",
    location: "Remote",
    role: "Freelance Senior Product Designer",
    description:
      "Digital Product Passport system for AMRC wind turbines. Real-time monitoring e component traceability per maintenance technicians.",
  },
  {
    year: "2021",
    company: "Movyon",
    location: "Florence",
    role: "Senior UX Designer Consultant",
    description:
      "IoT & OT software design. User research, wireframing, design specifications for control room operators.",
  },
  {
    year: "2020",
    company: "Italiaonline",
    location: "Milan",
    role: "Senior UX Designer Lead",
    description:
      "Design vision e leadership. Design System with atomic design approach for 29.8M monthly users.",
  },
  {
    year: "2018",
    company: "nKoda / ClearScore / Yumpingo",
    location: "London / Remote",
    role: "Lead UX/UI Designer",
    description:
      "Music tech, fintech, restaurant CX. 110K+ music database, design systems, user testing.",
  },
  {
    year: "2013",
    company: "Paradigma",
    location: "Catania",
    role: "UX/UI Designer",
    description:
      "Startup & brand design. Apps, web apps, e-commerce for Orange Fiber, Telecom Italia, Moak Coffee.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              Experience
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              My professional journey in design
            </h2>
          </div>
        </FadeIn>

        {/* Remote work note */}
        <FadeIn delay={100}>
          <div className="mb-12 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <Globe className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="leading-relaxed text-muted-foreground">
              {"I've been working remotely with global teams since 2018 (London, Florence, Milan, Catania). Comfortable with async workflows, Figma collaboration, and distributed product teams."}
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[39px] top-0 hidden w-px bg-border md:block" />

          <StaggerChildren
            className="flex flex-col gap-8"
            staggerDelay={150}
          >
            {timeline.map((item) => (
              <div key={item.company} className="flex gap-6 md:gap-10">
                {/* Year badge */}
                <div className="flex shrink-0 flex-col items-center">
                  <div className="relative z-10 flex size-20 items-center justify-center rounded-lg border border-border bg-secondary font-mono text-sm font-bold text-foreground">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="card-lift flex-1 rounded-xl border border-border bg-card p-6">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {item.company}
                    </h3>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {item.location}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-primary">
                    {item.role}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>

        {/* Download CV */}
        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <a
              href="/documents/CV-Antonino-Omar-Amato-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Download my CV
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
