import Segment from "@/models/segment"
import connectToDB from "@/utils/connectToDB"
import { NextRequest } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  try {
    await connectToDB()
    const segments = await Segment.find({ storyId: params.storyId })

    return new Response(JSON.stringify(segments), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all segments for the story", {
      status: 500
    })
  }
}

export const POST = async (
  request: NextRequest,
  { params }: { params: { storyId: string } }
) => {
  try {
    const { authorId, content, likes } = await request.json()
    const { storyId } = params

    await connectToDB()

    const segment = new Segment({
      authorId,
      content,
      storyId,
      likes
    })

    await segment.save()
    return new Response(JSON.stringify(segment), {
      status: 201
    })
  } catch (error) {
    return new Response("Failed to save the segment in the database.", {
      status: 500
    })
  }
}
