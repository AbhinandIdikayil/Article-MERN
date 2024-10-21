import { api } from '@/constant/axiosInstance';
import { UserType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios';


interface RejectedError {
    message: string;
    status?: number;
}

type LoginType = {
    email?: string,
    phone?: string,
    passowrd: string
}


export const handleAsyncThunkError = (error: any): RejectedError => {
    if (error instanceof AxiosError) {
        // Check for token-related issues
        if (error.response?.status === 401 || error.response?.status === 403) {
            return { message: 'Session expired. Please log in again.', status: error.response.status };
        }
    }
    // Return a generic error message for any other error
    return { message: 'Something went wrong. Try again later.', status: error?.response?.status };
};


export const Register = createAsyncThunk(
    'user/login',
    async (req: UserType, { rejectWithValue }) => {
        try {
            console.log(process.env.SERVER)

            const { data } = await api.post('/register', { data: req })
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const Login = createAsyncThunk(
    'user/login',
    async (req: LoginType, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/login', { data: req })
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const Logout = createAsyncThunk(
    'user/logout',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await api.post('/logout')
            return data
        } catch (error) {
            return rejectWithValue(error)  
        }   
    }
)
