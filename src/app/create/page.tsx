import { getServerSession } from "next-auth"
import StoryCreationForm from "@/components/StoryCreationForm/StoryCreationForm"
import connectToDB from "@/utils/connectToDB"
import Story from '@/models/story'
import { authConfig } from "../api/auth/[...nextauth]/route"

export interface StoryData {
  title: string
  openingSegment: string
}

const onPostAction = async ({
  title,
  openingSegment
}: StoryData) => {
  "use server"
  await connectToDB()
  const session = await getServerSession(authConfig)
  const story = new Story({
    authorId: session?.user?.id,
    title,
    openingSegment
  })
  await story.save()
}

export default async function StoryCreationPage() {
  return (
    <main>
      <StoryCreationForm onPostAction={onPostAction} />
    </main>
  )
}
