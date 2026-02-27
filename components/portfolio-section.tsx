"use client"

import { Badge } from "@/components/ui/badge"
import { Users, Zap, TrendingUp, MonitorPlay, Palette, Award } from "lucide-react"
import { FadeIn, StaggerChildren } from "@/components/animations"

const mainProjects = [
  {
    company: "Movyon - Autostrade per l'Italia",
    role: "Lead Product Designer (4 designers team)",
    title: "C2 RTM-4 - Device Monitoring",
    description:
      "Control room application for highway device monitoring. Introduced hypothesis-driven design methodology, created comprehensive design system, managed team of 4 designers for real-time dashboard customization.",
    impactIcon: Award,
    impactBadge: "Led 4-person design team",
    highlights:
      "Led 4-person design team \u2022 Implemented company-wide design system \u2022 Real-time videowall management",
    tags: ["Design Leadership", "Design System", "Hypothesis Testing", "Control Room UX"],
  },
  {
    company: "Rekord.io - Data Integrity & Trust",
    role: "Lead Product Designer",
    title: "Digital Product Passport (AMRC)",
    description:
      "Digital passport system for AMRC wind turbine component tracking and maintenance. Designed mobile-first interface for field technicians to access complete component lifecycle data, manufacturing specifications, quality metrics, and compliance documentation via QR code scanning.",
    impactIcon: Zap,
    impactBadge: "<30 sec QR to data access",
    highlights:
      "QR code to data access: <30 seconds \u2022 100% component traceability \u2022 Reduced maintenance time from hours to minutes",
    tags: ["Mobile-First Design", "IoT Integration", "Information Architecture", "Regulatory Compliance", "Field UX"],
  },
  {
    company: "Movyon - Autostrade per l'Italia",
    role: "Senior UX Designer",
    title: "BSB Video Management",
    description:
      "Complete renovation of legacy camera management system. Redesigned user flows for technicians and radio operators, implemented dark mode for low-light environments, improved operator shortcuts for rapid problem identification.",
    impactIcon: Users,
    impactBadge: "600+ operators",
    highlights:
      "Dark mode implementation \u2022 Optimized user flows for 600+ operators \u2022 Accessibility improvements",
    tags: ["Dark Mode", "User Flow", "Legacy System Redesign", "Accessibility"],
  },
  {
    company: "Movyon - Autostrade per l'Italia",
    role: "Senior Design Consultant / Lead Designer",
    title: "SIV - Highway Management Platform Redesign",
    description:
      "User-centered redesign of Autostrade highway management system. Improved operator efficiency by 60% through innovative dashboard and metro-inspired synoptic visualization. Reduced response time by 80% with optimized interface design.",
    impactIcon: TrendingUp,
    impactBadge: "60% usability improvement",
    highlights:
      "60% Usability Improvement \u2022 80% Faster Response Time \u2022 WCAG AA+ Compliance",
    tags: ["UX Research", "Dashboard Design", "System Design", "Accessibility"],
  },
  {
    company: "Italiaonline",
    role: "Senior UX Designer",
    title: "Pagine Bianche In Memoria",
    description:
      "Digital memorial platform celebrating memories of people and places. Led comprehensive UX research with 25 users, created user journeys, wireframes, and built complete design system with atomic design approach.",
    impactIcon: MonitorPlay,
    impactBadge: "25 user testing sessions",
    highlights:
      "25 user testing sessions \u2022 Significant usability improvement across all devices",
    tags: ["User Research", "Design System", "Cross-Device Design", "Accessibility"],
  },
  {
    company: "Movyon - Autostrade per l'Italia",
    role: "Senior UX Designer (Design System Lead)",
    title: "Design System - Front End Commons",
    description:
      "Enterprise design system used by 12+ applications. Built comprehensive component library supporting light and dark modes, collaborated with Studio Volpi for evolution. Standardized design across SPA, TMS, BVW, FFM, and more.",
    impactIcon: Palette,
    impactBadge: "12+ apps using it",
    highlights:
      "Used by 12+ enterprise applications \u2022 Light & Dark mode support \u2022 Team collaboration",
    tags: ["Design System", "Component Library", "Enterprise Scale", "Dark Mode"],
  },
]

const otherProjects = [
  { company: "ClearScore - Consumer FinTech", title: "Financial Health Insights", tags: ["Consumer", "FinTech"] },
  { company: "nKoda - Music Tech", title: "Digital Music Score Platform", tags: ["Music", "Education"] },
  { company: "Yumpingo - Hospitality Tech", title: "Restaurant Feedback Platform", tags: ["Hospitality", "Analytics"] },
  { company: "Comqura - Healthcare Startup", title: "Pharmacy Delivery App", tags: ["Healthcare", "Delivery"] },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              Portfolio
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Projects that made a difference
            </h2>
          </div>
        </FadeIn>

        {/* Main projects label */}
        <FadeIn>
          <h3 className="mb-8 font-mono text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Main Projects
          </h3>
        </FadeIn>

        {/* Main project cards - stagger */}
        <StaggerChildren
          className="flex flex-col gap-6"
          staggerDelay={120}
        >
          {mainProjects.map((project) => (
            <div
              key={project.title}
              className="card-lift group rounded-xl border border-border bg-card p-8"
            >
              {/* Impact badge */}
              <div className="mb-4">
                <Badge className="gap-1.5 border-primary/20 bg-primary/10 text-primary" variant="outline">
                  <project.impactIcon className="size-3" />
                  {project.impactBadge}
                </Badge>
              </div>

              {/* Company & role */}
              <p className="mb-1 text-sm text-muted-foreground">
                {project.company}
              </p>
              <p className="mb-2 text-xs text-muted-foreground/70">
                {project.role}
              </p>

              {/* Title */}
              <h4 className="mb-3 text-xl font-semibold text-card-foreground">
                {project.title}
              </h4>

              {/* Description */}
              <p className="mb-4 max-w-3xl leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Highlights */}
              <p className="mb-4 text-sm text-primary/80">
                {"◆ "}
                {project.highlights}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Other projects */}
        <FadeIn className="mt-16">
          <h3 className="mb-8 font-mono text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Other Products
          </h3>
        </FadeIn>

        <StaggerChildren
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={100}
        >
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="card-lift rounded-xl border border-border bg-card p-6"
            >
              <p className="mb-2 text-xs text-muted-foreground">
                {project.company}
              </p>
              <h4 className="mb-3 font-semibold text-card-foreground">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Download portfolio CTA */}
        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
            >
              View full portfolio (password-protected)
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
