import mongoose from 'mongoose'

export async function connectToDB() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI!)
      console.log('db is connected')
    } catch (error) {
      console.error('error ocnnecting to db')
    }
  } else {
    console.log('db is already connected')
  }
}

export default connectToDB()