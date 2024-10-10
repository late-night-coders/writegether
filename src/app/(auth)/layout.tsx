import { ReactNode } from "react"

export default function AuthPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex">{children}</main>
  )
}
