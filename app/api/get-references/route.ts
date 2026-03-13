import { type NextRequest, NextResponse } from "next/server"
import { list } from "@vercel/blob"

export async function GET(request: NextRequest) {
  try {
    console.log("[v0] API: Fetching references from Blob...")
    
    // Get references from Blob storage
    const { blobs } = await list({ prefix: "references.json" })

    if (blobs.length === 0) {
      console.log("[v0] API: No references found in Blob")
      return NextResponse.json([], { status: 200 })
    }

    // Fetch the latest references file
    const response = await fetch(blobs[0].url)
    const references = await response.json()

    // Sort by most recent first
    references.sort((a: any, b: any) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())

    console.log("[v0] API: Retrieved", references.length, "references from Blob")
    return NextResponse.json(references, { status: 200 })
  } catch (error) {
    console.error("[v0] API: Error reading references:", error)
    return NextResponse.json([], { status: 200 })
  }
}
