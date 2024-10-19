import mongoose from "mongoose"
import { MONGO_URI } from "../config/env"



export const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`-- 🍃 Database connected successfully 🍃 --`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

