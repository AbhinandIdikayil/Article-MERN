import { ArticlModel } from "../models/ArticleModel";
import { IArticle } from "../types";



export class ArticleRepository {
    async create(data: IArticle): Promise<IArticle> {
        return await ArticlModel.create(data)
    }
    async findAll(): Promise<IArticle[]> {
        return await ArticlModel.find()
    }
    async deleteOne(id: string): Promise<IArticle | null> {
        let res = await ArticlModel.findByIdAndDelete({ _id: id }, { new: true })
        if (res) {
            return res
        } else {
            return null
        }
    }
}