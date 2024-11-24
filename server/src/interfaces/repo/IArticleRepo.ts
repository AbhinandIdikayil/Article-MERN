import { IArticleMOdel } from "../../models/ArticleModel";
import { filterPagination, IArticle } from "../../types";

export interface IArticleRepo {
    create(data: IArticle): Promise<IArticle>;
    findAll(option: filterPagination): Promise<IArticle[]>
    deleteOne(id: string): Promise<IArticle | null>
    ArticlesOfOneUser(id: string): Promise<IArticle[]>;
    editArticle(id: string, data: IArticle): Promise<IArticle | null>
    findOne(id: string): Promise<IArticleMOdel | null>
    likeArticle(id: string, userid: string): Promise<IArticleMOdel | null>;
    dislikeArticle(id: string, userId: string): Promise<IArticleMOdel | null>
    blockArticle(userid: string, articleid: string): Promise<IArticleMOdel | null>
    likedUsers(articleId: string): Promise<any>
}