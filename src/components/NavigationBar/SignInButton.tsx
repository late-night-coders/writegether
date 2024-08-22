"use client"
import { Button } from "@mui/material"
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google")
  }
  return (
    <Button onClick={handleClick} color="inherit">
      LOGIN
    </Button>
  )
}
