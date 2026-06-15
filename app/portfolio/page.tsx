import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

const projects = [
  {
    slug: "fisiogest",
    company: "FisioGest",
    role: "Product Design / UX & UI",
    title: "AI-driven management software for physiotherapists",
    description:
      "A human-centered redesign turning a physiotherapy archive into an operational tool that reduces cognitive load and protects clinical income.",
    tags: ["Product Design", "Mobile-First", "Design System"],
    accent: "#16a34a",
  },
  {
    slug: "bsb",
    company: "BSB Video Monitoring",
    role: "UX Design / Enterprise Tooling",
    title: "Modernizing the video infrastructure of Italy's motorway network",
    description:
      "A research-driven redesign of BSB's internal video monitoring platform, used to manage over 5,000 live camera streams across 14 motorway concessionaires.",
    tags: ["UX Research", "Interaction Design", "Design System"],
    accent: "#2f4ba8",
  },
  {
    slug: "rekord-dpp",
    company: "Rekord",
    role: "Product Design / Digital Product Passport",
    title: "Digital Product Passport for circular supply chains",
    description:
      "Designing the Digital Product Passport experience for Rekord, making product traceability and compliance data accessible to every stakeholder.",
    tags: ["Product Design", "Compliance", "Traceability"],
    accent: "#0ea5e9",
  },
]

export default function PortfolioHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <header className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Selected work</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">Portfolio</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            A selection of product design case studies. Each project walks through the problem, the research and design
            process, and the measurable impact delivered.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border md:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: project.accent }}
              />
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {project.company}
                  </h2>
                  <p className="mt-1 text-xs italic text-accent">{project.role}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>

              <h3 className="mb-3 text-lg font-bold leading-snug text-foreground text-balance">{project.title}</h3>
              <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
