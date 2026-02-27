"use client"

import { User, Palette, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerChildren } from "@/components/animations"

const cards = [
  {
    icon: User,
    title: "Fractional Head of Design",
    description:
      "Part-time design leadership (2-3 days/week) for B2B startups scaling their product + design team. Retainer-based, 3-6 months minimum.",
  },
  {
    icon: Palette,
    title: "Senior Product Designer (Contract)",
    description:
      "Full-time 3-6 month contracts for complex B2B products: dashboards, IoT platforms, regulated tools, design systems. Remote, global teams.",
  },
  {
    icon: Search,
    title: "UX Audits for Complex Products",
    description:
      "2-4 week deep-dive audits for B2B SaaS, industrial tools, or data-heavy apps. Deliverable: prioritized action plan + quick wins.",
  },
]

export function LookingForSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              Opportunities
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {"What I'm Looking For"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {"I'm actively seeking remote opportunities in these formats:"}
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <StaggerChildren
          className="grid gap-6 md:grid-cols-3"
          staggerDelay={150}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-lift group flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <card.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {card.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </StaggerChildren>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="btn-glow gap-2">
              <a href="#contact">
                {"Book a 30-min intro call"}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
