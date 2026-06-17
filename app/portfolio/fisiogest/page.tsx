import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Sparkles, Layers, Bell, ListChecks, Activity, Gauge } from "lucide-react"

const GREEN = "#41775c"

function PhoneShot({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={400}
      height={860}
      className={`h-auto w-full max-w-[260px] drop-shadow-2xl ${className}`}
    />
  )
}

function DesktopShot({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={1400}
      height={1000}
      className={`h-auto w-full drop-shadow-2xl ${className}`}
    />
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#41775c]">{children}</p>
}

export default function FisioGestPage() {
  const loop = [
    {
      title: "Define & Hypothesize",
      body: "Each cycle starts from a clear hypothesis about a real clinical workflow, framed as a measurable user problem to solve.",
    },
    {
      title: "Design & Prototype",
      body: "Solutions are prototyped fast and reviewed with physiotherapists, keeping the production loop tight and grounded in practice.",
    },
    {
      title: "Validate & Iterate",
      body: "AI-assisted analysis surfaces friction in real sessions, feeding insights back into the next design iteration.",
    },
  ]

  const stats = [
    { value: "8+", label: "Iterative sprints" },
    { value: "48", label: "User stories shipped" },
    { value: "24", label: "Validated flows" },
    { value: "+30s", label: "Saved per session" },
  ]

  const problems = [
    "Physiotherapists relied on paper archives and spreadsheets with no single source of truth.",
    "High cognitive load: clinical, administrative and billing data were fragmented across tools.",
    "No visibility on income, missed appointments or therapeutic progress at a glance.",
    "Mobile workflows were an afterthought, while most work happened away from the desk.",
  ]

  const mobileFeatures = [
    {
      icon: ListChecks,
      title: "Card List",
      body: "Patients and sessions are surfaced as scannable cards, prioritized by what needs attention today.",
    },
    {
      icon: Layers,
      title: "Progressive Disclosure",
      body: "Details unfold only when needed, keeping the interface calm and reducing decision fatigue.",
    },
    {
      icon: Bell,
      title: "Immediate Feedback",
      body: "Every action confirms instantly, so practitioners stay confident while working on the move.",
    },
  ]

  const incomeFeatures = [
    {
      icon: Activity,
      title: "Immediate Monitoring",
      body: "Live view of sessions, payments and outstanding balances without leaving the patient context.",
    },
    {
      icon: Gauge,
      title: "Massive Efficiency",
      body: "Repetitive administrative steps are automated, freeing time for actual clinical work.",
    },
    {
      icon: Sparkles,
      title: "Frictionless Operation",
      body: "A single, coherent flow from booking to billing removes the constant context switching.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <span className="text-sm font-semibold text-[#41775c]">FisioGest</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f6f3] to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Product Design Case Study</SectionLabel>
              <h1 className="text-3xl font-bold leading-tight text-balance md:text-5xl">FisioGest Product Design</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 text-pretty md:text-lg">
                FisioGest is an AI-driven management software for physiotherapists. We redesigned how clinical,
                administrative and financial workflows come together, replacing traditional archives with a calm,
                operational tool built around real clinical practice.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Product Design", "UX & UI", "Mobile-First", "Design System"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#d9e7e0] bg-[#f1f6f3] px-3 py-1 text-xs font-medium text-[#2f5743]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/portfolio/fisiogest/agenda-webapp.png"
                alt="FisioGest agenda web app shown on a phone"
                width={1040}
                height={1380}
                priority
                className="h-auto w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Production Loop */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <SectionLabel>How we worked</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">The AI-Driven Production Loop</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {loop.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#41775c] text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-neutral-100 p-6 text-center">
              <div className="text-3xl font-bold text-[#41775c] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[#f1f6f3]/60 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <SectionLabel>The problem</SectionLabel>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-700 md:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Human-Centered Design Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <SectionLabel>Approach</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Human-Centered Design Process</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
            We grounded every decision in continuous conversation with physiotherapists, moving from raw observation to
            validated user stories.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Discover", "Define", "Design", "Deliver"].map((phase, i) => (
            <div key={phase} className="rounded-2xl border border-neutral-100 p-6">
              <span className="text-xs font-semibold text-[#41775c]">0{i + 1}</span>
              <h3 className="mt-2 text-base font-semibold">{phase}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {
                  [
                    "Contextual inquiry and interviews in real clinics to map the daily reality.",
                    "Synthesis into clear problems and prioritized hypotheses to test.",
                    "Rapid prototyping and co-design sessions with practitioners.",
                    "High-fidelity flows handed off with specs and a scalable system.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-100 bg-neutral-50/60 p-8">
          <h3 className="mb-6 text-center text-lg font-semibold">Design Sprint Cycles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "The Sprint", b: "Focused weekly cycles, each closing on a validated decision." },
              { t: "Design Phase", b: "From sketches to interactive prototypes ready for testing." },
              { t: "People Involved", b: "Physiotherapists, product and engineering working side by side." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white p-5">
                <h4 className="mb-1 text-sm font-semibold text-[#2f5743]">{c.t}</h4>
                <p className="text-sm text-neutral-600">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Map */}
      <section className="bg-[#f1f6f3]/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Insight</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">User Journey Map</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {["Onboarding", "Daily Session", "Patient Management", "Billing & Review"].map((step, i) => (
              <div key={step} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#41775c] text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold">{step}</h3>
                <div className="mt-3 h-1.5 w-full rounded-full bg-[#e8f1ec]">
                  <div className="h-full rounded-full bg-[#6b9b81]" style={{ width: `${60 + i * 12}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "+38s", l: "Faster per task" },
              { v: "~82%", l: "Task success" },
              { v: "100%", l: "Flows covered" },
              { v: "4.8", l: "Usability score" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-[#41775c] md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-neutral-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-12 text-center">
          <SectionLabel>Principle</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Mobile-First</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
            Most clinical work happens away from the desk, so the experience was designed for the phone first and scaled
            up to the desktop.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
          <div className="flex items-end justify-center">
            <Image
              src="/portfolio/fisiogest/hero-phones.png"
              alt="FisioGest shown on two iPhones"
              width={1040}
              height={1380}
              className="h-auto w-full max-w-sm drop-shadow-2xl"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:max-w-2xl">
            {mobileFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-100 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f1ec] text-[#2f5743]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-base font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Management */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <SectionLabel>Core experience</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">
              Patient Management: From Archive to Operational Tool
            </h2>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex justify-center">
              <PhoneShot
                src="/portfolio/fisiogest/pazienti-mobile.png"
                alt="FisioGest patient list on mobile"
              />
            </div>
            <div className="space-y-6">
              {[
                { t: "Patient List", b: "A prioritized, searchable list replaces the old archive, showing status at a glance." },
                { t: "Patient Profile", b: "A single profile unifies clinical history, documents and billing context." },
                { t: "KPIs and Pain Map", b: "Visual pain mapping and KPIs turn raw data into decisions during the session." },
              ].map((item) => (
                <div key={item.t} className="border-l-2 border-[#6b9b81] pl-4">
                  <h3 className="text-base font-semibold">{item.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Income Control */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-12 text-center">
          <SectionLabel>Outcome</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Income Control and Cognitive Load Reduction</h2>
        </div>
        <div className="mb-12 flex flex-wrap items-end justify-center gap-6">
          <PhoneShot
            src="/portfolio/fisiogest/incassi-mobile.png"
            alt="FisioGest income overview on mobile"
            className="max-w-[210px]"
          />
          <PhoneShot
            src="/portfolio/fisiogest/gestione-pagamento-mobile.png"
            alt="FisioGest payment management modal on mobile"
            className="max-w-[210px]"
          />
          <PhoneShot
            src="/portfolio/fisiogest/incassi-multiselect-mobile.png"
            alt="FisioGest bulk payment selection on mobile"
            className="max-w-[210px]"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {incomeFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-100 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f1ec] text-[#2f5743]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-base font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapeutic Pathway */}
      <section className="bg-[#f1f6f3]/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Clinical flow</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">Therapeutic Pathway</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
              The therapeutic pathway connects assessment, treatment plan and progress tracking into one continuous,
              reviewable flow.
            </p>
          </div>
          <DesktopShot
            src="/portfolio/fisiogest/percorso-desktop.png"
            alt="FisioGest therapeutic pathway and patient detail on desktop"
          />
          <div className="mt-8 flex justify-center">
            <PhoneShot
              src="/portfolio/fisiogest/dashboard-progress-mobile.png"
              alt="FisioGest patient progress dashboard on mobile"
            />
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-12 text-center">
          <SectionLabel>Scheduling</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Agenda</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
            The agenda is the operational heart of the day: day, week, month and year views with appointment status and a
            quick WhatsApp confirmation flow, available on mobile and desktop.
          </p>
        </div>
        <div className="mb-10 flex flex-wrap items-end justify-center gap-6">
          <PhoneShot
            src="/portfolio/fisiogest/agenda-mobile.png"
            alt="FisioGest agenda screen on mobile"
            className="max-w-[230px]"
          />
          <PhoneShot
            src="/portfolio/fisiogest/agenda-webapp.png"
            alt="FisioGest appointment detail with quick WhatsApp confirmation on mobile"
            className="max-w-[230px]"
          />
        </div>
        <DesktopShot
          src="/portfolio/fisiogest/agenda-desktop.png"
          alt="FisioGest agenda with appointments table on desktop"
          className="rounded-xl"
        />
      </section>

      {/* Design System */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10">
          <SectionLabel>Foundations</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Design System &amp; Scalability</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
            A token-based system of color, typography, spacing and components keeps the product consistent and
            accessible as it scales across mobile and desktop.
          </p>
        </div>

        {/* Color tokens */}
        <div className="mb-8 rounded-2xl border border-neutral-100 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-base font-semibold">Color</h3>
            <span className="text-xs uppercase tracking-widest text-neutral-400">Tokens</span>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Primary — Sage</p>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "primary/900", hex: "#1f3a2c" },
              { name: "primary/700", hex: "#2f5743" },
              { name: "primary/600", hex: "#41775c" },
              { name: "primary/400", hex: "#6b9b81" },
              { name: "primary/200", hex: "#b3d0c1" },
              { name: "primary/50", hex: "#f1f6f3" },
            ].map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl border border-neutral-100">
                <div className="h-16 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-2">
                  <p className="text-xs font-medium text-neutral-700">{c.name}</p>
                  <p className="font-mono text-[10px] uppercase text-neutral-400">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Neutrals</p>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "ink/900", hex: "#0f172a" },
              { name: "ink/700", hex: "#334155" },
              { name: "ink/500", hex: "#64748b" },
              { name: "ink/300", hex: "#cbd5e1" },
              { name: "ink/100", hex: "#e2e8f0" },
              { name: "ink/50", hex: "#f8fafc" },
            ].map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl border border-neutral-100">
                <div className="h-16 w-full" style={{ backgroundColor: c.hex }} />
                <div className="p-2">
                  <p className="text-xs font-medium text-neutral-700">{c.name}</p>
                  <p className="font-mono text-[10px] uppercase text-neutral-400">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Semantic / Status</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { name: "success", hex: "#41775c" },
              { name: "warning", hex: "#d6a338" },
              { name: "error", hex: "#c0533f" },
              { name: "info", hex: "#5a7d9a" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3 rounded-xl border border-neutral-100 p-3">
                <div className="h-8 w-8 flex-shrink-0 rounded-md" style={{ backgroundColor: c.hex }} />
                <div>
                  <p className="text-xs font-medium text-neutral-700">{c.name}</p>
                  <p className="font-mono text-[10px] uppercase text-neutral-400">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Typography */}
          <div className="rounded-2xl border border-neutral-100 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold">Typography</h3>
              <span className="text-xs uppercase tracking-widest text-neutral-400">Inter</span>
            </div>
            <div className="divide-y divide-neutral-100">
              {[
                { label: "Display / 40·Bold", size: "text-4xl font-bold", sample: "Aa" },
                { label: "H1 / 30·Bold", size: "text-3xl font-bold", sample: "Heading" },
                { label: "H2 / 24·Semibold", size: "text-2xl font-semibold", sample: "Subheading" },
                { label: "Body / 16·Regular", size: "text-base", sample: "Body copy stays legible." },
                { label: "Caption / 12·Medium", size: "text-xs font-medium uppercase tracking-wider", sample: "Caption label" },
              ].map((t) => (
                <div key={t.label} className="flex items-baseline justify-between gap-4 py-3">
                  <span className={`${t.size} text-neutral-900`}>{t.sample}</span>
                  <span className="flex-shrink-0 font-mono text-[10px] text-neutral-400">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing + Radius */}
          <div className="rounded-2xl border border-neutral-100 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-semibold">Spacing &amp; Radius</h3>
              <span className="text-xs uppercase tracking-widest text-neutral-400">4pt grid</span>
            </div>
            <div className="mb-6 space-y-2">
              {[
                { name: "xs", px: 4 },
                { name: "sm", px: 8 },
                { name: "md", px: 16 },
                { name: "lg", px: 24 },
                { name: "xl", px: 40 },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="w-8 font-mono text-[10px] uppercase text-neutral-400">{s.name}</span>
                  <div className="h-3 rounded bg-[#6b9b81]" style={{ width: s.px * 2 }} />
                  <span className="font-mono text-[10px] text-neutral-400">{s.px}px</span>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-3">
              {[
                { name: "sm", r: "rounded-md" },
                { name: "md", r: "rounded-xl" },
                { name: "lg", r: "rounded-2xl" },
                { name: "full", r: "rounded-full" },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-1">
                  <div className={`h-12 w-12 border-2 border-[#41775c] bg-[#f1f6f3] ${r.r}`} />
                  <span className="font-mono text-[10px] text-neutral-400">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="mt-6 rounded-2xl border border-neutral-100 p-6 md:p-8">
          <h3 className="mb-6 text-base font-semibold">Components</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Buttons</p>
              <button className="w-full rounded-lg bg-[#41775c] py-2 text-sm font-medium text-white">Primary</button>
              <button className="w-full rounded-lg border border-[#41775c] py-2 text-sm font-medium text-[#2f5743]">
                Secondary
              </button>
              <button className="w-full rounded-lg py-2 text-sm font-medium text-[#41775c] hover:bg-[#f1f6f3]">
                Ghost
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Badges</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#e8f1ec] px-3 py-1 text-xs text-[#2f5743]">Active</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">Draft</span>
                <span className="rounded-full bg-[#fbeede] px-3 py-1 text-xs text-[#a4762a]">Pending</span>
                <span className="rounded-full bg-[#f7e1db] px-3 py-1 text-xs text-[#a4402c]">Overdue</span>
              </div>
              <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">Input</p>
              <div className="rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-400">
                Search patient…
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Patient card</p>
              <div className="rounded-xl border border-neutral-100 p-3 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f1ec] text-xs font-semibold text-[#2f5743]">
                    MR
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-800">Maria Rossi</p>
                    <p className="text-[10px] text-neutral-400">Next: today · 15:30</p>
                  </div>
                  <span className="ml-auto h-2 w-2 rounded-full bg-[#6b9b81]" />
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#e8f1ec]">
                  <div className="h-full w-2/3 rounded-full bg-[#41775c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[#41775c] py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl text-balance">Impact and Success Metrics</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { v: "-62%", l: "Time on admin tasks" },
              { v: "+30s", l: "Saved per session" },
              { v: "100%", l: "Workflows unified" },
              { v: "1 hub", l: "Single source of truth" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-[#e8f1ec]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-[#e8f1ec]">
              <Check className="h-5 w-5" />
              <span className="text-sm">From fragmented tools to one operational hub.</span>
            </div>
            <Link
              href="/portfolio"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2f5743] transition-colors hover:bg-[#f1f6f3]"
            >
              View other case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
