"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Lock, User, Briefcase, Building2, Mail, Calendar, Trash2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Reference {
  id: string
  name: string
  role: string | null
  company: string | null
  email: string | null
  relationship: string | null
  testimonial: string
  created_at: string
}

export default function ReviewPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [references, setReferences] = useState<Reference[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "topsecret") {
      setIsAuthenticated(true)
      setError("")
      loadReferences()
    } else {
      setError("Password non corretta")
    }
  }

  const loadReferences = async () => {
    console.log("[v0] REVIEW: Loading references from Supabase...")
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("references")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("[v0] REVIEW: Supabase error:", error)
        setReferences([])
        return
      }

      console.log("[v0] REVIEW: ✅ Loaded", data?.length || 0, "references from Supabase")
      setReferences(data || [])
    } catch (err) {
      console.error("[v0] REVIEW: Error loading references:", err)
      setReferences([])
    }
  }

  const deleteReference = async (id: string) => {
    console.log("[v0] Deleting reference:", id)
    
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("references")
        .delete()
        .eq("id", id)

      if (error) {
        console.error("[v0] Error deleting from Supabase:", error)
        return
      }

      // Update local state
      const updatedReferences = references.filter((ref) => ref.id !== id)
      setReferences(updatedReferences)
      console.log("[v0] ✅ Reference deleted")
    } catch (err) {
      console.error("[v0] Error deleting reference:", err)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8 bg-transparent">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Area Riservata</h1>
            <p className="text-muted-foreground text-center">Inserisci la password per accedere alle references</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent"
                autoFocus
              />
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <Button type="submit" className="w-full" size="lg">
              Accedi
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Le tue References</h1>
          <p className="text-xl text-muted-foreground">Dashboard privata - Seleziona quale condividere</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Totale references ricevute:</span>
            <span className="font-semibold text-primary text-lg">{references.length}</span>
          </div>
        </div>

        {/* Empty State */}
        {references.length === 0 && (
          <Card className="p-12 text-center bg-transparent">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nessuna reference ancora</h3>
            <p className="text-muted-foreground">Condividi il link omaramato.com/references per ricevere le prime references</p>
          </Card>
        )}

        {/* References List */}
        {references.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {references.map((ref) => (
              <Card key={ref.id} className="p-6 bg-transparent hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{ref.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {ref.role && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{ref.role}</span>
                        </div>
                      )}
                      {ref.company && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{ref.company}</span>
                        </div>
                      )}
                      {ref.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors">
                            {ref.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {ref.relationship && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {ref.relationship}
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(ref.created_at)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Testimonianza:</h4>
                  <p className="text-base leading-relaxed whitespace-pre-wrap">{ref.testimonial}</p>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteReference(ref.id)}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Elimina
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Logout Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false)
              setPassword("")
              setReferences([])
            }}
            className="bg-transparent"
          >
            Esci
          </Button>
        </div>
      </div>
    </div>
  )
}
