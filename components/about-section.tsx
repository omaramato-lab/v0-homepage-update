"use client"

import { Monitor, Cpu, Layers, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerChildren } from "@/components/animations"
import { useInView, useCountUp } from "@/hooks/use-animations"

const specializations = [
  {
    icon: Monitor,
    title: "Control Room & Dashboard UX",
    description:
      "Traffic management systems (Movyon), real-time monitoring, data-heavy interfaces for operators.",
  },
  {
    icon: Cpu,
    title: "IoT & Industrial Tools",
    description:
      "Digital Product Passport (AMRC/Rekord), field technician UX, compliance-heavy products.",
  },
  {
    icon: Layers,
    title: "Design Systems at Scale",
    description:
      "Led design system used by 12+ enterprise apps (Movyon), atomic design approach for 29.8M users (Italiaonline).",
  },
  {
    icon: Building2,
    title: "Regulated & B2B SaaS",
    description:
      "Fintech (ClearScore), music tech (nKoda), healthcare, mobility, manufacturing.",
  },
]

const industries = [
  "Mobility & Traffic Control",
  "Manufacturing & Maintenance",
  "Fintech",
  "Music Tech",
  "Hospitality",
  "Healthcare",
  "E-commerce",
]

const stats = [
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Completed projects" },
  { value: 8, suffix: "+", label: "Partner companies" },
  { value: 4, suffix: "+", label: "Years at Movyon" },
]

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isInView } = useInView()
  const count = useCountUp(value, 2000, isInView)

  return (
    <div
      ref={ref}
      className="card-lift flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
    >
      <span className="text-3xl font-bold text-primary">
        {count}{suffix}
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              About Me
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              About Me
            </h2>
          </div>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={100}>
          <div className="mx-auto mb-16 max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"I have 12+ years of experience designing complex digital products for companies like Movyon (smart mobility), ClearScore (fintech), nKoda (music tech), Paradigma and others."}
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"I specialize in transforming hard-to-use products into intuitive and scalable experiences. My expertise covers design systems, user research, interaction design and design leadership for distributed teams."}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"Currently working as a Fractional Head of Design on retainer with B2B startups and companies, helping them grow quickly while maintaining high design quality. I've collaborated with developers, product managers and founders in Italy and abroad."}
            </p>
          </div>
        </FadeIn>

        {/* What I do summary */}
        <FadeIn delay={200}>
          <div className="mx-auto mb-16 max-w-3xl rounded-xl border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-card-foreground">What I do:</span>{" "}
              {"Strategic design leadership for complex B2B products \u2022 UX Audit and digital product optimization \u2022 Design system governance and team mentoring \u2022 Landing pages and dev-ready web design"}
            </p>
          </div>
        </FadeIn>

        {/* Specializations */}
        <FadeIn>
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            My Specializations
          </h3>
        </FadeIn>
        <StaggerChildren
          className="mb-16 grid gap-6 md:grid-cols-2"
          staggerDelay={120}
        >
          {specializations.map((s) => (
            <div
              key={s.title}
              className="card-lift flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-card-foreground">{s.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Industries */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              {"Industries I've Worked In"}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Badge
                  key={industry}
                  variant="secondary"
                  className="bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Stats with count-up */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
