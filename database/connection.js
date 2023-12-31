import "dotenv/config";
import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected...");
} catch (error) {
    console.log("Can not connect: " + error);
}