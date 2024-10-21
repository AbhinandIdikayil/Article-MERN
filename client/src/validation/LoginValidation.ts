import { z } from "zod";

export const LoginValidation = z.object({
    email: z.string().trim().email({ message: 'invalid email' }).optional().or(z.literal("")),
    phone: z.string().optional(),
    password: z.string().trim().min(1, { message: 'Password is required' }) 
}).refine(data => data.email || data.phone,{
    message:'Either email or phone is required',
    path:['email']
}).refine(data => !(data.email && data.phone), {
    message: 'Either email or phone should be provided, not both',
    path: ['email']
});