"use client"

import { useEffect, useRef, useState } from "react"

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    // Glow points that pulse slowly - responsive sizes
    const glows = [
      { x: 0.18, y: 0.25, radius: isDesktop ? 520 : 220, phase: 0, speed: 0.003 },
      { x: 0.78, y: 0.35, radius: isDesktop ? 450 : 180, phase: 2, speed: 0.004 },
      { x: 0.50, y: 0.55, radius: isDesktop ? 640 : 280, phase: 4, speed: 0.002 },
      { x: 0.30, y: 0.75, radius: isDesktop ? 420 : 160, phase: 1, speed: 0.005 },
      { x: 0.72, y: 0.70, radius: isDesktop ? 480 : 200, phase: 3, speed: 0.003 },
    ]

    // Horizontal scan lines that drift slowly
    const scanLines = [
      { y: 0.30, speed: 0.0004, opacity: 0.035 },
      { y: 0.65, speed: -0.0003, opacity: 0.025 },
    ]

    const CELL = 48

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      ctx.clearRect(0, 0, w, h)

      // --- Fine grid lines ---
      const cols = Math.ceil(w / CELL)
      const rows = Math.ceil(h / CELL)

      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        const x = c * CELL
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.strokeStyle = "rgba(74, 222, 128, 0.025)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const y = r * CELL
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.strokeStyle = "rgba(74, 222, 128, 0.025)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // --- Grid intersection dots ---
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const x = c * CELL
          const y = r * CELL

          // Proximity glow: brighten dots near active glow centers
          let proximity = 0
          for (const g of glows) {
            const gx = g.x * w
            const gy = g.y * h
            const dist = Math.sqrt((x - gx) ** 2 + (y - gy) ** 2)
            const pulse = 0.5 + 0.5 * Math.sin(time * g.speed * 60 + g.phase)
            const influence = Math.max(0, 1 - dist / (g.radius * (0.8 + 0.4 * pulse)))
            proximity = Math.max(proximity, influence)
          }

          const dotAlpha = 0.035 + proximity * 0.18
          const dotSize = 0.8 + proximity * 1.2

          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(74, 222, 128, ${dotAlpha})`
          ctx.fill()
        }
      }

      // --- Pulsing glow spots ---
      for (const g of glows) {
        const pulse = 0.5 + 0.5 * Math.sin(time * g.speed * 60 + g.phase)
        const currentRadius = g.radius * (0.7 + 0.5 * pulse)
        const alpha = 0.025 + 0.025 * pulse

        const gradient = ctx.createRadialGradient(
          g.x * w, g.y * h, 0,
          g.x * w, g.y * h, currentRadius
        )
        gradient.addColorStop(0, `rgba(74, 222, 128, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(52, 211, 153, ${alpha * 0.35})`)
        gradient.addColorStop(1, "rgba(74, 222, 128, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(g.x * w - currentRadius, g.y * h - currentRadius, currentRadius * 2, currentRadius * 2)
      }

      // --- Drifting scan lines ---
      for (const s of scanLines) {
        const yPos = ((s.y + time * s.speed) % 1.2 - 0.1) * h
        const gradient = ctx.createLinearGradient(0, yPos - 30, 0, yPos + 30)
        gradient.addColorStop(0, "rgba(74, 222, 128, 0)")
        gradient.addColorStop(0.5, `rgba(74, 222, 128, ${s.opacity})`)
        gradient.addColorStop(1, "rgba(74, 222, 128, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, yPos - 30, w, 60)
      }

      // --- Fading vignette at edges ---
      const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, h * 0.85)
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)")
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.4)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, w, h)

      time += 1
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [isDesktop])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 size-full"
      aria-hidden="true"
    />
  )
}
