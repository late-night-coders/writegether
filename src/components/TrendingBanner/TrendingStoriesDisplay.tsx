import { useEffect, useState } from "react"
import { Button, Container, MobileStepper } from "@mui/material"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import StoryDetails from "./StoryDetails"
import ImageSlider from "./ImageSlider"
import { Story } from "@/types"

export interface TrendingStoriesProps {
  trendingStories: Story[]
}

const TrendingStories = ({ trendingStories }: TrendingStoriesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingStories.length)
  }

  const handleBack = () => {
    setCurrentIndex((prevActiveStep) =>
      prevActiveStep - 1 < 0 ? trendingStories.length - 1 : prevActiveStep - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingStories.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [trendingStories.length])

  return (
    <>
      <Container
        sx={{
          display: "flex",
          width: "100%",
          gap: "2rem",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ImageSlider
          trendingStories={trendingStories}
          currentIndex={currentIndex}
        />
        <StoryDetails
          trendingStories={trendingStories}
          currentIndex={currentIndex}
        />
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
    </>
  )
}

export default TrendingStories
