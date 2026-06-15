import type React from "react"

export function PhoneFrame({
  children,
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative mx-auto aspect-[1/2.05] w-[200px] rounded-[2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-white">{children}</div>
    </div>
  )
}

export function LaptopFrame({
  children,
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-2xl ${className}`}>
      <div className="rounded-t-xl border-[8px] border-neutral-800 bg-neutral-800">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-white">{children}</div>
      </div>
      <div className="mx-auto h-3 w-full rounded-b-xl bg-neutral-700" />
      <div className="mx-auto h-1 w-1/4 rounded-b-lg bg-neutral-600" />
    </div>
  )
}

export function BrowserChrome({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
