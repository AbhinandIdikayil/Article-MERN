import { z } from "zod";


export const RegisterationVaidation = z.object({
    firstname: z.string().trim().min(1, { message: 'firstname is required' }),
    lastname: z.string().trim().min(1, { message: 'lastname is required' }),
    email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
    phone: z.string().trim().min(1, { message: 'Phone is required' }),
    DOB: z.string(),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Password confirmation is required' }),
    preferences: z.array(z.object({
        value:z.string()
    })).min(1, { message: 'Atleast one is required' })
}).refine(data => data.DOB, {
    message: 'DOB is required',
    path: ['DOB']
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});