import { NextFunction, Request, Response } from "express";
import { ArticleFactory } from "../factory/article.factory";
import ErrorResponse from "../utils/ApiError";
import { JwtPayload } from "jsonwebtoken";
interface CustomJwtPayload extends JwtPayload {
    id: string;
}
export interface ModifiedRequest extends Request {
    user: CustomJwtPayload;
}
export class ArticleController {
    private articleService = ArticleFactory.CreateArticleFactory()
    async createArticle(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { data }: { data: any } = req.body
            const { id } = req.user
            const updatedBody = {
                ...data,
                userId: id
            }
            const article = await this.articleService.createArticle(updatedBody)
            if (!article) throw ErrorResponse.badRequest('Cant create article')
            res.status(200).json({ success: true, data: article, message: 'article created succesfully' })
        } catch (error) {
            next(error)
        }
    }
}