import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ArticleController } from "../controllers/article.controller";
const userController = new UserController()
const articleController = new ArticleController()
import GridFsStorage from 'multer-gridfs-storage'
import multer from 'multer'
import { MONGO_URI } from "../config/env";

const storage = new GridFsStorage({
    url: MONGO_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: "newBucket"
            };
            resolve(fileInfo);
        });
    }
});

export const upload = multer({
    storage
});


export const router:Router = Router()
router.route('/register').post(userController.register.bind(userController))
router.route('/login').post(userController.login.bind(userController))
router.route('/create').post(upload.single('image'),articleController.createArticle.bind(articleController))