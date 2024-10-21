import { api } from "@/constant/axiosInstance"
import { ArticleType } from "@/types"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { handleAsyncThunkError } from "./userAction"



export const CreateArticle = createAsyncThunk(
    'user/creat',
    async (req: ArticleType, { rejectWithValue }) => {
        try {
            const { data } = await api.post('/create', { data: req })
            return data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const ListArticles = createAsyncThunk(
    'user/list-articles',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get('/articles')
            return data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const ArticlesOfOneUser = createAsyncThunk(
    'user/article',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get('/article')
            return data
        } catch (error) {
            const rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)