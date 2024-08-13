import { Schema, model, models } from 'mongoose'

const StorySettingsSchema = new Schema({
  maxSegmentcount: {
    type: Number,
    default: 1
  },
  maxSentenceCountPerSegment: {
    type: Number,
    default: 5
  },
  isMustKeywordEnabled: {
    type: Boolean,
    default: false
  },
  deadline: {
    type: Date,
    required: [ true, 'You must set the deadline for the story.']
  }
})

export default models.StorySettings || model('StorySettings', StorySettingsSchema)