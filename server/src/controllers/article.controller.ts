import { NextFunction, Request, Response } from "express";
import { ArticleFactory } from "../factory/article.factory";
import ErrorResponse from "../utils/ApiError";

export class ArticleController {
    private articleService = ArticleFactory.CreateArticleFactory()
    async createArticle(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId,title,content, description,category,tags,image } = req.body
            const data ={
                userId,
                title,
                content,
                description,
                image,
                tags,
                category
            }
            const article = await this.articleService.createArticle(data)
            if(!article) throw ErrorResponse.badRequest('Cant create article')
            res.status(200).json({success:true,data:article,message:'article created succesfully'})
        } catch (error) {
            next(error)
        }
    }
}