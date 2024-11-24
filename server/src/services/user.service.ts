import { IUserRepo } from "../interfaces/repo/IUserRepo";
import { ILogin, IUser } from "../types";
import ErrorResponse from "../utils/ApiError";

export class UserService {
    private userRepository: IUserRepo
    constructor(userRepository: IUserRepo) {
        this.userRepository = userRepository
    }
    async register(data: IUser): Promise<IUser> {
        let existing = await this.userRepository.findByEmail(data.email)
        if (existing) {
            throw ErrorResponse.badRequest('Email already exist')
        }
        return this.userRepository.create(data)
    }
    async login(data: ILogin): Promise<string | null> {
        let user
        if (data?.email) {
            user = await this.userRepository.findByEmail(data.email)
        } else if (data?.phone) {
            user = await this.userRepository.findByPhone(data.phone)
        }
        console.log(user)
        if (!user) {
            throw ErrorResponse.badRequest('No user found')
        }
        let res = await user.comparePassword(data.password)
        if (res) {
            return user._id
        } else {
            return null
        }
    }
    async getUser(id: string): Promise<IUser | null> {
        return await this.userRepository.getUser(id)
    }
    async updateProfile(id: string, data: IUser): Promise<IUser | null> {
        return await this.userRepository.updateProfile(id,data)
    }
}