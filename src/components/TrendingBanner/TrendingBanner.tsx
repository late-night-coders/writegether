"use client"
import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import TrendingStoriesDisplay from "./TrendingStoriesDisplay"
import type { Story } from "@/types"

const TrendingBanner = () => {
  const [trendingStories, setTrendingStories] = useState<Story[]>([])

  useEffect(() => {
    const fetchTrendingStories = async () => {
      const trendingStories = await fetch(
        "/api/stories?category=trending&limit=5"
      ).then((res) => res.json())
      setTrendingStories(trendingStories)
    }
    fetchTrendingStories()
  }, [])

  if (trendingStories.length > 0) {
    return (
      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5))",
          width: "100%",
          height: {
            xs: "100vh",
            md: "60vh"
          }
        }}
      >
        <TrendingStoriesDisplay trendingStories={trendingStories} />
      </Box>
    )
  }
}

export default TrendingBanner
