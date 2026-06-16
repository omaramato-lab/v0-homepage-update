import type React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  QrCode,
  Layers,
  BarChart3,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Smartphone,
  CircleUserRound,
  ExternalLink,
  CheckCircle,
} from "lucide-react"

export const metadata = {
  title: "Rekord — Digital Product Passport · Case Study",
  description:
    "A mobile-first Digital Product Passport for wind turbine maintenance, co-designed with the AMRC.",
}

/* ---------- Small shared pieces ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 whitespace-nowrap">
        {children}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  )
}

function StatusBar({ status = "PASSED", statusSub = "7/7 Components" }: { status?: string; statusSub?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-xl border border-white/5 bg-black/40 px-4 py-4 md:px-6">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-500/90 text-[10px] font-bold text-white">
          ✦
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Rekord</p>
          <p className="text-[10px] text-emerald-400">www.rekord.io</p>
        </div>
      </div>
      <div className="flex items-center gap-2 border-l border-white/10 pl-6">
        <CheckCircle className="h-5 w-5 text-emerald-400" />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">{status}</p>
          <p className="text-[10px] text-white/40">{statusSub}</p>
          <p className="text-[9px] uppercase tracking-wider text-white/30">Quality check</p>
        </div>
      </div>
      <div className="leading-tight border-l border-white/10 pl-6">
        <p className="text-lg font-bold text-white">
          52h <span className="text-xs font-normal text-white/50">2 Days</span>
        </p>
        <p className="text-[9px] uppercase tracking-wider text-white/30">Production time</p>
      </div>
      <div className="leading-tight border-l border-white/10 pl-6">
        <p className="text-sm font-semibold text-white">5 parts</p>
        <p className="text-[10px] text-white/40">Blades</p>
        <p className="text-[9px] uppercase tracking-wider text-white/30">Energy consumption</p>
      </div>
      <div className="leading-tight border-l border-white/10 pl-6">
        <p className="text-sm font-semibold text-white">Dec, 03</p>
        <p className="text-[10px] text-white/40">2025</p>
        <p className="text-[9px] uppercase tracking-wider text-white/30">Next inspection</p>
      </div>
    </div>
  )
}

/* ---------- DPP dashboard mockup ---------- */

const componentTree = [
  { label: "Blades", type: "group" as const },
  { label: "Blade part 1", type: "item" as const },
  { label: "Blade part 2", type: "item" as const },
  { label: "Blade part 3", type: "item" as const },
  { label: "Blade part 4", type: "item" as const },
  { label: "Blade part 5", type: "item" as const },
  { label: "Hubs", type: "group" as const },
  { label: "Hub part 1", type: "item" as const },
  { label: "Hub part 2", type: "item" as const },
]

const overviewRows = [
  ["OWNER", "AMRC"],
  ["PRODUCT", "WIND TURBINE"],
  ["REGISTRATION DATE", "11/09/2025 – 11:24"],
  ["EXPIRING DATE", "11/09/2026 – 11:24"],
  ["NUMBER OF COMPONENTS", "7"],
  ["QUALITY CONTROL", "7 / 7 Passed"],
  ["TOTAL WEIGHT", "28 kg"],
  ["TOTAL ENERGY", "XXX kwh"],
]

function DppOverviewMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-3 md:p-5">
      {/* top bar */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-emerald-400">Product Overview</span>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1 rounded-md border border-emerald-500/40 px-2 py-1 text-[10px] text-emerald-300 sm:inline-flex">
            <ExternalLink className="h-3 w-3" /> Go to Workspace
          </span>
          <CircleUserRound className="h-6 w-6 text-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr]">
        {/* sidebar */}
        <aside className="rounded-lg border border-white/10 bg-black/40 p-3">
          <p className="rounded bg-white/5 px-2 py-1 text-xs font-semibold text-white">Digital Product Passport</p>
          <p className="mt-3 text-[11px] text-white/50">Components list</p>
          <ul className="mt-2 space-y-1.5">
            {componentTree.map((node) => (
              <li
                key={node.label}
                className={
                  node.type === "group"
                    ? "text-[11px] font-medium text-white"
                    : "pl-3 text-[11px] text-emerald-400/80"
                }
              >
                {node.type === "group" ? `- ${node.label}` : node.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* rows */}
        <div className="space-y-2">
          {overviewRows.map(([k, v]) => (
            <div
              key={k}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/30 px-3 py-2.5"
            >
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-sky-500" />
              <span className="text-[11px] uppercase tracking-wide text-white/45">{k}</span>
              <span className="text-[11px] text-white/80">{v}</span>
            </div>
          ))}
          <div className="pt-1">
            <StatusBar />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Component detail mockup (Screen 02) ---------- */

const detailNav = [
  { label: "Blade part 1", active: true },
  { label: "Overview", sub: true, active: true },
  { label: "3D Model", sub: true },
  { label: "Inspection Reports", sub: true },
  { label: "EU Compliance", sub: true },
  { label: "Maintenance Instructions", sub: true },
]

const manufacturing = [
  ["Component ID", "B09885"],
  ["Process ID", "VWPT_AM_R1,0"],
  ["Machine", "Stratasys F170"],
  ["Material", "ABS"],
  ["Material Cassette", "FDM_B_2356"],
  ["Support Material", "HIPS"],
  ["Completion", "23/01/2025 – 13:25"],
]

const qualityControl = [
  ["Equipment", "Calliper C017"],
  ["Test Type", "Hole Pitch"],
  ["Target", "20:00 mm +/- 0,50"],
  ["Actual", "20.15 mm"],
  ["Deviation", "+0.15 mm"],
  ["Replacements", "No"],
  ["Status", "Passed B+"],
]

const energyBars = [50, 70, 55, 90, 65]

function ComponentDetailMockup({ endOfLife = false }: { endOfLife?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-3 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs">
          <span className="text-emerald-400">Product Overview</span>
          <span className="text-white/60">Component B09885</span>
        </div>
        <CircleUserRound className="h-6 w-6 text-white/40" />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[180px_1fr]">
        {/* sidebar */}
        <aside className="hidden rounded-lg border border-white/10 bg-black/40 p-3 lg:block">
          <p className="rounded bg-white/5 px-2 py-1 text-xs font-semibold text-white">Digital Product Passport</p>
          <p className="mt-3 text-[11px] text-white/50">Components list</p>
          <p className="mt-2 text-[11px] font-medium text-white">- Blades</p>
          <ul className="mt-1 space-y-1.5">
            {detailNav.map((n) => (
              <li
                key={n.label}
                className={`${n.sub ? "pl-3" : ""} text-[11px] ${
                  n.active ? "text-emerald-400" : "text-white/55"
                }`}
              >
                {n.label}
              </li>
            ))}
            <li className="text-[11px] text-emerald-400/80">Blade part 2</li>
            <li className="text-[11px] text-emerald-400/80">Blade part 3</li>
            <li className="mt-1 text-[11px] font-medium text-white">- Hubs</li>
            <li className="pl-3 text-[11px] text-emerald-400/80">Hub part 1</li>
            <li className="pl-3 text-[11px] text-emerald-400/80">Hub part 2</li>
          </ul>
        </aside>

        <div>
          {/* title + maintenance selector */}
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h4 className={`text-xl font-semibold ${endOfLife ? "text-red-500" : "text-white"}`}>
                Blade part 1 - B09885
              </h4>
              {endOfLife && (
                <p className="mt-1 text-xs text-red-500">This component has reached end of life</p>
              )}
            </div>
            <div className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[11px] text-white/70 md:w-72">
              <span>Maintenance of : {endOfLife ? "02/05/2025 – 13.10" : "26/09/2025 – 13.10"}</span>
              <span className="text-white/40">▾</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {/* manufacturing */}
            <div>
              <p className="mb-2 text-xs text-white/50">Manufacturing details</p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                {manufacturing.map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-white/5 py-1.5 text-[11px] last:border-0">
                    <span className="text-white/50">{k}:</span>
                    <span className="text-white/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* energy chart */}
            <div>
              <p className="mb-2 text-xs text-white/50">Energy Comparison</p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <p className="mb-2 text-xs font-semibold text-emerald-400">1,2 kWh</p>
                <div className="flex h-28 items-end justify-between gap-2">
                  {energyBars.map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t ${
                          endOfLife && i === 0 ? "bg-amber-500" : "bg-emerald-600/70"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[8px] text-white/40">BLADE{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QC details */}
            <div>
              <p className="mb-2 text-xs text-white/50">Quality Control</p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                {qualityControl.map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-white/5 py-1.5 text-[11px] last:border-0">
                    <span className="text-white/50">{k}:</span>
                    <span className={k === "Status" ? "text-emerald-400" : "text-white/80"}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QC gauge */}
            <div>
              <p className="mb-2 text-xs text-white/50">Quality Control</p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <div className="flex justify-between text-[11px] text-white/60">
                  <span>19.5</span>
                  <span className="text-center">
                    Target
                    <br />
                    20
                  </span>
                  <span>20.5</span>
                </div>
                <div className="relative mt-3 h-3 rounded-full bg-gradient-to-r from-amber-600 via-emerald-500 to-amber-600">
                  <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-emerald-300" />
                </div>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  Actual
                  <br />
                  <span className="text-base font-semibold text-emerald-400">20.15</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <StatusBar status="COMPLETED" statusSub="JAN, 23, 2025" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Page ---------- */

const researchCards = [
  {
    icon: Clock,
    title: "Print lead-time bottleneck",
    body: "QR code labels had to be ordered weeks in advance, creating delays before any part could be tracked. Inline generation was essential.",
  },
  {
    icon: Cpu,
    title: "MES handles non-conformities",
    body: "The Manufacturing Execution System already captured quality control deviations. The DPP needed to surface — not duplicate — this data.",
  },
  {
    icon: Smartphone,
    title: "Tablet and field use",
    body: "Technicians work with gloves on, outdoors, in wind. UI decisions had to account for sunlight legibility, large tap targets, and one-hand use.",
  },
  {
    icon: ShieldCheck,
    title: "CE-marking compliance",
    body: "EU regulations require traceable material declarations. The passport structure had to align with CE documentation requirements out of the box.",
  },
]

const decisions = [
  {
    icon: QrCode,
    problem: "Field technicians needed instant access without navigating complex systems.",
    choice: "QR-to-interface: scan a physical label to open the exact component record.",
    rationale:
      "Eliminating login friction and search entirely was more valuable than any UI optimisation. The physical object becomes the navigation entry point.",
  },
  {
    icon: Layers,
    problem: "Data was structured around database tables, not the physical turbine.",
    choice: "Hierarchy mirroring the physical product: DPP then Blades then Hub, not tables.",
    rationale:
      "Users think in components, not records. Aligning navigation to the object reduces cognitive load to near zero for trained engineers.",
  },
  {
    icon: BarChart3,
    problem: "Technicians needed to assess turbine health in seconds, not minutes.",
    choice: "Status-first dashboard: every component shows a pass/fail indicator before detail.",
    rationale:
      "Colour-coded status rings let a technician scan all seven components in one glance. Detail is one tap away, not the default view.",
  },
]

const goals = [
  {
    icon: Clock,
    title: "Faster information access",
    tag: "FIELD EFFICIENCY",
    body: "Replace a multi-day manual lookup process with an instant, QR-triggered interface. The goal: any authorised user should be able to retrieve full component data within 30 seconds of scanning.",
  },
  {
    icon: CheckCircle2,
    title: "Full material traceability",
    tag: "CIRCULAR ECONOMY",
    body: "Create a persistent, tamper-evident record linking every component to its manufacturing origin, material specification, and quality control history across its entire operational life.",
  },
  {
    icon: ShieldCheck,
    title: "Instant compliance access",
    tag: "REGULATORY READINESS",
    body: "Surface CE-marking documentation, inspection reports, and EU compliance data on demand — structured so that auditors and recyclers receive the exact documentation they require without manual assembly.",
  },
]

export default function RekordDppPage() {
  return (
    <main className="min-h-screen bg-black font-sans text-white">
      {/* nav */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-8 font-mono text-sm uppercase tracking-[0.3em] text-emerald-400">
              ● Portfolio — Case Study · 2026
            </p>
            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
              <QrCode className="h-4 w-4" /> Digital Product Passport
            </span>
            <h1 className="mt-8 text-6xl font-bold tracking-tight md:text-8xl">Rekord</h1>
            <div className="mt-3 h-1 w-24 bg-emerald-400" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70 text-pretty">
              A mobile-first Digital Product Passport for wind turbine maintenance, built for AMRC.
            </p>

            <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-white/10">
              {[
                ["CLIENT", "AMRC", "Advanced Manufacturing Research Centre"],
                ["SECTOR", "Manufacturing", "Sustainability & Circular Economy"],
                ["MY ROLE", "Product Designer", "Research · UX · UI"],
                ["PLATFORM", "Tablet-first", "QR-triggered web app"],
              ].map(([label, value, sub]) => (
                <div key={label} className="border-b border-white/10 bg-white/[0.02] p-5 even:border-l">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">{label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-white/45">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          <ComponentDetailMockup />
        </div>
      </section>

      {/* 01 CONTEXT & PROBLEM */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>01 — Context & Problem</SectionLabel>
        <h2 className="mt-8 text-3xl font-bold md:text-4xl text-balance">
          Composite components arrive at end-of-life with no material record.
        </h2>
        <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-white/65">
          <p>
            Wind turbine blades and hubs are manufactured from composite materials whose exact composition is rarely
            preserved after production. When components arrive at recycling facilities, operators have no visibility
            into material makeup, production tolerances, or maintenance history.
          </p>
          <p>
            Retrieving product data required manual lookup across disconnected MES exports, paper records, and supplier
            contacts — a process taking days rather than minutes, and blocking both CE-marking compliance and
            end-of-life material recovery.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {[
            ["Days", "average lookup time for product data"],
            ["Manual", "process with no single source of truth"],
          ].map(([k, v]) => (
            <div key={k} className="min-w-[240px] flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-2xl font-bold text-emerald-400">{k}</p>
              <p className="mt-1 text-sm text-white/55">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <DppOverviewMockup />
          <p className="mt-3 font-mono text-xs text-white/40">
            Fig 1 — Rekord product overview: DPP hierarchy with component status
          </p>
        </div>
      </section>

      {/* 02 RESEARCH & DISCOVERY */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>02 — Research & Discovery</SectionLabel>
        <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <p className="text-2xl font-light italic leading-relaxed text-white md:text-3xl text-balance">
            &ldquo;Right now, if a blade arrives and we need its material spec, I&apos;m emailing three different people
            and waiting two days. By the time we have the answer, the recycling window has moved.&rdquo;
          </p>
          <footer className="mt-6 font-mono text-xs uppercase tracking-widest text-white/40">
            — Field Engineer, AMRC Workshop Visit
          </footer>
        </blockquote>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {researchCards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 INFORMATION ARCHITECTURE */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>03 — Information Architecture</SectionLabel>
        <h2 className="mt-8 text-3xl font-bold md:text-4xl text-balance">Hierarchy that mirrors the physical object</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          The navigation model was validated with AMRC engineers during co-design sessions — every level maps to
          something a field technician can point to on the actual turbine.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <div className="flex flex-col items-center">
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 px-6 py-3 font-mono text-sm font-semibold text-emerald-300">
              DPP — Digital Product Passport
            </div>
            <div className="h-6 w-px bg-white/15" />
            <div className="rounded-lg border border-white/10 bg-black/40 px-6 py-3 font-mono text-sm text-white">
              Components List
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { head: "Blades", items: ["Blade 1", "Blade 2", "Blade 3", "Blade 4", "Blade 5"], dot: true },
              { head: "Hubs", items: ["Hub 1", "Hub 2"], dot: true },
              {
                head: "Component Detail",
                items: ["Manufacturing Data", "Quality Control", "3D Model", "Inspection Reports", "EU Compliance"],
                dot: false,
              },
            ].map((col) => (
              <div key={col.head} className="flex flex-col items-center gap-2">
                <div className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-center font-mono text-sm text-white">
                  {col.head}
                </div>
                {col.items.map((it) => (
                  <div
                    key={it}
                    className="flex w-full items-center gap-2 rounded-lg border border-white/5 bg-black/20 px-4 py-2 font-mono text-xs text-white/60"
                  >
                    {col.dot ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ) : (
                      <span className="text-emerald-400">›</span>
                    )}
                    {it}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5 font-mono text-sm text-white/70">
          <span className="text-emerald-400">Design principle:</span> Every navigation decision should be answerable by
          asking where would this component be physically located?
        </div>
      </section>

      {/* 04 KEY SCREENS */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>04 — Key Screens</SectionLabel>
        <h2 className="mt-8 text-3xl font-bold md:text-4xl text-balance">Three moments that define the experience</h2>

        <div className="mt-12 space-y-16">
          {[
            {
              n: "Screen 01",
              title: "Product Overview",
              note: "Top-level DPP: component list, quality check summary, registration dates, and status bar — the landing state after a QR scan.",
              mock: <DppOverviewMockup />,
            },
            {
              n: "Screen 02",
              title: "Component Detail — Blade part 1",
              note: "Manufacturing data, QC measurements, energy comparison chart, and maintenance history with time-machine date selector.",
              mock: <ComponentDetailMockup />,
            },
            {
              n: "Screen 03",
              title: "End-of-life alert state",
              note: "Red status indicators and title flag surface automatically when a component has reached its disposal threshold.",
              mock: <ComponentDetailMockup endOfLife />,
            },
          ].map((s) => (
            <div key={s.n}>
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">{s.n}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
                </div>
                <p className="max-w-md text-sm text-white/55 md:text-right">{s.note}</p>
              </div>
              {s.mock}
            </div>
          ))}
        </div>
      </section>

      {/* 05 DESIGN DECISIONS */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>05 — Design Decisions</SectionLabel>
        <h2 className="mt-8 text-3xl font-bold md:text-4xl text-balance">Three decisions that shaped the product</h2>

        <div className="mt-10 space-y-4">
          {decisions.map(({ icon: Icon, problem, choice, rationale }, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_1fr_1fr] md:items-start">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Problem</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">Design choice</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{choice}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Rationale</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{rationale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 DESIGN GOALS & EXPECTED IMPACT */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionLabel>06 — Design Goals &amp; Expected Impact</SectionLabel>
        <h2 className="mt-8 text-3xl font-bold md:text-4xl text-balance">Design goals &amp; expected impact</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          These are design intentions — the project was delivered as a prototype and co-designed MVP. Outcomes are yet
          to be measured at scale.
        </p>

        <div className="mt-10 space-y-4">
          {goals.map(({ icon: Icon, title, tag, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex items-start gap-5">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <span className="inline-flex w-fit rounded border border-emerald-500/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                      {tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER META */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_auto_1fr] md:items-start">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-400">
                Rekord — Digital Product Passport
              </p>
              <p className="mt-2 text-base text-white">Product Designer · Research, UX, UI</p>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Tools</p>
              <p className="mt-2 text-base text-white">Figma</p>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">Project type</p>
              <p className="mt-2 text-base text-white">Co-design with AMRC</p>
            </div>
            <p className="text-sm leading-relaxed text-white/60 md:border-l md:border-white/10 md:pl-8 md:text-right">
              This was a collaborative co-design project developed in partnership with the Advanced Manufacturing
              Research Centre (AMRC).
            </p>
          </div>
        </div>
        <p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-white/35">
          Portfolio · UX Case Study · 2026
        </p>
      </section>
    </main>
  )
}
