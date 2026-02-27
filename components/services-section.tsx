"use client"

import { Briefcase, Palette, Search, CheckCircle } from "lucide-react"
import { FadeIn, StaggerChildren } from "@/components/animations"

const services = [
  {
    icon: Briefcase,
    title: "Fractional Head of Design / Product Design",
    description:
      "Design leadership for complex B2B products. Design system management, design review, dev coordination and product strategy.",
    features: [
      "Dedicated Slack/Teams",
      "Design system management",
      "Design review feature development",
      "2 alignment meetings/week",
      "Min. 5 days per month",
    ],
  },
  {
    icon: Palette,
    title: "Freelance Product Designer (Contractor)",
    description:
      "Intensive engagement 5 days/week for 3-6 months. Research, UI system, iterative prototypes for scaling B2B products.",
    features: [
      "Dev-ready milestone handoff",
      "Daily standup + monthly reports",
      "4+ iterations/month",
      "Research + Design System",
      "Full-time intensive execution",
    ],
  },
  {
    icon: Search,
    title: "UX Audit",
    description:
      "In-depth analysis of digital products. I identify usability, accessibility and design system issues.",
    features: [
      "Walkthrough call (60 min)",
      "3-5 redesigned screens",
      "Complete PDF report",
      "Analysis of 2-3 critical flows",
      "Kickoff call with stakeholders",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              Services
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Tailored design solutions for your needs
            </h2>
          </div>
        </FadeIn>

        {/* Services grid */}
        <StaggerChildren
          className="grid gap-6 md:grid-cols-3"
          staggerDelay={150}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card-lift flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
