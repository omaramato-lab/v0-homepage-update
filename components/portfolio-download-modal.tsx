"use client"

import React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText } from "lucide-react"

interface PortfolioDownloadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  fileName: string
  filePath: string
}

const PORTFOLIO_PASSWORD = "topsecret"

export function PortfolioDownloadModal({ open, onOpenChange, fileName, filePath }: PortfolioDownloadModalProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleDownload = () => {
    setError("")

    if (!password) {
      setError("Please enter a password")
      return
    }

    if (password !== PORTFOLIO_PASSWORD) {
      setError("Incorrect password")
      setPassword("")
      return
    }

    // Use anchor click for better mobile support
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setPassword("")
    onOpenChange(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleDownload()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Download Portfolio
          </DialogTitle>
          <DialogDescription>Enter the password to download the portfolio PDF</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError("")
            }}
            onKeyDown={handleKeyDown}
            autoFocus
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            onClick={handleDownload}
            disabled={!password}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Open Portfolio
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
