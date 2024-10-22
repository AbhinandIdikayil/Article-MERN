import mongoose from "mongoose";
import { ArticlModel, IArticleMOdel } from "../models/ArticleModel";
import { IArticle } from "../types";
import ErrorResponse from "../utils/ApiError";



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
            const dislikedIndex = user.dislikes.indexOf(userIdObject);

            if (likedIndex !== -1) {
                user.likes.splice(likedIndex, 1);
                let res = await user.save();
                return res as unknown as IArticleMOdel
            } else {
                if (dislikedIndex !== -1) {
                    user.dislikes.splice(dislikedIndex, 1);
                }
                user.likes.push(userIdObject);
                let res = await user.save();
                return res as unknown as IArticleMOdel
            }
        } else {
            return null
        }
    }

    async dislikeArticle(id: string, userId: string): Promise<IArticleMOdel | null> {
        let article = await this.findOne(id)
        if (article) {
            const userIdObject = new mongoose.Types.ObjectId(userId); // Convert string to ObjectId
            const likedIndex = article.likes.indexOf(userIdObject);

            const dislikedIndex = article.dislikes.indexOf(userIdObject);
            if (dislikedIndex !== -1) {
                article.dislikes.splice(dislikedIndex, 1);
                let res = await article.save();
                //! for disliking
                return res as unknown as IArticleMOdel

            } else {
                //! for unliking
                if (likedIndex !== -1) {
                    article.likes.splice(likedIndex, 1);
                }
                article.dislikes.push(userIdObject);
                let res = await article.save();
                return res as unknown as IArticleMOdel
            }
        } else {
            return null
        }
    }
    async blockArticle(userid: string, articleid: string): Promise<IArticleMOdel | null> {
        let article = await this.findOne(articleid)
        if(!article){
            throw ErrorResponse.notFound('Article not found')
        }
        const userIdObject = new mongoose.Types.ObjectId(userid);
        let res;
        const blockedIndex:any = article?.blocks.indexOf(userIdObject);

        if (blockedIndex !== -1) {
            article?.blocks.splice(blockedIndex, 1);
            res = await article?.save();
            //! unblocked
        } else {
            //! blocked
            article?.blocks.push(userIdObject);
            res =await article?.save();
        }
        return res as IArticleMOdel
    }
}