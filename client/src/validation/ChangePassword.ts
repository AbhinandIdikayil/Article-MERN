import { z } from "zod";

export const ChangePasswordValidation = z.object({
    password: z.string().trim().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Password confirmation is required' }),
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});