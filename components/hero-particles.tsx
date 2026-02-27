"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  fadeSpeed: number
  life: number
  maxLife: number
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    const PARTICLE_COUNT = 40

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: 0,
      fadeSpeed: Math.random() * 0.005 + 0.003,
      life: 0,
      maxLife: Math.random() * 600 + 400,
    })

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = createParticle()
      p.y = Math.random() * window.innerHeight
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life++
        p.x += p.speedX
        p.y += p.speedY

        // Fade in and out
        const lifeRatio = p.life / p.maxLife
        if (lifeRatio < 0.1) {
          p.opacity = lifeRatio * 10 * 0.5
        } else if (lifeRatio > 0.8) {
          p.opacity = (1 - lifeRatio) * 5 * 0.5
        } else {
          p.opacity = 0.5
        }

        // Reset when life ends or offscreen
        if (p.life >= p.maxLife || p.y < -50) {
          particles[i] = createParticle()
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 222, 128, ${p.opacity * 0.4})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 size-full"
      aria-hidden="true"
    />
  )
}
