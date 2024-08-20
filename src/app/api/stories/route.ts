import { connectToDB } from "@/utils/connectToDB"
import Story from "@/models/story"
import { NextRequest } from "next/server"
interface SortFields {
  [key: string]: 1 | -1
}

const sevenDaysAgo = new Date()
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

const sortBy: Record<string, SortFields> = {
  mostViewed: { views: -1 },
  trending: { views: -1, likeCount: -1 },
  latest: { createdAt: -1 },
  oldest: { createdAt: 1 }
}

const filterBy: Record<string, any> = {
  trending: { createdAt: { $gte: sevenDaysAgo }, isPrivate: false }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDB()
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category") ?? "latest"
    const limit = parseInt(searchParams.get("limit") ?? "5")
    const stories = await Story.find(filterBy[category])
      .sort(sortBy[category])
      .limit(limit)
    return new Response(JSON.stringify(stories), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all stories", { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  try {
    const {
      authorId,
      title,
      openingSegment,
      isPrivate,
      views,
      likes,
      imageUrl,
      participants
    } = await request.json()

    await connectToDB()

    const story = new Story({
      authorId,
      title,
      openingSegment,
      isPrivate,
      views,
      likes,
      imageUrl,
      participants
    })

    await story.save()
    return new Response(JSON.stringify(story), {
      status: 201
    })
  } catch (error) {
    return new Response("Failed to save the story in the database.", {
      status: 500
    })
  }
}
