import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utils/ApiError";
import jwt, { JwtPayload } from 'jsonwebtoken'

interface CustomJwtPayload extends JwtPayload {
    id: string
}
export interface ModifiedRequest extends Request {
    user:CustomJwtPayload
}


export const verify = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.USER;
        console.log(req.cookies)
        if (!token) {
            throw ErrorResponse.unauthorized('No token provided');
        }
        const decoded = jwt.verify(token, 'TOKEN') as CustomJwtPayload;
        console.log(decoded)
        const { id } = decoded;

        (req as ModifiedRequest).user = { id };
        next(); 
    } catch (error) {
        throw ErrorResponse.unauthorized('Unauthorized')
    }
};