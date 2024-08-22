import { Schema, model, models, Document } from "mongoose"

interface Segment extends Document {
  authorId: string
  storyId: string
  content: string
  createdAt: Date
  likes: number
}

const SegmentSchema = new Schema<Segment>({
  authorId: {
    type: String,
    required: true
  },
  storyId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  }
})

export default models.Segment || model<Segment>("Segment", SegmentSchema)
