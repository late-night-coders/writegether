export interface Story {
  _id: string
  title: string
  authorId: string
  participants: any[] // TODO: Replace with User type
  views: number
  likes: number
  openingSegment: string
  imageUrl: string
}
