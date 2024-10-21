import { IArticleMOdel } from "../models/ArticleModel";
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
            console.log(error)
            throw ErrorResponse.badRequest('Error while creating article')
        }
    }
    async findAll(): Promise<IArticle[]> {
        return await this.articleRepository.findAll()
    }
    async deleteOne(id: string): Promise<IArticle | null> {
        return await this.articleRepository.deleteOne(id)
    }
    async ArticlesOfOneUser(id: string): Promise<IArticle[]> {
        return await this.articleRepository.ArticlesOfOneUser(id)
    }
    async editArticle(id:string,data:IArticle): Promise<IArticle | null> {
        return await this.articleRepository.editArticle(id,data)
    }
    async likeArticle(id:string,userId:string): Promise<IArticleMOdel |null> {
        return await this.articleRepository.likeArticle(id,userId)
    }
    async dislikeArticle(id: string,userId: string): Promise<IArticleMOdel | null>{
        return await this.articleRepository.dislikeArticle(id,userId)
    }
}