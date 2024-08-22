import { Box, Button, Typography } from "@mui/material"
import type { Story } from "@/types"

interface StoryDetailsProps {
  trendingStories: Story[]
  currentIndex: number
}

const trimString = (str: string, maxLength = 400) => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
}

const StoryDetails = ({ trendingStories, currentIndex }: StoryDetailsProps) => {
  return (
    <>
      {trendingStories.map((story: Story) => (
        <Box
          key={story._id}
          sx={{
            flex: 1,
            padding: "1rem",
            color: "white",
            flexDirection: "column",
            display:
              currentIndex === trendingStories.indexOf(story) ? "flex" : "none"
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
            variant="contained"
            color="primary"
          >
            Read
          </Button>
        </Box>
      ))}
    </>
  )
}

export default StoryDetails
