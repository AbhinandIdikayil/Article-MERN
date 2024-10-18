import { Router } from "express";
import { UserController } from "../controllers/user.controller";
const userController = new UserController()


export const router:Router = Router()
router.route('/register').post(userController.register.bind(userController))
router.route('/login').post(userController.login.bind(userController))