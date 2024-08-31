import { Story } from "@/types"
import { ArrowForward, ArrowRight } from "@mui/icons-material"
import { Container, Box, Typography, Button, List, ListItem } from "@mui/material"
import StoryCard from "./StoryCard"

type Props = {
  stories: Story[],
  heading: string,
}

export default function StoryCarousel({ stories, heading }: Props) {
  return (
    <Box sx={{
      width: "100%", padding: "1rem"
    }}>
      <Box sx={{
        display: "flex", justifyContent: "space-between", gap: "1rem"
      }}>
        <Typography component={"h3"} sx={{
          fontWeight: 900
        }} variant="h5">{heading}</Typography>
        <Button variant="text" sx={{ display: "flex", gap: "0.5rem" }}>
          <Typography>
            View all
          </Typography>
          <ArrowForward sx={{ width: "0.8rem" }} />
        </Button>
      </Box>
      <Box
        padding={0}
        flexWrap={"wrap"}
        component={"ul"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "2rem"
        }}
      >
        {
          stories.map(story => (
            <StoryCard key={story._id} story={story} />
          ))
        }
      </Box>
    </Box>
  )
}
