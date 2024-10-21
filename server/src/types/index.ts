import { ObjectId } from "mongoose";


export interface IUser {
    _id: string,
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    DOB: Date,
    password: string,
    preferences: {value: string}[];
}

export  interface IArticle {
    userId: ObjectId,
    title: string
    content: string
    description: string;
    image: File | null;
    tags: string[];
    category: string;
}

export interface ILogin {
    email?: string,
    phone?: string,
    password: string
}