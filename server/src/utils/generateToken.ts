import jwt from 'jsonwebtoken'

export const generateToken = ({id}:{id:string}) => {
    return jwt.sign({id},'TOKEN',{ expiresIn: '12d' })
}