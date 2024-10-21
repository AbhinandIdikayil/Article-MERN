import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utils/ApiError";
import jwt, { JwtPayload } from 'jsonwebtoken'

interface CustomJwtPayload extends JwtPayload {
    _id: string
}
export interface ModifiedRequest extends Request {
    user:CustomJwtPayload
}


export const verify = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.USER;
        if (!token) {
            throw ErrorResponse.unauthorized('No token provided');
        }
        const decoded = jwt.verify(token, 'TOKEN') as CustomJwtPayload;
        const { _id, email } = decoded;

        (req as ModifiedRequest).user = { _id, email };
        next(); 
    } catch (error) {
        throw ErrorResponse.unauthorized('Unauthorized')
    }
};