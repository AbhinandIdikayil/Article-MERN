import { Document, model, Schema } from "mongoose";

interface IUser extends Document {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    DOB: Date,
    password: string,
    preferences: string[];
}

const UserSchema = new Schema<IUser>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    preferences: {
        type: [String],
        required: true
    }
})

export const UserModel = model<IUser>('Users',UserSchema)