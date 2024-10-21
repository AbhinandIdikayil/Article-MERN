import { NextFunction, Response, Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ArticleController } from "../controllers/article.controller";
import { ModifiedRequest, verify } from "../middlewares/verify.middleware";
import { ArticleRepository } from "../repository/article.respository";
const userController = new UserController()
const articleController = new ArticleController()



export const router: Router = Router()
router.route('/register')
    .post(userController.register.bind(userController))
router.route('/login').post(userController.login.bind(userController))
router.route('/logout').post(userController.logout.bind(userController))
router.route('/create').post(
    verify,
    (req, res, next) => articleController.createArticle(req as ModifiedRequest, res, next)
)
router.route('/user').get(verify,
    (req, res, next) => userController.getUser(req as ModifiedRequest, res, next))
router.route('/article').get(verify, (req, res, next) => articleController.ArticlesOfOneUser(req as ModifiedRequest, res, next))
router.route('/articles').get(verify, articleController.list.bind(articleController))
router.route('/article/:id')
    .delete(verify, articleController.deleteArticle.bind(articleController))
    .put(verify,articleController.editArticle.bind(articleController))
router.route('/like/:id').post(verify,(req,res,next) => articleController.likeArticle(req as unknown as ModifiedRequest, res,next))
router.route('/dislike/:id').post(verify,(req,res,next) => articleController.dislikeArticle(req as unknown as ModifiedRequest, res,next))
