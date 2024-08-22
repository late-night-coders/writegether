import Segment from "@/models/segment"
import connectToDB from "@/utils/connectToDB"
import { NextRequest } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: { segmentId: string } }
) {
  const { segmentId } = params
  try {
    await connectToDB()
    const segment = await Segment.find({ _id: segmentId })

    return new Response(JSON.stringify(segment), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch the segment", { status: 500 })
  }
}

export const DELETE = async (_request: NextRequest, { params }: any) => {
  const { segmentId } = params

  try {
    await connectToDB()
    await Segment.findByIdAndDelete(segmentId)

    return new Response("Segment deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 })
  }
}

export const PUT = async (
  request: NextRequest,
  { params }: { params: { segmentId: string } }
) => {
  const response = await request.json()
  const { segmentId } = params
  const { content } = response
  try {
    await connectToDB()
    const segment = await Segment.findById(segmentId)

    if (!segment) {
      return new Response("Segment not found", { status: 404 })
    }

    segment.content = content

    await segment.save()

    return new Response("Successfully updated the segment", { status: 200 })
  } catch (error) {
    return new Response(`Error updating the segment ${error}`, { status: 500 })
  }
}
