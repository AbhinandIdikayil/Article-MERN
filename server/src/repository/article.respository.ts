import mongoose from "mongoose";
import { ArticlModel, IArticleMOdel } from "../models/ArticleModel";
import { IArticle } from "../types";



export class ArticleRepository {
    async create(data: IArticle): Promise<IArticle> {
        return await ArticlModel.create(data) as unknown as IArticle
    }
    async findAll(): Promise<IArticle[]> {
        return await ArticlModel.find()
    }
    async deleteOne(id: string): Promise<IArticle | null> {
        let res = await ArticlModel.findByIdAndDelete({ _id: id }, { new: true })
        if (res) {
            return res as unknown as IArticle
        } else {
            return null
        }
    }
    async ArticlesOfOneUser(id: string): Promise<IArticle[]> {
        return await ArticlModel.find({ userId: id })
    }

    async editArticle(id: string, data: IArticle): Promise<IArticle | null> {
        return await ArticlModel.findByIdAndUpdate(
            { _id: id },
            {
                $set: { ...data }
            },
            { new: true }
        )
    }
    async findOne(id: string): Promise<IArticleMOdel | null> {
        return await ArticlModel.findOne({ _id: id })
    }
    async likeArticle(id: string, userid: string): Promise<IArticleMOdel | null> {
        let user = await this.findOne(id)
        if (user) {
            const userIdObject = new mongoose.Types.ObjectId(userid); // Convert string to ObjectId
            const likedIndex = user.likes.indexOf(userIdObject)
            if (likedIndex !== -1) {
                user.likes.splice(likedIndex, 1);
                let res = await user.save();
                return res as unknown as IArticleMOdel
            } else {
                return null
            }
        } else {
            return null
        }
    }
}