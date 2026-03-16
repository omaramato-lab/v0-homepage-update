"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

interface ConsentData {
  consent: "accepted" | "rejected"
  timestamp: number
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    // Check if consent has already been given
    const savedConsent = localStorage.getItem("cookie-consent")
    if (!savedConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    const consentData: ConsentData = {
      consent: "accepted",
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consentData))

    // Load Google Analytics dynamically
    loadGoogleAnalytics()

    setIsVisible(false)
  }

  const handleReject = () => {
    const consentData: ConsentData = {
      consent: "rejected",
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consentData))
    setIsVisible(false)
  }

  const loadGoogleAnalytics = () => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-E75LV405L0"

    // Load gtag script
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    // Initialize gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag("js", new Date())
      gtag("config", GA_ID)
    }
  }

  if (!isVisible) return null

  const content = {
    it: {
      text: "Utilizziamo i cookie per migliorare l'esperienza e analizzare il traffico. Leggi la nostra",
      cookiePolicy: "Cookie Policy",
      reject: "Rifiuta tutto",
      accept: "Accetta tutto",
    },
    en: {
      text: "We use cookies to improve your experience and analyze traffic. Read our",
      cookiePolicy: "Cookie Policy",
      reject: "Reject All",
      accept: "Accept All",
    },
  }

  const t = content[language]

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50 max-w-md animate-fade-in">
      <div className="bg-gradient-to-br from-card to-card/70 border border-accent/30 rounded-lg shadow-xl p-6 hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
        <p className="text-sm mb-5 leading-relaxed text-foreground/90">
          {t.text}{" "}
          <Link href="/cookies" className="text-primary hover:text-primary/80 underline transition-colors font-medium">
            {t.cookiePolicy}
          </Link>
          .
        </p>

        <div className="pt-4 border-t border-border">
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2.5 border border-border hover:bg-accent/10 rounded-md text-sm font-medium transition-all duration-300"
            >
              {t.reject}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-all duration-300 shadow-sm"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
