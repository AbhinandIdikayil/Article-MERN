import { ArticleRepository } from "../repository/article.respository";
import { IArticle } from "../types";
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
            throw ErrorResponse.badRequest('Error while creating article')
        }
    }
}