"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  // Safety check for translations
  if (!t || !t.footer) {
    return null
  }

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.cookies}
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.vat}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
