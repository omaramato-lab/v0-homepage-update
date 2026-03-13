import { NextResponse } from "next/server"

export const dynamic = "force-static"
export const revalidate = false

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage -->
  <url>
    <loc>https://omaramato.com/</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/en"/>
  </url>
  
  <!-- Fractional Head of Design - Italian -->
  <url>
    <loc>https://omaramato.com/fractional-head-of-design.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/fractional-head-of-design.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/fractional-head-of-design-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/fractional-head-of-design-en.html"/>
  </url>
  
  <!-- Fractional Head of Design - English -->
  <url>
    <loc>https://omaramato.com/fractional-head-of-design-en.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/fractional-head-of-design.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/fractional-head-of-design-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/fractional-head-of-design-en.html"/>
  </url>
  
  <!-- UX Audit - Italian -->
  <url>
    <loc>https://omaramato.com/ux-audit.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/ux-audit.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/ux-audit-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/ux-audit-en.html"/>
  </url>
  
  <!-- UX Audit - English -->
  <url>
    <loc>https://omaramato.com/ux-audit-en.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/ux-audit.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/ux-audit-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/ux-audit-en.html"/>
  </url>
  
  <!-- Landing Page Design - Italian -->
  <url>
    <loc>https://omaramato.com/landing-page-design.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/landing-page-design.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/landing-page-design-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/landing-page-design-en.html"/>
  </url>
  
  <!-- Landing Page Design - English -->
  <url>
    <loc>https://omaramato.com/landing-page-design-en.html</loc>
    <lastmod>2025-12-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://omaramato.com/landing-page-design.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://omaramato.com/landing-page-design-en.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://omaramato.com/landing-page-design-en.html"/>
  </url>
  
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
