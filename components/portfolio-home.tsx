"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowDown,
  Asterisk,
  Lock,
  ArrowUpRight,
  Search,
  LayoutGrid,
  Component,
  Zap,
  Mail,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const marqueeWords = ["Product Design", "UX Research", "Prototyping", "Design Systems", "Interaction Design"]

export function PortfolioHome() {
  const { language, toggleLanguage } = useLanguage()
  const it = language === "it"
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const cleanups: Array<() => void> = []

    // ---- scroll reveal ----
    if (!reduce) {
      root.classList.add("motion")
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in")
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      )
      root.querySelectorAll(".reveal").forEach((el) => obs.observe(el))
      cleanups.push(() => obs.disconnect())
    } else {
      root.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"))
    }

    // ---- magnetic ----
    root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) * 0.25
        const y = (e.clientY - (r.top + r.height / 2)) * 0.4
        el.style.transform = `translate(${x}px,${y}px)`
      }
      const onLeave = () => {
        el.style.transform = ""
      }
      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    })

    // ---- custom cursor ----
    const touch = window.matchMedia("(hover: none)").matches
    if (!touch && !reduce) {
      const ring = root.querySelector<HTMLElement>(".oa-cursor-ring")
      const dot = root.querySelector<HTMLElement>(".oa-cursor-dot")
      if (ring && dot) {
        root.classList.add("cursor-on")
        let mx = window.innerWidth / 2
        let my = window.innerHeight / 2
        let rx = mx
        let ry = my
        let raf = 0
        const onMove = (e: MouseEvent) => {
          mx = e.clientX
          my = e.clientY
          dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
        }
        window.addEventListener("mousemove", onMove)
        const tick = () => {
          rx += (mx - rx) * 0.16
          ry += (my - ry) * 0.16
          ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
          raf = requestAnimationFrame(tick)
        }
        tick()
        const enters: Array<[Element, () => void, () => void]> = []
        root.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
          const onEnter = () => ring.classList.add("big")
          const onLeave = () => ring.classList.remove("big")
          el.addEventListener("mouseenter", onEnter)
          el.addEventListener("mouseleave", onLeave)
          enters.push([el, onEnter, onLeave])
        })
        cleanups.push(() => {
          window.removeEventListener("mousemove", onMove)
          cancelAnimationFrame(raf)
          enters.forEach(([el, a, b]) => {
            el.removeEventListener("mouseenter", a)
            el.removeEventListener("mouseleave", b)
          })
          root.classList.remove("cursor-on")
        })
      }
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  const skills = [
    {
      icon: Search,
      title: "UX Research",
      desc: it ? "Contextual inquiry, journey mapping, validazione" : "Contextual inquiry, journey mapping, validation",
    },
    {
      icon: LayoutGrid,
      title: "Interaction Design",
      desc: it ? "Flussi, IA, stati e casi limite" : "Flows, IA, states & edge cases",
    },
    {
      icon: Component,
      title: it ? "Pensiero sistemico" : "Systems thinking",
      desc: it ? "Design system, tassonomie, scalabilità" : "Design systems, taxonomies, scalability",
    },
    {
      icon: Zap,
      title: it ? "Prototipazione rapida" : "Rapid prototyping",
      desc: it ? "Dal concept al test in tempi brevi" : "From concept to testing, fast",
    },
  ]

  const stats = [
    { value: "5.332", label: it ? "Flussi video gestiti" : "Video streams managed", accent: false },
    { value: "−58%", label: it ? "Tempo sulle attività" : "Task-time reduced", accent: true },
    { value: "6", label: it ? "Mesi di ricerca" : "Months of research", accent: false },
    { value: "4", label: it ? "Ruoli utente serviti" : "User roles served", accent: false },
  ]

  return (
    <div
      ref={rootRef}
      className="port"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        position: "relative",
        overflow: "hidden",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", sans-serif',
      }}
    >
      <div className="oa-cursor-dot" />
      <div className="oa-cursor-ring" />

      {/* ============ HEADER ============ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "color-mix(in srgb, var(--bg) 82%, transparent)",
          backdropFilter: "saturate(140%) blur(8px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "18px clamp(20px,5vw,72px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a
            href="#top"
            data-magnetic
            style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "var(--text)" }}
          >
            <span
              className="logo-mark"
              style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 7,
                border: "1.4px solid var(--accent)",
                display: "grid",
                placeItems: "center",
                flex: "none",
                color: "var(--accent)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M18 4.7 A11.5 11.5 0 1 1 14 4.7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>Omar Amato</span>
              <span
                style={{
                  fontFamily: "var(--label-font)",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text3)",
                  marginTop: 3,
                }}
              >
                Product Designer
              </span>
            </span>
          </a>

          <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <a className="navlink" href="#work" style={{ textDecoration: "none", color: "var(--text2)", fontSize: 14, fontWeight: 500 }}>
              {it ? "Lavori" : "Work"}
            </a>
            <a className="navlink" href="#about" style={{ textDecoration: "none", color: "var(--text2)", fontSize: 14, fontWeight: 500 }}>
              {it ? "Chi sono" : "About"}
            </a>
            <a className="navlink" href="#contact" style={{ textDecoration: "none", color: "var(--text2)", fontSize: 14, fontWeight: 500 }}>
              {it ? "Contatti" : "Contact"}
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 999, padding: 3 }}>
              <button
                className={`seg-btn${it ? " active" : ""}`}
                onClick={() => it || toggleLanguage()}
                style={{ border: "none", cursor: "pointer", borderRadius: 999, padding: "5px 12px", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}
              >
                IT
              </button>
              <button
                className={`seg-btn${!it ? " active" : ""}`}
                onClick={() => it && toggleLanguage()}
                style={{ border: "none", cursor: "pointer", borderRadius: 999, padding: "5px 12px", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              data-magnetic
              className="btn-primary"
              style={{ textDecoration: "none", background: "var(--accent)", color: "#06120c", fontWeight: 600, fontSize: 13, padding: "10px 18px", borderRadius: 999, whiteSpace: "nowrap" }}
            >
              {it ? "Lavoriamo insieme" : "Let's talk"}
            </a>
          </div>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section
        id="top"
        style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,12vw,150px) clamp(20px,5vw,72px) clamp(36px,6vw,72px)" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 14px",
            border: "1px solid var(--accent-line)",
            borderRadius: 999,
            background: "var(--accent-soft)",
            marginBottom: 34,
            animation: "oa-rise .5s ease both",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", animation: "oa-pulse 2.4s ease-in-out infinite" }} />
          <span
            style={{
              fontFamily: "var(--label-font)",
              fontSize: "var(--label-size)",
              fontWeight: "var(--label-w)" as unknown as number,
              letterSpacing: "var(--label-ls)",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {it ? "Disponibile per nuovi progetti" : "Available for new projects"}
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(46px,9vw,124px)",
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            maxWidth: "15ch",
            textWrap: "balance",
            animation: "oa-rise .6s ease both",
          }}
        >
          {it ? (
            <>
              Trasformo gli insight in <span style={{ color: "var(--accent)" }}>prodotti</span> semplici e scalabili.
            </>
          ) : (
            <>
              I turn insight into <span style={{ color: "var(--accent)" }}>simple</span>, scalable products.
            </>
          )}
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-end", justifyContent: "space-between", marginTop: "clamp(36px,5vw,56px)" }}>
          <p style={{ margin: 0, maxWidth: "50ch", fontSize: "clamp(16px,1.7vw,19px)", lineHeight: 1.65, color: "var(--text2)", animation: "oa-rise .7s ease both" }}>
            {it
              ? "Designer interdisciplinare focalizzato su UX e prodotto. Forza nel pensiero sistemico e nella prototipazione rapida: collaboro con team e utenti per creare esperienze utili, sostenibili e profondamente umane."
              : "Interdisciplinary designer focused on UX and product. A strength in systems thinking and rapid prototyping: I work with teams and users to build useful, sustainable and deeply human experiences."}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, animation: "oa-rise .8s ease both" }}>
            <a
              href="#work"
              data-magnetic
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "var(--accent)", color: "#06120c", fontWeight: 600, fontSize: 15, padding: "15px 26px", borderRadius: 999 }}
            >
              {it ? "Guarda i lavori" : "View work"}
              <ArrowDown style={{ width: 17, height: 17 }} />
            </a>
            <a
              href="#contact"
              data-magnetic
              className="btn-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "transparent", color: "var(--text2)", border: "1px solid var(--border2)", fontWeight: 600, fontSize: 15, padding: "15px 26px", borderRadius: 999 }}
            >
              {it ? "Contatti" : "Get in touch"}
            </a>
          </div>
        </div>

        {/* hero stats */}
        <div className="hero-stats reveal" style={{ display: "flex", gap: "clamp(28px,5vw,64px)", marginTop: "clamp(56px,8vw,96px)" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="hero-stat"
              style={{
                flex: 1,
                borderLeft: i === 0 ? undefined : "1px solid var(--border)",
                paddingLeft: i === 0 ? undefined : "clamp(28px,5vw,64px)",
              }}
            >
              <div style={{ fontSize: "clamp(34px,4.4vw,56px)", fontWeight: 700, letterSpacing: "-0.04em", color: s.accent ? "var(--accent)" : "var(--text)" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--label-font)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginTop: 8, lineHeight: 1.5 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "clamp(18px,2.6vw,30px) 0", marginTop: "clamp(20px,4vw,48px)" }}>
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={`${w}-${i}`} style={{ display: "inline-flex", alignItems: "center" }}>
              <span className="mq-word">{w}</span>
              <Asterisk style={{ width: 30, height: 30, color: "var(--accent)", margin: "0 18px", animation: "oa-spin 6s linear infinite" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ============ WORK ============ */}
      <section id="work" style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,9vw,120px) clamp(20px,5vw,72px)" }}>
        <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: "clamp(32px,4vw,52px)" }}>
          <div>
            <p style={{ fontFamily: "var(--label-font)", fontSize: "var(--label-size)", fontWeight: "var(--label-w)" as unknown as number, letterSpacing: "var(--label-ls)", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 16px" }}>
              (01) — Portfolio
            </p>
            <h2 style={{ margin: 0, fontSize: "clamp(34px,5.2vw,72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.98 }}>
              {it ? "Lavori selezionati" : "Selected work"}
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.6, color: "var(--text2)" }}>
            {it
              ? "Una selezione protetta dei progetti più rappresentativi. Product e UX design, dalla ricerca al rilascio."
              : "A protected selection of representative projects. Product and UX design, from research to release."}
          </p>
        </div>

        <Link
          href="/portfolio"
          data-cursor
          className="work-feat reveal"
          style={{ display: "block", textDecoration: "none", color: "inherit", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", "--d": ".08s" } as React.CSSProperties}
        >
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr" }}>
            {/* text */}
            <div style={{ padding: "clamp(30px,4vw,56px)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text2)", border: "1px solid var(--border2)", padding: "5px 12px", borderRadius: 999 }}>
                  Product Design
                </span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text2)", border: "1px solid var(--border2)", padding: "5px 12px", borderRadius: 999 }}>
                  UX &amp; Research
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "var(--accent)", border: "1px solid var(--accent-line)", padding: "5px 12px", borderRadius: 999 }}>
                  <Lock style={{ width: 13, height: 13 }} />
                  {it ? "Protetto" : "Protected"}
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.04 }}>
                {it ? (
                  <>
                    Un percorso
                    <br />
                    di design.
                  </>
                ) : (
                  <>
                    A design
                    <br />
                    journey.
                  </>
                )}
              </h3>
              <p style={{ margin: "22px 0 0", fontSize: 16, lineHeight: 1.62, color: "var(--text2)", maxWidth: "46ch" }}>
                {it
                  ? "Ricerca con gli utenti, prototipazione rapida e interfacce semplici, scalabili e profondamente umane."
                  : "User research, rapid prototyping and simple, scalable, deeply human interfaces."}
              </p>
              <div style={{ flex: 1, minHeight: 32 }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                <span className="feat-cta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 999, background: "var(--accent)", color: "#06120c", flex: "none" }}>
                  <ArrowUpRight className="feat-arrow" style={{ width: 22, height: 22 }} />
                </span>
                <span style={{ fontWeight: 600, fontSize: 16 }}>{it ? "Esplora i case study" : "Explore the case studies"}</span>
              </div>
            </div>

            {/* visual */}
            <div style={{ background: "linear-gradient(160deg, rgba(77,141,255,0.10), transparent 55%), var(--bg2)", borderLeft: "1px solid var(--border)", padding: "clamp(24px,3vw,40px)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 440, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 460, height: 460, transform: "translate(-50%,-54%)", background: "radial-gradient(circle at center, rgba(77,141,255,0.18), transparent 62%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 340, height: 340, transform: "translate(-50%,-52%)", border: "1px solid var(--accent-line)", borderRadius: 999, opacity: 0.45, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", width: 440, height: 440, transform: "translate(-50%,-52%)", border: "1px solid var(--border2)", borderRadius: 999, opacity: 0.5, pointerEvents: "none" }} />
              <div className="feat-phone" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", width: 206, height: 360, borderRadius: 34, background: "linear-gradient(150deg, var(--accent), transparent 70%)", opacity: 0.2, transform: "rotate(9deg) translateX(14px)", filter: "blur(2px)" }} />
                <Image
                  src="/portfolio/fisiogest/agenda-mobile.png"
                  alt="FisioGest agenda"
                  width={220}
                  height={420}
                  style={{ position: "relative", zIndex: 2, display: "block", width: "auto", height: 392, borderRadius: 22, transform: "rotate(-4deg)", filter: "drop-shadow(0 30px 52px rgba(0,0,0,0.55)) drop-shadow(0 8px 22px rgba(77,141,255,0.22))" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "clamp(40px,7vw,96px) clamp(20px,5vw,72px)" }}>
        <p className="reveal" style={{ fontFamily: "var(--label-font)", fontSize: "var(--label-size)", fontWeight: "var(--label-w)" as unknown as number, letterSpacing: "var(--label-ls)", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 28px" }}>
          {it ? "(02) — Chi sono" : "(02) — About"}
        </p>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>
          <div>
            <h2 className="reveal" style={{ margin: "0 0 28px", fontSize: "clamp(30px,4.6vw,62px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
              {it ? (
                <>
                  Design sistemico,
                  <br />
                  soluzioni umane.
                </>
              ) : (
                <>
                  Systems-led design,
                  <br />
                  human solutions.
                </>
              )}
            </h2>
            <p className="reveal" style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.72, color: "var(--text2)", "--d": ".06s" } as React.CSSProperties}>
              {it
                ? "Sono Antonino Omar Amato, Product Designer. Traduco gli insight degli utenti in soluzioni semplici e scalabili, con una particolare attenzione al pensiero sistemico e alla prototipazione rapida."
                : "I'm Antonino Omar Amato, a Product Designer. I translate user insight into simple, scalable solutions, with a particular focus on systems thinking and rapid prototyping."}
            </p>
            <p className="reveal" style={{ margin: 0, fontSize: 17, lineHeight: 1.72, color: "var(--text2)", "--d": ".12s" } as React.CSSProperties}>
              {it
                ? "Lavoro fianco a fianco con team e utenti per costruire esperienze utili e sostenibili — partendo sempre dalla ricerca e arrivando a decisioni di design difendibili."
                : "I work side by side with teams and users to build useful, sustainable experiences — always starting from research and ending with defensible design decisions."}
            </p>

            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 34, "--d": ".18s" } as React.CSSProperties}>
              {["Figma", "Miro", "Dovetail", "Notion"].map((tool) => (
                <span key={tool} style={{ fontFamily: "var(--label-font)", fontSize: 12, color: "var(--text3)", padding: "8px 14px", border: "1px solid var(--border)", borderRadius: 999 }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", "--d": ".1s" } as React.CSSProperties}>
            <div style={{ padding: "20px 26px", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--label-font)", fontSize: "var(--label-size)", fontWeight: "var(--label-w)" as unknown as number, letterSpacing: "var(--label-ls)", textTransform: "uppercase", color: "var(--text3)" }}>
                {it ? "Cosa faccio" : "What I do"}
              </span>
            </div>
            {skills.map((s, i) => (
              <div
                key={s.title}
                className="skill-row"
                style={{ display: "flex", alignItems: "center", gap: 18, padding: "22px 26px", borderBottom: i === skills.length - 1 ? undefined : "1px solid var(--border)" }}
              >
                <s.icon style={{ width: 22, height: 22, color: "var(--accent)", flex: "none" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text3)", marginTop: 3 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "clamp(48px,8vw,110px) clamp(20px,5vw,72px) clamp(64px,9vw,120px)" }}>
        <div className="reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(40px,6vw,72px)" }}>
          <p style={{ fontFamily: "var(--label-font)", fontSize: "var(--label-size)", fontWeight: "var(--label-w)" as unknown as number, letterSpacing: "var(--label-ls)", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 26px" }}>
            {it ? "(03) — Contatti" : "(03) — Get in touch"}
          </p>
          <h2 style={{ margin: 0, fontSize: "clamp(38px,7.4vw,108px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.96, maxWidth: "16ch", textWrap: "balance" }}>
            {it ? (
              <>
                Hai un progetto
                <br />
                in mente?
              </>
            ) : (
              <>
                Have a project
                <br />
                in mind?
              </>
            )}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40, justifyContent: "space-between", marginTop: "clamp(36px,5vw,56px)" }}>
            <p style={{ margin: 0, maxWidth: "46ch", fontSize: 17, lineHeight: 1.65, color: "var(--text2)" }}>
              {it
                ? "Sono aperto a opportunità full-time e collaborazioni freelance. Scrivimi due righe, rispondo a tutti."
                : "I'm open to full-time roles and freelance collaborations. Drop me a line — I reply to everyone."}
            </p>
            <a
              href="mailto:info@omaramato.com"
              data-magnetic
              data-cursor
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", background: "var(--accent)", color: "#06120c", fontWeight: 600, fontSize: "clamp(16px,1.8vw,20px)", padding: "18px 32px", borderRadius: 999, whiteSpace: "nowrap" }}
            >
              <Mail style={{ width: 20, height: 20 }} />
              {it ? "Contattami" : "Get in touch"}
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "32px clamp(20px,5vw,72px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <span style={{ fontSize: 13, color: "var(--text3)" }}>© {new Date().getFullYear()} Antonino Omar Amato — omaramato.com</span>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a href="mailto:info@omaramato.com" className="navlink" style={{ textDecoration: "none", color: "var(--text2)", fontSize: 13 }}>
              info@omaramato.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
