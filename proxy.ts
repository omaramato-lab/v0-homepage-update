import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Lista delle pagine che hanno versioni IT/EN
  const i18nPages = ["/fractional-head-of-design", "/ux-audit", "/landing-page-design"]

  // Controlla se la richiesta è per una pagina i18n
  const isI18nPage = i18nPages.some((page) => pathname === page || pathname === `${page}.html`)

  if (isI18nPage) {
    // Controlla se l'utente ha già una preferenza salvata nel cookie
    const userLanguage = request.cookies.get("user-language")?.value

    if (userLanguage) {
      // Se l'utente ha una preferenza, rispettala
      if (userLanguage === "en" && !pathname.includes("-en")) {
        const url = request.nextUrl.clone()
        url.pathname = pathname.replace(".html", "") + "-en.html"
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    }

    // Rileva il paese dall'header Vercel (disponibile automaticamente su Vercel)
    const country = request.geo?.country || request.headers.get("x-vercel-ip-country")

    // Se il paese è Italia, mostra versione IT (default)
    if (country === "IT") {
      return NextResponse.next()
    }

    // Per tutti gli altri paesi, redirect alla versione EN
    if (country && country !== "IT" && !pathname.includes("-en")) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.replace(".html", "") + "-en.html"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)", "/fractional-head-of-design", "/ux-audit", "/landing-page-design"],
}
