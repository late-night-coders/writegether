import Image from "next/image"
import { Box } from "@mui/material"
import type { Story } from "@/types"

interface ImageSliderProps {
  trendingStories: Story[]
  currentIndex: number
}

const ImageSlider = ({ trendingStories, currentIndex }: ImageSliderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        objectFit: "cover",
        overflow: "hidden",
        width: "400px",
        height: "400px",
        flexShrink: 1
      }}
    >
      {trendingStories.map((story: Story) => (
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
  )
}

export default ImageSlider
