"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type Language = "it" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: typeof translations.it
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

async function detectLanguage(): Promise<Language> {
  // Only run in browser environment
  if (typeof window === "undefined" || typeof localStorage === "undefined" || typeof navigator === "undefined") {
    return "en"
  }

  try {
    // Priority 1: Check if user has manually selected a language before
    const savedLanguage = localStorage.getItem("language") as Language | null
    const isManualSelection = localStorage.getItem("languageManuallySet") === "true"

    if (savedLanguage && isManualSelection) {
      console.log("[v0] Using manually selected language:", savedLanguage)
      return savedLanguage
    }

    // Priority 2: Check browser language preference
    const browserLanguage = navigator.language.toLowerCase()

    if (browserLanguage.startsWith("it")) {
      console.log("[v0] Browser language is Italian")
      localStorage.setItem("language", "it")
      return "it"
    }
  } catch (error) {
    console.warn("[v0] Error reading language settings:", error)
  }

  // Fallback: Default to English
  localStorage.setItem("language", "en")
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const detectedLanguage = await detectLanguage()
        setLanguage(detectedLanguage)
      } catch (error) {
        console.error("[v0] Error detecting language:", error)
        setLanguage("en")
      } finally {
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "it" ? "en" : "it"
    setLanguage(newLanguage)
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("language", newLanguage)
      localStorage.setItem("languageManuallySet", "true")
    }
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
