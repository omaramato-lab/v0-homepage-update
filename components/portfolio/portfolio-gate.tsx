"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { Lock } from "lucide-react"

const PORTFOLIO_PASSWORD = "topsecret"

const PortfolioUnlockContext = createContext(false)

export function usePortfolioUnlocked() {
  return useContext(PortfolioUnlockContext)
}

export function PortfolioGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PORTFOLIO_PASSWORD) {
      setUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  if (unlocked) {
    return <PortfolioUnlockContext.Provider value={true}>{children}</PortfolioUnlockContext.Provider>
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border/60 bg-card/80 p-8 md:p-10 shadow-2xl backdrop-blur">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Protected portfolio</h1>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              This portfolio is private. Enter the password to view the selected case studies.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="portfolio-password" className="sr-only">
                Password
              </label>
              <input
                id="portfolio-password"
                type="password"
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Enter password"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Unlock portfolio
            </button>
          </form>

          <a
            href="/"
            className="mt-6 block text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </main>
  )
}
