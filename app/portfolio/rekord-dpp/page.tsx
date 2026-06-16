import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export default function RekordDppPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Clock className="h-7 w-7" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Case study
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold md:text-4xl">The DPP of Di Rekord</h1>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-slate-500">
            This case study is being finalized. The full breakdown of the Digital Product Passport work for Di Rekord
            will be published here soon.
          </p>
        </div>
      </div>
    </main>
  )
}
