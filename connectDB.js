import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB is RUNNING");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
