import mongoose from "mongoose"

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://taiki19850420:Taishii0125@cluster0.7m5hgql.mongodb.net/?retryWrites=true&w=majority")
    console.log("Success:Connected")
  } catch(err) {
    console.log("Failure: Unconnected")
    throw new Error()
  }
}

export default connectDB
