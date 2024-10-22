import { NextFunction, Request, Response } from "express";
import { UserFactory } from "../factory/user.factory";
import ErrorResponse from "../utils/ApiError";
import { generateToken } from "../utils/generateToken";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
    id: string;
}
export interface ModifiedRequest extends Request {
    user: CustomJwtPayload;
}

export class UserController {
    private userService = UserFactory.createUserFactory()
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body
            console.log(data)
            let user = await this.userService.register(data)
            if (!user) {
                throw ErrorResponse.badRequest('Failed to register')
            }
            console.log(user)
            let token = generateToken({ id: user._id })
            res.status(200)
                .cookie('USER', token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 60 * 60 * 24 * 1000 * 12 }) //! for 12 days
                .json({ success: true, data: user });

        } catch (error) {
            next(error)
        }
    }

    async getUser(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user
            const data = await this.userService.getUser(id)
            res.status(200).json({ success: true, data })
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
            let token = generateToken({ id: user })

            res.status(200)
                .cookie('USER', token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 60 * 60 * 24 * 1000 * 12 }) //! for 12 days
                .json({ success: true, data: user })
        } catch (error) {
            next(error)
        }
    }
    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            res.cookie('USER', '', {
                maxAge: 1,
                httpOnly: true,
                sameSite: 'none', secure: true
            })
            res.status(200).json({ message: "logout successfull", success: true })

        } catch (error) {
            next(error)
        }
    }
    async updateProfile(req: ModifiedRequest, res: Response, next: NextFunction) {
        try {
            const { id } = req.user
            const { data } = req.body
            const result = await this.userService.updateProfile(id,data)
            if(!result){
                throw ErrorResponse.badRequest('Couldnt updted profile')
            }
            res.status(200).json({success:true,data:result,message:'updated successfully'})
        } catch (error) {
            next(error)
        }
    }
}
