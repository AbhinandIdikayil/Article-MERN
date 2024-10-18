import { UserRepository } from "../repository/user.repository";
import { ILogin, IUser } from "../types";
import ErrorResponse from "../utils/ApiError";

export class UserService {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }
    async register(data: IUser): Promise<IUser> {
        return this.userRepository.create(data)
    }
    async login(data: ILogin): Promise<boolean> {
        let user
        if (data?.email) {
            user = await this.userRepository.findByEmail(data.email)
        } else if (data?.phone) {
            user = await this.userRepository.findByPhone(data.phone)
        }
        if(!user){
            throw ErrorResponse.badRequest('No user found')
        }
        return await user.comparePassword(data.password)
    }
}