"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t, isLoading } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#chi-sono", label: language === "it" ? "Chi Sono" : "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#esperienza", label: language === "it" ? "Esperienza" : "Experience" },
    { href: "#testimonial", label: language === "it" ? "Testimonial" : "Testimonials" },
    { href: "#contatti", label: language === "it" ? "Contatti" : "Contact" },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          OA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            disabled={isLoading}
            className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent disabled:opacity-50"
          >
            {isLoading ? "..." : language === "it" ? "ENG" : "IT"}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-base text-foreground/80 hover:text-primary transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    toggleLanguage()
                    setMobileMenuOpen(false)
                  }}
                  disabled={isLoading}
                  className="w-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent disabled:opacity-50"
                >
                  {isLoading ? "..." : language === "it" ? "ENG" : "IT"}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
