"use client"
import { styled, Box, Paper, Typography, Stack, ImageList, ImageListItem } from "@mui/material"
import { FavoriteBorder, Visibility, Add } from "@mui/icons-material"
import Image from "next/image"
import { Story } from "@/types"

export default function StoryCard({ story }: { story: Story }) {
  const StoryCardWrapper = styled(Paper)(({ theme }) => ({
    display: "flex",
    overflow: "hidden",
    width: "100%",
    minWidth: "0px",
    backgroundColor: "#333333",
    color: "white",
    height: "24rem",
    maxWidth: "24rem",
    "& img": {
      backgroundPosition: "center center",
    }
  }))

  const oneThousand = 1000

  const likes = story.likes > oneThousand ? `${Math.round(story.likes / oneThousand * 10) / 10}k` : `${story.likes}`
  const views = story.views > oneThousand ? `${Math.round(story.views / oneThousand * 10) / 10}k` : `${story.views}`

  return (
    <StoryCardWrapper>
      <Box sx={{
        display: "flex", justifyContent: "center", overflow: "hidden", width: "30%"
      }}>
        <Image src={story.imageUrl} alt={"story image"} style={{
          objectFit: "cover"
        }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "", alignItems: "center", width: "100%", padding: "1rem", gap: "5rem" }}>
        <Stack spacing={2} sx={{ height: "100%" }}>
          <Typography sx={{ textAlign: "start", width: "100%", fontSize: "1.5rem" }} component={"h3"} variant="h6">{story.title}</Typography>
          <Typography sx={{ fontSize: "1.25rem", display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{story.openingSegment}</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", alignItems: "center" }}>
          <Stack direction={"row"} spacing={1}>
            <Stack direction="row" spacing={0.3}>
              <FavoriteBorder />
              <Typography>{likes}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.3}>
              <Visibility />
              <Typography>{views}</Typography>
            </Stack>
          </Stack>
          <Box sx={{
            display: "flex",
            width: "100%",
            gap: "0.5rem",
            alignItems: "center"
          }}>
            <ImageList variant={"standard"} sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              "& li": {
                display: "flex",
                width: "2rem",
                height: "2rem",
                borderRadius: "999999px",
                marginInlineStart: "-1rem"
              }
            }}>
              {story.participants.slice(0, 3).map(participant => (
                <ImageListItem key={participant._id}>
                  <Image
                    src={participant.profileImage}
                    alt="user profile picture"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Stack spacing={0} direction={"row"}>
              <Add sx={{ width: "0.8rem" }} />
              <Typography sx={{ minWidth: "fit-content" }}>{story.participants.length - 4}</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </StoryCardWrapper >
  )
}
