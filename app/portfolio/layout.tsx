import type { Metadata } from "next"
import { PortfolioGate } from "@/components/portfolio/portfolio-gate"

export const metadata: Metadata = {
  title: "Portfolio - Omar Amato",
  description: "Selected product design case studies by Omar Amato.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <PortfolioGate>{children}</PortfolioGate>
}
