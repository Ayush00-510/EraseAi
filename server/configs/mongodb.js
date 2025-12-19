import mongoose from "mongoose";

const connectDB = async() =>{

    try {

        // Prevent multiple MongoDB connections
        if (mongoose.connection.readyState >= 1) return;


        await mongoose.connect(`${process.env.MONGODB_URI}/EraseAi`);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }



}

export default connectDB