import { NextFunction, Request, Response } from "express";
import { UserFactory } from "../factory/user.factory";
import ErrorResponse from "../utils/ApiError";


export class UserController {
    private userService = UserFactory.createUserFactory()
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body
            let user = await this.userService.register(data)
            if (!user) {
                throw ErrorResponse.badRequest('Failed to register')
            }
            res.status(200).json({ success: true, data: user })

        } catch (error) {
            next(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body
            let user = await this.userService.login(data)
            if (!user) {
                throw ErrorResponse.badRequest('Password is incorrect')
            }
            res.status(200).json({ success: true, data: user })
        } catch (error) {
            next(error)
        }
    }
}