import { Schema, model, models, Document } from 'mongoose'
import StorySettingsSchema from './storySettings'

interface Story extends Document {
  title: string
  authorId: string
  createdAt: Date
  participants: string[]
  isPrivate: boolean
  description: string
  openingSegment: string
  likeCount: number
  settings: Record<string, any>
}

const StorySchema = new Schema<Story>({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  authorId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  participants: {
    type: [String],
    default: function(this: Story) {
      return [this.authorId]
    }
  },
  isPrivate: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    default: ''
  },
  openingSegment: {
    type: String,
    required: [true, 'An opening segment is required!']
  },
  likeCount: {
    type: Number,
    default: 0
  },
  settings: {
    type: StorySettingsSchema
  }
})

export default models.Story || model<Story>('Story', StorySchema)