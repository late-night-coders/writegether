"use client"
import { signIn } from "next-auth/react"

function GoogleSignInButton () {
  const handleClick = () => {
    signIn("google")
  }
  return (
    <button
      onClick={handleClick}
    > Google Login</button>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoogleSignInButton />
    </main>
  )
}
