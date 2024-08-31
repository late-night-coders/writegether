import { StaticImageData } from "next/image"

export interface Story {
  _id: string
  title: string
  authorId: string
  participants: User[] // TODO: Replace with User type
  views: number
  likes: number
  openingSegment: string
  imageUrl: string | StaticImageData
}


export type User = {
  _id: string,
  username: string
  profileImage: string | StaticImageData
}
