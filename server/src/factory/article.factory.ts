import { ArticleRepository } from "../repository/article.respository";
import { ArticleService } from "../services/article.service";


export class ArticleFactory {
    static CreateArticleFactory(): ArticleService {
        const articleRepository = new ArticleRepository()
        const articleService = new ArticleService(articleRepository)
        return articleService
    }
}