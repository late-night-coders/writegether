import mongoose from "mongoose"

export async function connectToDB() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGO_DB_URL!)
    } catch (error) {
      console.error("Error connecting to db", error)
    }
  }
}

export default connectToDB
