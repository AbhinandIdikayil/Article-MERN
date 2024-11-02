import {  z } from "zod";
import { differenceInYears, parseISO } from "date-fns";

export const RegisterationVaidation = z.object({
    firstname: z.string().trim().min(1, { message: 'firstname is required' }),
    lastname: z.string().trim().min(1, { message: 'lastname is required' }),
    email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
    phone: z.string().trim().min(1, { message: 'Phone is required' }),
    DOB: z.string().refine((dateStr) => {
        const dob = parseISO(dateStr);
        const age = differenceInYears(new Date(), dob);
        return age > 10;
    }, {
        message: "Age must be greater than 10 years",
    }),
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string().min(1, { message: 'Password confirmation is required' }),
    preferences: z.array(z.object({
        value: z.string()
    })).min(1, { message: 'Atleast one is required' })
}).refine(data => data.DOB, {
    message: 'DOB is required',
    path: ['DOB']
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});

export const editProfileValidation = z.object({
    firstname: z.string().trim().min(1, { message: 'firstname is required' }),
    lastname: z.string().trim().min(1, { message: 'lastname is required' }),
    email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
    phone: z.string().trim().min(1, { message: 'Phone is required' }),
    DOB: z.string(),
    preferences: z.array(z.object({
        value: z.string()
    })).min(1, { message: 'Atleast one is required' })
})