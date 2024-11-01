import { api } from '@/constant/axiosInstance';
import { UserType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios';


interface RejectedError {
    message: string;
    status?: number;
}

export type LoginType = {
    email?: string,
    phone?: string,
    password: string
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
            const { data } = await api.post('/register', { data: req })
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (req: LoginType, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/login', { data: req})
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const getUser = createAsyncThunk(
    'user/get',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get('/user')
            return data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const Logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/logout')
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const updateProfile = createAsyncThunk(
    'user/update-profile',
    async (req:any, { rejectWithValue }) => {
        try {
            const { data } = await api.put('/profile', { data: req })
            return data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)