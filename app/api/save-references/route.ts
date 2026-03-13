import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  try {
    console.log("[v0] API: save-references POST called")
    
    const body = await request.json()
    console.log("[v0] API: Received body type:", typeof body, "is array:", Array.isArray(body))
    
    if (!Array.isArray(body)) {
      console.error("[v0] API: Body is not an array:", body)
      return NextResponse.json({ error: "Body must be an array of references" }, { status: 400 })
    }

    console.log("[v0] API: Saving", body.length, "references to Blob...")

    // Validate Blob is available
    if (!put) {
      console.error("[v0] API: Blob 'put' function not available")
      return NextResponse.json({ error: "Blob storage not configured" }, { status: 500 })
    }

    // Save to Blob with proper error handling
    try {
      const result = await put("references.json", JSON.stringify(body, null, 2), {
        access: "public",
        contentType: "application/json",
      })
      console.log("[v0] API: ✅ References saved to Blob successfully:", result)
      return NextResponse.json({ success: true, count: body.length, url: result.url })
    } catch (blobError) {
      console.error("[v0] API: ❌ Blob save failed:", blobError)
      const errorMsg = blobError instanceof Error ? blobError.message : String(blobError)
      return NextResponse.json({ error: `Blob save failed: ${errorMsg}` }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] API: ❌ Error in save-references:", error)
    const errorMsg = error instanceof Error ? error.message : String(error)
    return NextResponse.json({ error: `Failed to save references: ${errorMsg}` }, { status: 500 })
  }
}
