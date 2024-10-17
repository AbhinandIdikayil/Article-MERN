import mongoose from "mongoose"
import { MONGO_URI } from "../config/env"


export const connectDB = async () => {
    try {
        const res = await mongoose.connect(MONGO_URI)
        if (res) {
            console.log(`-- 🍃 Database connected 🍃 --`)
        }
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}