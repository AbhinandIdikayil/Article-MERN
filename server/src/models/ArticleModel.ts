import mongoose, { Document, model, ObjectId, Schema } from "mongoose";

interface IArticle extends Document {
    userId: ObjectId
    title: string;
    content: string;
    description: string;
    image: File | null;
    tags: string[];
    category: string;
}

const articleSchema = new Schema<IArticle>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
    ,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export const ArticlModel = model<IArticle>('Articles',articleSchema)