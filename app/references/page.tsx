"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
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

export default function ReferencesPage() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    relationship: "",
    testimonial: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.testimonial.trim()) {
        setError("Please fill in name and testimonial")
        setIsSubmitting(false)
        return
      }

      // Submit to Supabase
      console.log("[v0] Submitting reference to Supabase...")
      const supabase = createClient()
      
      const { data, error: supabaseError } = await supabase
        .from("references")
        .insert([
          {
            name: formData.name.trim(),
            role: formData.role.trim() || null,
            company: formData.company.trim() || null,
            email: formData.email.trim() || null,
            relationship: formData.relationship.trim() || null,
            testimonial: formData.testimonial.trim(),
          },
        ])
        .select()

      if (supabaseError) {
        console.error("[v0] Supabase error:", supabaseError)
        setError(`Error submitting reference: ${supabaseError.message}`)
        setIsSubmitting(false)
        return
      }

      console.log("[v0] Reference saved to Supabase successfully:", data)

      // Show success
      setIsSubmitted(true)
      setFormData({
        name: "",
        role: "",
        company: "",
        email: "",
        relationship: "",
        testimonial: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error("[v0] Error:", err)
      setError("Error submitting reference")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share a Reference</h1>
          <p className="text-xl text-muted-foreground">
            Tell me about your experience working together. Your name and testimonial are required, all other fields are optional.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <Card className="mb-8 p-6 bg-green-500/10 border-green-500/30">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-green-600 mb-1">Thank you! Reference received</h3>
                <p className="text-sm text-green-600">Your reference has been saved and will be reviewed soon.</p>
              </div>
            </div>
          </Card>
        )}

        {/* Form */}
        <Card className="p-8 bg-transparent">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Senior Product Manager"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Acme Corp"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john.doe@example.com"
              />
            </div>

            {/* Relationship */}
            <div>
              <label htmlFor="relationship" className="block text-sm font-medium mb-2">
                How did we work together?
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select...</option>
                <option value="direct_manager">Omar was my manager</option>
                <option value="managed_by">I was Omar's manager</option>
                <option value="colleague">We were colleagues</option>
                <option value="client">Omar worked for my company</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Testimonial */}
            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium mb-2">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                id="testimonial"
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Describe your experience working with Omar, his skills, results achieved, and what makes him an exceptional professional..."
              />
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full gap-2" size="lg">
              <Send className="w-4 h-4" />
              {isSubmitting ? "Submitting..." : "Submit Reference"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
