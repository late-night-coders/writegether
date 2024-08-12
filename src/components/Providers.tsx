"use client"

import theme from "@/theme"
import { ThemeProvider } from "@mui/material"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
