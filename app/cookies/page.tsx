"use client"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function CookiesPage() {
  const { language } = useLanguage()
  const t = translations[language]?.cookiesPage

  if (!t) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          ← {t.backLink}
        </Link>

        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>

        <div className="prose prose-lg prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.what.title}</h2>
            <p>{t.sections.what.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.howWeUse.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.howWeUse.content }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.types.title}</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead className="bg-card">
                  <tr>
                    {t.sections.types.table.headers.map((header, index) => (
                      <th key={index} className="border border-border px-4 py-3 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.sections.types.table.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-border px-4 py-3">
                        {row.name}
                        <br />
                        <span className="text-sm text-muted-foreground">{row.details}</span>
                      </td>
                      <td className="border border-border px-4 py-3">{row.type}</td>
                      <td className="border border-border px-4 py-3">{row.purpose}</td>
                      <td className="border border-border px-4 py-3">{row.duration}</td>
                      <td className="border border-border px-4 py-3">
                        <span
                          className={
                            row.consent === "Richiesto" || row.consent === "Required"
                              ? "bg-amber-500/20 text-amber-300 px-2 py-1 rounded text-sm"
                              : "bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm"
                          }
                        >
                          {row.consent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.management.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.management.analytics }} />
            <p dangerouslySetInnerHTML={{ __html: t.sections.management.functional }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.howToDelete.title}</h2>
            <p>{t.sections.howToDelete.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.sections.howToDelete.browsers.map((browser, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: browser }} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.links.title}</h2>
            <p>
              {t.sections.links.google}{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2080a0] hover:underline"
              >
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.updates.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.updates.lastUpdate }} />
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/privacy" className="text-accent hover:text-accent/80 font-medium transition-colors">
              {t.readPrivacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
