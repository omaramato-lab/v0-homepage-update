"use client"
import Link from "next/link"
import { Download, FileText, Image, Type, Palette } from "lucide-react"

interface BrandFile {
  name: string
  description: string
  fileName: string
  icon: React.ReactNode
  category: string
}

const brandFiles: BrandFile[] = [
  // Logo
  {
    name: "Logo Principale",
    description: "Logo in formato SVG vettoriale",
    fileName: "logo-complea.svg",
    icon: <Image className="w-5 h-5" />,
    category: "Logo"
  },
  {
    name: "Logo PNG",
    description: "Logo in formato PNG alta risoluzione",
    fileName: "logo-complea.png",
    icon: <Image className="w-5 h-5" />,
    category: "Logo"
  },
  {
    name: "Logo Bianco",
    description: "Versione bianca per sfondi scuri",
    fileName: "logo-complea-white.svg",
    icon: <Image className="w-5 h-5" />,
    category: "Logo"
  },
  // Documentazione
  {
    name: "Brand Guidelines",
    description: "Linee guida complete del brand",
    fileName: "brand-guidelines.pdf",
    icon: <FileText className="w-5 h-5" />,
    category: "Documentazione"
  },
  // Font
  {
    name: "Font Pack",
    description: "Pacchetto font del brand",
    fileName: "fonts.zip",
    icon: <Type className="w-5 h-5" />,
    category: "Font"
  },
  // Colori
  {
    name: "Palette Colori",
    description: "File ASE con i colori del brand",
    fileName: "color-palette.ase",
    icon: <Palette className="w-5 h-5" />,
    category: "Colori"
  },
]

export default function CompleaPage() {
  const categories = [...new Set(brandFiles.map(file => file.category))]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          ← Torna alla home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Brand Assets</h1>
        <p className="text-muted-foreground mb-12">
          Scarica i file esecutivi del brand Complea. Tutti i materiali sono pronti per l&apos;uso.
        </p>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-2xl font-semibold mb-6 text-accent">{category}</h2>
              <div className="grid gap-4">
                {brandFiles
                  .filter((file) => file.category === category)
                  .map((file) => (
                    <a
                      key={file.fileName}
                      href={`/complea/${file.fileName}`}
                      download
                      className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg text-accent">
                          {file.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {file.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{file.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
                        <Download className="w-5 h-5" />
                        <span className="text-sm hidden sm:inline">Download</span>
                      </div>
                    </a>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 bg-card border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            Per caricare i tuoi file, aggiungili nella cartella <code className="bg-secondary px-2 py-1 rounded">public/complea/</code> e aggiorna la lista sopra.
          </p>
        </div>
      </div>
    </div>
  )
}
