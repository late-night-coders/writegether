"use client"
import type { Session } from "next-auth"
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google")
  }
  return (
    <button onClick={handleClick} className="text-white">
      {" "}
      Login
    </button>
  )
}
