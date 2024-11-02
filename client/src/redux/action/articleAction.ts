import { api } from "@/constant/axiosInstance"
import { ArticleType, options } from "@/types"
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
    async (option:options, { rejectWithValue }) => {
        try {
            const { data } = await api.get('/articles',{
                params:{
                    page:option.page,
                    pageSize:option.pageSize,
                    category:option.category
                }
            })
            return data.data
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

type editType = {
    data: {
        title: string
        content: string
        description: string;
        image: string;
        tags: string;
        category: string;
    },
    articleId: string
}

export const deleteArticle = createAsyncThunk(
    'article/delete',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await api.delete(`/article/${req}`)
            return data
        } catch (error) {
            let rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const editArticle = createAsyncThunk(
    'article/edit',
    async (req: editType, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/article/${req.articleId}`, { data: req.data })
            return data
        } catch (error) {
            let rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const likeArticle = createAsyncThunk(
    'article/like',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await api.post(`/like/${req}`)
            return data
        } catch (error) {
            let rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const dislikeArticle = createAsyncThunk(
    'article/like',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await api.post(`/dislike/${req}`)
            return data
        } catch (error) {
            let rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)

export const blockArticle = createAsyncThunk(
    'article/block',
    async (req: string, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/block/${req}`)
            return data
        } catch (error) {
            let rejected = handleAsyncThunkError(error)
            return rejectWithValue(rejected)
        }
    }
)