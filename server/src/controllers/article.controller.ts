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
    async list(req: Request, res: Response, next: NextFunction) {
        try {

            const data = await this.articleService.findAll(req.query)
            res.status(200).json({ success: true, data, message: 'article listed successfully' })
        } catch (error) {
            next(error)
        }
    }

    async deleteArticle(req: Request, res: Response, next: NextFunction) {
        try {
            const articleId = req.params.id;
            console.log("article Id", articleId);

            const findArticle = await this.articleService.deleteOne(articleId)
            console.log(findArticle);
            if (!findArticle) {
                throw ErrorResponse.notFound('Article not found')
            }

            res.status(200).json({
                success: true,
                data: findArticle,
                message: "Article deleted successfully",
            });
        } catch (error) {
            console.error("Error fetching articles:", error);
            next(error);
        }
    };

    async ArticlesOfOneUser(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user
            const data = await this.articleService.ArticlesOfOneUser(id)
            res.status(200).json({ success: true, data })
        } catch (error) {
            next(error)
        }
    }
    async editArticle(req: Request, res: Response, next: NextFunction) {
        try {
            const articleId = req.params.id
            const { data } = req.body
            const result = await this.articleService.editArticle(articleId, data)
            if (!data) {
                throw ErrorResponse.badRequest('Couldnt edit article')
            }
            res.status(200).json({ success: true, data: result, message: 'Updated successfully' })
        } catch (error) {
            next(error)
        }
    }

    async likeArticle(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user //! user id
            const articleId = req.params.id
            const data = await this.articleService.likeArticle(articleId, id)
            if (!data) {
                throw ErrorResponse.badRequest('Couldnt login')
            }
            res.status(200).json({ success: true, data, message: 'successfull' })
        } catch (error) {
            console.error("Error liking/unliking article:", error);
            next(error);
        }
    };
    async dislikeArticle(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user //! user id
            const articleId = req.params.id
            let data = await this.articleService.dislikeArticle(articleId, id)
            if (!data) {
                throw ErrorResponse.badRequest('Couldnt login')
            }
            res.status(200).json({ success: true, data, message: 'successfull' })
        } catch (error) {

        }
    }

    async blockArticle(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user
            const articleId = req.params.id
            const data = await this.articleService.blockArticle(id, articleId)
            if (!data) {
                throw ErrorResponse.badRequest('Error while blokcking')
            }
            res.status(200).json({ success: true, data })
        } catch (error) {
            next(error)
        }
    }
    async likedUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const data = await this.articleService.likedUsers(id)
            res.status(200).json({data,message:'success'})

        } catch (error) {
            next(error)
        }
    }
}