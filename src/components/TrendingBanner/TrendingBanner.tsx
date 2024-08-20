"use client"
import {
  Box,
  Button,
  Container,
  MobileStepper,
  Typography
} from "@mui/material"
import { useState, useEffect } from "react"
import Image from "next/image"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
// import imageData from '../../doge.jpg'

const trimString = (str: string, maxLength = 400) => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
}

const TrendingBanner = () => {
  const [trendingStories, setTrendingStories] = useState<any>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [ imageUrl, setImageUrl ] = useState('')

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingStories.length)
  }

  const handleBack = () => {
    setCurrentIndex((prevActiveStep) =>
      prevActiveStep - 1 < 0 ? trendingStories.length - 1 : prevActiveStep - 1
    )
  }

  useEffect(() => {
    const fetchTrendingStories = async () => {
      const trendingStories = await fetch(
        "/api/stories?category=trending&limit=5"
      ).then((res) => res.json())
      setTrendingStories(trendingStories)
    }
    fetchTrendingStories()

    // async function getImageBlob() {
    //   const reader = new FileReader()
    //   const blob = await fetch(imageData.src).then(res => res.blob())
    //   reader.onloadend = () => {
    //     console.log('reader.resilt:', reader.result)
    //     setImageUrl(reader.result as any)
    //   }
    //   reader.readAsDataURL(blob)
    // }
    // getImageBlob()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingStories.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [trendingStories.length])

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
          height: "60vh"
        }}
      >
        <Container
          sx={{
            display: "flex",
            width: "70%",
            gap: "2rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex"
              },
              objectFit: "cover",
              overflow: "hidden",
              width: "400px",
              height: "400px"
            }}
          >
            {trendingStories.map((story: any) => (
              <Image
                key={story._id}
                src={story.imageUrl}
                alt="Trending story"
                width={0}
                height={0}
                style={{
                  width: "inherit",
                  height: "inherit",
                  aspectRatio: "1/1",
                  transition: "transform 0.5s ease",
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              />
            ))}
          </Box>

          {trendingStories.map((story: any) => (
            <Box
              key={story._id}
              sx={{
                flex: 1,
                padding: "1rem",
                color: "white",
                flexDirection: "column",
                display:
                  currentIndex === trendingStories.indexOf(story)
                    ? "flex"
                    : "none"
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontStyle: "italic"
                }}
              >
                {story.title}
              </Typography>
              <Typography variant="h6" sx={{ alignSelf: "flex-end" }}>
                By {story.authorId}
                {story.participants.length > 1 &&
                  ` and ${story.participants.length} contributors`}
              </Typography>
              <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
                {story.views} views • {story.likes} likes
              </Typography>
              <Typography variant="body1" sx={{ marginY: "2rem" }}>
                {trimString(story.openingSegment)}
              </Typography>

              <Button
                sx={{ maxWidth: "100px", alignSelf: "flex-end" }}
                // sx={{ justifySelf: "flex-end" }}
                variant="contained"
                color="primary"
              >
                Read
              </Button>
            </Box>
          ))}
        </Container>
        <MobileStepper
          steps={5}
          position="static"
          activeStep={currentIndex}
          sx={{
            background: "transparent"
          }}
          nextButton={
            <Button size="small" onClick={handleNext}>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
    )
  }
}

export default TrendingBanner
