import { UserRepository } from "../repository/user.repository";
import { UserService } from "../services/user.service";

export class UserFactory {
    static createUserFactory(): UserService {
        const userRepository = new UserRepository()
        const userService = new UserService(userRepository)
        return userService
    }
}