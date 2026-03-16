import { type NextRequest, NextResponse } from "next/server"
import { put, list } from "@vercel/blob"

export async function POST(request: NextRequest) {
  console.log("[v0] API: send-reference called")
  try {
    const body = await request.json()
    console.log("[v0] API: Request body parsed:", { ...body, testimonial: body.testimonial?.substring(0, 50) + "..." })
    const { name, role, company, email, relationship, testimonial } = body

    // Validate required fields (only name and testimonial are mandatory)
    if (!name || !testimonial) {
      console.log("[v0] API: Validation failed - name or testimonial missing")
      return NextResponse.json({ error: "Name and testimonial are required" }, { status: 400 })
    }

    // Validate email format only if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        console.log("[v0] API: Validation failed - invalid email")
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
      }
    }

    console.log("[v0] API: All validations passed")

    // Format relationship text
    const relationshipText = {
      direct_manager: "Omar was my manager",
      managed_by: "I was Omar's manager",
      colleague: "We were colleagues",
      client: "Omar worked for my company",
      other: "Other",
    }[relationship]

    // Create reference object
    const reference = {
      id: Date.now().toString(),
      name,
      role,
      company,
      email,
      relationship: relationshipText,
      testimonial,
      submittedAt: new Date().toISOString(),
    }

    // Check if we're in production with Blob credentials
    const hasBlob = !!process.env.BLOB_READ_WRITE_TOKEN
    console.log("[v0] API: Blob credentials available:", hasBlob)

    if (hasBlob) {
      // Production: Use Blob storage
      let references = []
      console.log("[v0] API: Attempting to list existing blobs...")
      try {
        const { blobs } = await list({ prefix: "references.json" })
        console.log("[v0] API: Found", blobs.length, "existing blob(s)")
        if (blobs.length > 0) {
          console.log("[v0] API: Fetching existing references from:", blobs[0].url)
          const response = await fetch(blobs[0].url)
          references = await response.json()
          console.log("[v0] API: Loaded", references.length, "existing reference(s)")
        }
      } catch (error) {
        console.log("[v0] API: Error loading existing references:", error)
        console.log("[v0] API: Starting with empty array")
      }

      // Add new reference
      references.push(reference)
      console.log("[v0] API: Total references after adding new one:", references.length)

      // Save updated references to Blob
      console.log("[v0] API: Saving to Blob storage...")
      const blob = await put("references.json", JSON.stringify(references, null, 2), {
        access: "public",
        contentType: "application/json",
      })
      console.log("[v0] API: Blob saved successfully at:", blob.url)
    } else {
      // Development: Just log (no persistent storage)
      console.log("[v0] API: Development mode - reference would be saved in production")
    }

    console.log("[v0] API: Reference processed successfully:", { id: reference.id, name, company })

    return NextResponse.json(
      {
        message: "Reference received successfully",
        data: { name, email, company },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Error processing reference:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
