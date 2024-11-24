import { IUserDocument } from "../../models/UserModel";
import { IUser } from "../../types";

export interface IUserRepo {
    create(data:IUser): Promise<IUser>
    findByEmail(email: string): Promise<IUserDocument>
    findByPhone(phone: string): Promise<IUserDocument>
    getUser(_id: string): Promise<IUser | null>;
    updateProfile(_id: string, data:IUser): Promise<IUser | null>
}