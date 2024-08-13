import { connectToDB } from "@/utils/connectToDB"
import Story from '@/models/story'

export async function GET() {
  try {
    await connectToDB()
    const stories = await Story.find({})
    return new Response(JSON.stringify(stories), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch all stories', { status: 500 })
  }
}