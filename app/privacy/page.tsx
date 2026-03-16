"use client"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function PrivacyPage() {
  const { language } = useLanguage()
  const t = translations[language]?.privacyPage

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
            <h2 className="text-2xl font-semibold mb-4">{t.sections.who.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.who.content }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.whatIsPersonalData.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.whatIsPersonalData.content }} />
            <p dangerouslySetInnerHTML={{ __html: t.sections.whatIsPersonalData.legalBasis }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.analytics.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.analytics.intro }} />
            <ul className="list-disc pl-6 space-y-2">
              {t.sections.analytics.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.sections.analytics.retention }} />
            <p dangerouslySetInnerHTML={{ __html: t.sections.analytics.choice }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.sessionCookies.title}</h2>
            <p>{t.sections.sessionCookies.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.rights.title}</h2>
            <p>{t.sections.rights.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {t.sections.rights.items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.contact.title}</h2>
            <p>{t.sections.contact.content}</p>
            <p className="font-semibold">
              {t.sections.contact.email}{" "}
              <a href="mailto:info@omaramato.com" className="text-[#2080a0] hover:underline">
                info@omaramato.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t.sections.updates.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.sections.updates.lastUpdate }} />
            <p>{t.sections.updates.disclaimer}</p>
          </section>

          <section className="bg-card p-6 rounded-lg border border-border">
            <p
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: t.sections.disclaimer.text }}
            />
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/cookies" className="text-accent hover:text-accent/80 font-medium transition-colors">
              {t.readCookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
