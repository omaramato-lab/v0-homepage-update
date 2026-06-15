import Link from "next/link"
import { ArrowLeft, MapPin, AlertCircle, Filter, Users } from "lucide-react"
import { LaptopFrame, BrowserChrome } from "@/components/portfolio/device-frames"

const NAVY = "#2f4ba8"

function MockMonitoring() {
  return (
    <div className="flex h-full">
      <div className="hidden w-1/5 flex-col gap-1.5 bg-[#2f4ba8] p-2.5 sm:flex">
        <div className="mb-1 h-2 w-2/3 rounded bg-white/70" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-1.5 w-full rounded bg-white/25" />
        ))}
      </div>
      <div className="flex-1 bg-slate-50 p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-slate-300" />
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-red-400" />
          </div>
        </div>
        <div className="space-y-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 rounded bg-white p-1 shadow-sm">
              <div
                className={`h-2 w-2 rounded-full ${
                  i % 3 === 0 ? "bg-green-500" : i % 3 === 1 ? "bg-amber-500" : "bg-red-500"
                }`}
              />
              <div className="h-1.5 flex-1 rounded bg-slate-200" />
              <div className="h-1.5 w-6 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockMap() {
  return (
    <div className="relative h-full bg-[#dbeafe]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#94a3b8_1px,transparent_1px),linear-gradient(90deg,#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />
      {[
        { top: "20%", left: "30%", c: "bg-green-500" },
        { top: "35%", left: "55%", c: "bg-amber-500" },
        { top: "55%", left: "40%", c: "bg-red-500" },
        { top: "60%", left: "65%", c: "bg-green-500" },
        { top: "45%", left: "25%", c: "bg-green-500" },
      ].map((p, i) => (
        <span
          key={i}
          className={`absolute h-4 w-4 rounded-full ring-4 ring-white/60 ${p.c}`}
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2f4ba8]">{children}</p>
}

export default function BsbPage() {
  const stats = [
    { value: "5,332", label: "Video streams managed" },
    { value: "2", label: "Applications redesigned" },
    { value: "4", label: "User types involved" },
    { value: "12+", label: "Iterative research sessions" },
  ]

  const problems = [
    "No spatial overview — operators couldn't see regional stream health at a glance.",
    "Status indicators were inconsistent across table, map and detail views.",
    "Filtering logic was opaque, with no feedback on applied constraints.",
    "Four user types shared one interface with no role-appropriate defaults.",
  ]

  const timeline = [
    { date: "Jan 2023 · Discovery", title: "Contextual inquiry — control room observation", body: "4 operators, 2 sessions, Rome & Milan hubs" },
    { date: "Feb 2023 · Synthesis", title: "Affinity mapping & journey reconstruction", body: "Internal team — 3 UX + 2 engineers" },
    { date: "Mar 2023 · Co-design", title: "Sketching workshops — map and table views", body: "6 participants, mixed operator/engineer roles" },
    { date: "May 2023 · Validation", title: "Prototype testing — task-based sessions", body: "5 operators, think-aloud protocol" },
    { date: "Sep 2023 · Iteration", title: "Second-round testing with revised flows", body: "4 participants, 2 new users for fresh perspective" },
    { date: "Jan 2024 · Handoff", title: "Dev handoff & implementation review", body: "2 front-end engineers, 1 QA specialist" },
  ]

  const decisions = [
    {
      icon: MapPin,
      problem: "Operators had no spatial mental model of the network — tables gave no geographic context.",
      choice: "Map-first landing page with severity-coded cluster markers.",
      rationale: "Contextual inquiry showed operators always oriented by geography first. Clustering reduced cognitive load.",
    },
    {
      icon: AlertCircle,
      problem: "Status terminology varied across views — 'Offline', 'Degraded', 'Inactive' were used inconsistently.",
      choice: "Unified status taxonomy with a 5-state model applied globally.",
      rationale: "A single source-of-truth model with icon + colour pairs. Prototype testing confirmed recognition over recall.",
    },
    {
      icon: Filter,
      problem: "Filtering was invisible — no confirmation of active constraints, no way to clear selectively.",
      choice: "Persistent filter chip strip with inline count feedback.",
      rationale: "Users expressed high frustration when results changed unexpectedly. Visible chips made state transparent.",
    },
    {
      icon: Users,
      problem: "Four user types shared one interface, but their primary tasks and expertise levels differed significantly.",
      choice: "Role-defaulted views with shared underlying data model.",
      rationale: "Rather than building separate apps, we set sensible column defaults and entry points per role.",
    },
  ]

  const outcomes = [
    { value: "↓ 58%", title: "Task time reduction", body: "Investigating a degraded stream: from 14 min to under 6 min in usability testing." },
    { value: "5 → 1", title: "Unified status taxonomy", body: "Replaced inconsistent labelling across views with a single 5-state model." },
    { value: "4 roles", title: "Served by one system", body: "Operators, engineers, managers and admins — with role-appropriate defaults." },
  ]

  const nextMetrics = [
    { title: "Mean time to acknowledge an alert", body: "How long it takes operators to action a degraded stream after it appears in the dashboard.", target: "Target: < 4 min median — down from 14 min observed." },
    { title: "Map vs. table entry point ratio", body: "Where users land on first session and per session.", target: "Target: 70% of engineers entering via map." },
    { title: "Filter abandonment rate", body: "How often users open the filter panel but close it without applying a constraint.", target: "Target: < 15% abandonment across all views." },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="bg-[#2f4ba8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <span className="text-sm font-semibold text-white">BSB Video Monitoring</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#2f4ba8] text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-12">
          <p className="mb-5 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            UX Design · Enterprise Tooling
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-balance md:text-5xl">
            Modernizing the video infrastructure tools of Italy&apos;s motorway network
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 text-pretty md:text-lg">
            A research-driven redesign of BSB&apos;s internal video monitoring platform — used by operators across 14
            motorway concessionaires to manage over 5,000 live camera streams across Italy&apos;s motorways.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context & Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Context &amp; Problem</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">
              A critical tool built for engineers, used daily by operators
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              BSB&apos;s platform had grown organically over a decade — each new feature bolted onto the existing
              structure without a coherent information architecture. Operators managing thousands of simultaneous
              streams across Italy&apos;s motorways were navigating dense, inconsistent interfaces with no clear
              hierarchy.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              The core challenge was not just visual: the system had no unified model of how streams, cameras, codecs
              and geographic nodes related to each other. Users had developed elaborate workarounds to compensate for
              what the interface couldn&apos;t show.
            </p>
            <ul className="mt-6 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span className="text-sm leading-relaxed text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden rounded-md">
                <MockMonitoring />
              </div>
            </div>
            <div className="self-end rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-500">
              Before redesign
            </div>
          </div>
        </div>
      </section>

      {/* Research rhythm */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Research &amp; Discovery</SectionLabel>
              <h2 className="text-2xl font-bold md:text-3xl text-balance">Bi-weekly research rhythm over 6 months</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                Sessions alternated between observation, co-design, and validation — with participants from four roles:
                control room operators, network engineers, regional managers, and system administrators.
              </p>
              <ol className="mt-8 space-y-6">
                {timeline.map((t) => (
                  <li key={t.title} className="relative border-l-2 border-slate-200 pl-5">
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#2f4ba8]" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#2f4ba8]">{t.date}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{t.title}</p>
                    <p className="text-sm text-slate-500">{t.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold text-slate-900">Journey Maps — Key User Flows</p>
              <div className="space-y-5">
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold">Operator: Investigating a degraded stream</p>
                    <span className="text-xs text-slate-400">7 steps · avg 14 min</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Open dashboard", "Spot anomaly", "Search camera", "Open detail", "Cross-reference map", "Check codec", "Escalate"].map(
                      (step, i) => (
                        <span
                          key={step}
                          className={`rounded-md px-2 py-1 text-xs ${
                            i === 3 || i === 6 ? "bg-red-50 text-red-500" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {i + 1}. {step}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-3 flex gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-slate-400" /> Normal step
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-500" /> Pain point identified
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold">Engineer: Regional health check at shift start</p>
                    <span className="text-xs text-slate-400">5 steps · avg 6 min</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Open map view", "Filter by region", "Interpret clusters", "Drill into node", "Log findings"].map((step, i) => (
                      <span key={step} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        {i + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key design decisions */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Key design decisions</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">Four choices that shaped the redesign</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            Each decision was grounded in observed behaviour, validated through prototype testing, and weighed against
            engineering constraints.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {decisions.map((d, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f4ba8]/10 text-[#2f4ba8]">
                <d.icon className="h-5 w-5" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Problem</p>
              <p className="mb-4 text-sm leading-relaxed text-slate-700">{d.problem}</p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#2f4ba8]">Design choice</p>
              <p className="mb-4 text-sm font-medium leading-relaxed text-slate-900">{d.choice}</p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Rationale</p>
              <p className="text-sm leading-relaxed text-slate-600">{d.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Outcome</SectionLabel>
              <h2 className="text-2xl font-bold md:text-3xl text-balance">
                From fragmented tooling to a coherent monitoring platform
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              The redesigned system shipped in Q1 2024, consolidating the map view and stream list into a unified
              interface with role-based defaults.
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <LaptopFrame>
              <BrowserChrome>
                <MockMonitoring />
              </BrowserChrome>
            </LaptopFrame>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <MockMap />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl font-bold text-[#2f4ba8]">{o.value}</div>
                <h3 className="mt-2 text-sm font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design system */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Design System &amp; Screens</SectionLabel>
            <h2 className="text-2xl font-bold md:text-3xl text-balance">A consistent visual language across every view</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              The redesign introduced a shared component library covering navigation, status indicators, tables, map
              overlays, and detail panels — ensuring visual and behavioural consistency across the platform&apos;s two
              applications.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {[
                "Dashboard overview with map and status summary",
                "Stream list with filtering, sorting and role defaults",
                "Camera detail with live feed, codec, and metadata",
                "Map view with severity-coded regional clusters",
                "Report and export flows for management roles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2f4ba8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="aspect-square overflow-hidden rounded-md">
                <MockMonitoring />
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="aspect-square overflow-hidden rounded-md">
                <MockMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'd measure next */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>What I&apos;d measure next</SectionLabel>
              <h2 className="text-2xl font-bold md:text-3xl text-balance">Validating impact in production</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Usability testing confirms intent; field data confirms outcome. These are the metrics I&apos;d instrument
              in the first 90 days post-launch.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {nextMetrics.map((m) => (
              <div key={m.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-base font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body}</p>
                <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-[#2f4ba8]">{m.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#2f4ba8] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold">Modernizing Video Infrastructure Platform</h2>
              <p className="mt-2 max-w-md text-sm text-white/70">
                A research-led UX engagement across 6 months — from contextual inquiry to validated high-fidelity
                prototypes and engineering handoff.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2f4ba8] transition-colors hover:bg-slate-100"
              >
                View other case studies
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">My role</p>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>UX Research Lead</li>
                  <li>Interaction Design</li>
                  <li>Prototyping &amp; Testing</li>
                  <li>Design System</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">Tools used</p>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>Figma</li>
                  <li>Miro</li>
                  <li>Dovetail</li>
                  <li>Notion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
