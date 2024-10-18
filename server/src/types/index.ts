

export interface IUser {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    DOB: Date,
    password: string,
    preferences: string[];
}

export interface ILogin {
    email?: string,
    phone?: string,
    password: string
}