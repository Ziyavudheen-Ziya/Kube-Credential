import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URL}`
    );

    console.log("MongoDb is connected successfully");
  } catch (error) {
    console.log("Error connection to mongoDB", error);
     process.exit(1);
  }
};




export default dbConnect;