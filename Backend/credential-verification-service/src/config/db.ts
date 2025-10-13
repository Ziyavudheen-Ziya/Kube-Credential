import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ziyavudheen:ziyavudheen@cluster0.zkekwwj.mongodb.net/kubeCredentils"
    );

    console.log("MongoDb is connected successfully");
  } catch (error) {
    console.log("Error connection to mongoDB", error);
     process.exit(1);
  }
};




export default dbConnect;