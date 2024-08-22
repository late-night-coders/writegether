import Story from "@/models/story"
import connectToDB from "@/utils/connectToDB"
import { NextRequest } from "next/server"

interface StoryParams {
  storyId: string
}

export const GET = async (
  _request: NextRequest,
  {
    params
  }: {
    params: StoryParams
  }
) => {
  const { storyId } = params
  try {
    await connectToDB()
    const story = await Story.findById(storyId)

    if (!story) return new Response("Story Not Found", { status: 404 })

    return new Response(JSON.stringify(story), { status: 200 })
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 })
  }
}

export const DELETE = async (
  _request: NextRequest,
  {
    params
  }: {
    params: StoryParams
  }
) => {
  const { storyId } = params

  try {
    await connectToDB()
    await Story.findByIdAndDelete(storyId)

    return new Response("Story deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 })
  }
}

export const PUT = async (request: NextRequest) => {
  const response = await request.json()
  const { id, title, openingSegment } = response
  try {
    await connectToDB()
    const story = await Story.findById(id)

    if (!story) {
      return new Response("Story not found", { status: 404 })
    }

    story.title = title
    story.openingSegment = openingSegment

    await story.save()

    return new Response("Successfully updated the story", { status: 200 })
  } catch (error) {
    return new Response(`Error updating the story ${error}`, { status: 500 })
  }
}
