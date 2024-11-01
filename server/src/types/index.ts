import { ObjectId } from "mongoose";


export interface IUser {
    _id: string,
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    DOB: Date,
    password: string,
    preferences: { value: string }[];
}

export interface IArticle {
    userId: ObjectId,
    title: string
    content: string
    description: string;
    image: string;
    tags: string[];
    category: string;
    likes: string[]
}

export interface ILogin {
    email?: string,
    phone?: string,
    password: string
}


export interface filterPagination {
    name?: string | null,
    category?: [string] | [],
    pageSize?: number,
    page: number,
}