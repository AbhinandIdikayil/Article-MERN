import { NextFunction, Response, Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ArticleController } from "../controllers/article.controller";
import { ModifiedRequest, verify } from "../middlewares/verify.middleware";
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