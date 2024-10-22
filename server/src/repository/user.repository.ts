import { UserModel } from "../models/UserModel";
import { IUser } from "../types";

export class UserRepository {
    async create(data: IUser) {
        return await UserModel.create(data)
    }
    async findByEmail(email: string) {
        return await UserModel.findOne({ email }).select('-password')
    }
    async findByPhone(phone: string) {
        return await UserModel.findOne({ phone }).select('-password')
    }
    async getUser(_id: string): Promise<IUser | null> {
        return await UserModel.findOne({ _id }).select('-password')
    }
    async updateProfile(_id: string, data: IUser): Promise<IUser | null> {
        return await UserModel.findOneAndUpdate(
            { _id },
            {
                $set: { ...data }
            },
            { new: true }
        ).select('-password')
    }
}