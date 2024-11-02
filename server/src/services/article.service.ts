import { IArticleMOdel } from "../models/ArticleModel";
import { ArticleRepository } from "../repository/article.respository";
import { filterPagination, IArticle } from "../types";
import ErrorResponse from "../utils/ApiError";

export class ArticleService {
    private articleRepository: ArticleRepository
    constructor(articleRepository: ArticleRepository) {
        this.articleRepository = articleRepository
    }

    async createArticle(data: IArticle): Promise<IArticle | null> {
        try {
            return await this.articleRepository.create(data)
        } catch (error) {
            console.log(error)
            throw ErrorResponse.badRequest('Error while creating article')
        }
    }
    async findAll(query: any): Promise<IArticle[]> {
        const option: filterPagination = {
            page: (parseInt(query?.page as string) - 1) || 0,
            pageSize: parseInt(query?.pageSize as string ?? 0) || 0,
            name: query?.name as string || null,
            category: query?.category as string ?? null,
        }
  

        return await this.articleRepository.findAll({ ...option })
    }
    async deleteOne(id: string): Promise<IArticle | null> {
        return await this.articleRepository.deleteOne(id)
    }
    async ArticlesOfOneUser(id: string): Promise<IArticle[]> {
        return await this.articleRepository.ArticlesOfOneUser(id)
    }
    async editArticle(id: string, data: IArticle): Promise<IArticle | null> {
        return await this.articleRepository.editArticle(id, data)
    }
    async likeArticle(id: string, userId: string): Promise<IArticleMOdel | null> {
        return await this.articleRepository.likeArticle(id, userId)
    }
    async dislikeArticle(id: string, userId: string): Promise<IArticleMOdel | null> {
        return await this.articleRepository.dislikeArticle(id, userId)
    }
    async blockArticle(userId: string, articleId: string): Promise<IArticleMOdel | null> {
        return await this.articleRepository.blockArticle(userId, articleId)
    }
    async likedUsers(articleId: string) {
        return await this.articleRepository.likedUsers(articleId)
    }
}
