"use client"

import { useState, type FormEvent } from "react"
import { Lock, FileText, ArrowLeft, Eye, EyeOff, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (password === "topsecret") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Back link */}
      <div className="absolute left-6 top-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to homepage
        </Link>
      </div>

      {!isUnlocked ? (
        /* Password gate */
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-border bg-card">
              <Lock className="size-7 text-primary" />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Portfolio Access
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This portfolio is password-protected. Enter the password to view or download the full portfolio document.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Enter password"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="btn-glow w-full">
              Unlock Portfolio
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {"Don't have the password? "}
            <a
              href="mailto:info@omaramato.com?subject=Portfolio%20Access%20Request"
              className="text-primary transition-colors hover:text-primary/80"
            >
              Request access via email
            </a>
          </p>
        </div>
      ) : (
        /* Unlocked - PDF viewer */
        <div className="flex w-full max-w-5xl flex-col items-center gap-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <FileText className="size-5 text-primary" />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Portfolio Unlocked
            </h1>
            <p className="mb-6 text-sm text-muted-foreground">
              Omar Amato &mdash; Product Design Portfolio
            </p>
            <Button asChild className="btn-glow gap-2">
              <a
                href="/documents/Portfolio-ENG-low-2.pdf"
                download
              >
                <Download className="size-4" />
                Download Portfolio PDF
              </a>
            </Button>
          </div>

          {/* Embedded PDF viewer */}
          <div className="w-full overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              src="/documents/Portfolio-ENG-low-2.pdf"
              className="h-[80vh] w-full"
              title="Omar Amato Portfolio"
            />
          </div>
        </div>
      )}
    </main>
  )
}
