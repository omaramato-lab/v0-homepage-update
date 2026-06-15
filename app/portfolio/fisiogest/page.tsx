import Link from "next/link"
import { ArrowLeft, Check, Sparkles, Layers, Bell, ListChecks, Activity, Gauge } from "lucide-react"
import { PhoneFrame, LaptopFrame, BrowserChrome } from "@/components/portfolio/device-frames"

const GREEN = "#16a34a"

function MockDashboard() {
  return (
    <div className="flex h-full">
      <div className="hidden w-1/5 flex-col gap-2 bg-emerald-50 p-3 sm:flex">
        <div className="mb-2 h-2 w-3/4 rounded bg-emerald-600" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-1.5 w-full rounded bg-emerald-200" />
        ))}
      </div>
      <div className="flex-1 p-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-20 rounded bg-neutral-300" />
          <div className="h-4 w-12 rounded bg-emerald-500" />
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded border border-neutral-100 bg-neutral-50 p-2">
              <div className="mb-1 h-1.5 w-full rounded bg-neutral-200" />
              <div className="h-3 w-1/2 rounded bg-emerald-400" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 rounded border border-neutral-100 p-1.5">
              <div className="h-3 w-3 rounded-full bg-emerald-300" />
              <div className="h-1.5 flex-1 rounded bg-neutral-200" />
              <div className="h-1.5 w-8 rounded bg-emerald-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockPhoneApp() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-emerald-600 p-3 pt-6">
        <div className="mb-1 h-2 w-16 rounded bg-emerald-300" />
        <div className="h-2 w-24 rounded bg-white/80" />
      </div>
      <div className="flex-1 space-y-2 p-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-neutral-100 p-2 shadow-sm">
            <div className="mb-1.5 flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-emerald-200" />
              <div className="h-1.5 flex-1 rounded bg-neutral-200" />
            </div>
            <div className="h-1.5 w-2/3 rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-600">{children}</p>
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
          <span className="text-sm font-semibold text-emerald-600">FisioGest</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
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
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <LaptopFrame>
              <BrowserChrome>
                <MockDashboard />
              </BrowserChrome>
            </LaptopFrame>
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
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
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
              <div className="text-3xl font-bold text-emerald-600 md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="bg-emerald-50/60 py-16 md:py-20">
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
              <span className="text-xs font-semibold text-emerald-600">0{i + 1}</span>
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
                <h4 className="mb-1 text-sm font-semibold text-emerald-700">{c.t}</h4>
                <p className="text-sm text-neutral-600">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Map */}
      <section className="bg-emerald-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Insight</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">User Journey Map</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {["Onboarding", "Daily Session", "Patient Management", "Billing & Review"].map((step, i) => (
              <div key={step} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold">{step}</h3>
                <div className="mt-3 h-1.5 w-full rounded-full bg-emerald-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${60 + i * 12}%` }} />
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
                <div className="text-2xl font-bold text-emerald-600 md:text-3xl">{s.v}</div>
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
          <PhoneFrame>
            <MockPhoneApp />
          </PhoneFrame>
          <div className="grid gap-6 sm:grid-cols-3 lg:max-w-2xl">
            {mobileFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-100 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
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
            <LaptopFrame>
              <BrowserChrome>
                <MockDashboard />
              </BrowserChrome>
            </LaptopFrame>
            <div className="space-y-6">
              {[
                { t: "Patient List", b: "A prioritized, searchable list replaces the old archive, showing status at a glance." },
                { t: "Patient Profile", b: "A single profile unifies clinical history, documents and billing context." },
                { t: "KPIs and Pain Map", b: "Visual pain mapping and KPIs turn raw data into decisions during the session." },
              ].map((item) => (
                <div key={item.t} className="border-l-2 border-emerald-500 pl-4">
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
        <div className="mb-12 flex flex-wrap justify-center gap-6">
          {[0, 1, 2].map((i) => (
            <PhoneFrame key={i} className="w-[170px]">
              <MockPhoneApp />
            </PhoneFrame>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {incomeFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-100 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-base font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapeutic Pathway */}
      <section className="bg-emerald-50/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <SectionLabel>Clinical flow</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">Therapeutic Pathway</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
              The therapeutic pathway connects assessment, treatment plan and progress tracking into one continuous,
              reviewable flow.
            </p>
          </div>
          <LaptopFrame>
            <BrowserChrome>
              <MockDashboard />
            </BrowserChrome>
          </LaptopFrame>
        </div>
      </section>

      {/* Design System */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10">
          <SectionLabel>Foundations</SectionLabel>
          <h2 className="text-2xl font-bold md:text-3xl text-balance">Design System &amp; Scalability</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600 text-pretty">
            A scalable system of color, typography and components keeps the product consistent as it grows across
            platforms.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-100 p-6">
            <h3 className="mb-4 text-sm font-semibold">Color</h3>
            <div className="grid grid-cols-4 gap-2">
              {["#16a34a", "#22c55e", "#86efac", "#dcfce7", "#0f172a", "#475569", "#e2e8f0", "#f8fafc"].map((c) => (
                <div key={c} className="flex flex-col items-center gap-1">
                  <div
                    className="h-10 w-full rounded-md border border-neutral-200"
                    style={{ backgroundColor: c }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6">
            <h3 className="mb-4 text-sm font-semibold">Typography</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold">Aa Heading</p>
              <p className="text-base font-medium">Aa Subtitle</p>
              <p className="text-sm text-neutral-600">Aa Body — clear, legible and accessible at every size.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6">
            <h3 className="mb-4 text-sm font-semibold">Components</h3>
            <div className="space-y-3">
              <button className="w-full rounded-lg bg-emerald-600 py-2 text-sm font-medium text-white">Primary</button>
              <button className="w-full rounded-lg border border-emerald-600 py-2 text-sm font-medium text-emerald-700">
                Secondary
              </button>
              <div className="flex gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">Active</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-emerald-600 py-16 text-white md:py-20">
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
                <div className="mt-1 text-sm text-emerald-100">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-emerald-100">
              <Check className="h-5 w-5" />
              <span className="text-sm">From fragmented tools to one operational hub.</span>
            </div>
            <Link
              href="/portfolio"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              View other case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
