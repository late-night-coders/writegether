import { ReactNode } from "react"
import Header from "@/app/(auth)/components/Header"

export default function AuthPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col gap-8">
      <Header />
      <section className="w-full h-full flex p-4">
        {children}
      </section>
    </main>
  )
}
