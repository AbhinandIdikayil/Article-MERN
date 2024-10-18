import { UserModel } from "../models/UserModel";
import { IUser } from "../types";

export class UserRepository {
    async create(data: IUser) {
        return await UserModel.create(data)
    }
    async findByEmail(email: string) {
        return await UserModel.findOne({ email })
    }
    async findByPhone(phone: string) {
        return await UserModel.findOne({ phone })
    }
}