import { ArticlModel } from "../models/ArticleModel";
import { IArticle } from "../types";



export class ArticleRepository {
    async create(data:IArticle): Promise<IArticle> {
        return await ArticlModel.create(data)
    }
}