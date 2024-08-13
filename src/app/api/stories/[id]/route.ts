import Story from "@/models/story"
import connectToDB from "@/utils/connectToDB"
import { NextRequest } from "next/server"

interface StoryParams {
  id: string
}

export const GET = async (request: NextRequest, { params }: {
  params: StoryParams
}) => {
  const { id } = params
  try {
    await connectToDB()
    const story = await Story.findById(id)

    if (!story) return new Response('Story Not Found', { status: 404 })

    return new Response(JSON.stringify(story), { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  try {
    const {
      authorId,
      title,
      openingSegment
    } = await request.json()

    await connectToDB()
    const story = new Story({
      authorId,
      title,
      openingSegment
    })

    await story.save()
    return new Response(JSON.stringify(story), {
      status: 201,
    })
  } catch (error) {
    console.log('error:', error)
    return new Response('Failed to save the story in the database.', {
      status: 500,
    })
  }
}

export const DELETE = async (request:NextRequest , { params }:{
  params: StoryParams
}) => {
  const { id } = params

  try {
    await connectToDB()
    await Story.findByIdAndDelete(id)

    return new Response('Story deleted successfully', { status: 200 })
  } catch (error) {
    return new Response('Error deleting prompt', { status: 500 })
  }
}

export const PATCH = async (request: NextRequest, { params }: {
  params: StoryParams
}) => {
  const { newData } = await request.json()
  const {
    id,
    title,
    openingSegment
  } = newData
  try {
    await connectToDB()
    const story = await Story.findById(id)

    if (!story) {
      return new Response('Story not found', { status: 404 })
    }

    story.title = title
    story.openingSegment = openingSegment

    await story.save()

    return new Response('Successfully updated the story', { status: 200 })
  } catch (error) {
    return new Response(`Error updating the story ${error}`, { status: 500 })
  }
}
