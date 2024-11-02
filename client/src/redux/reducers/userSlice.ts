import { UserSliceType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser, Logout, Register, updateProfile } from "../action/userAction";
import { ArticlesOfOneUser, blockArticle, CreateArticle, deleteArticle, editArticle, likeArticle, ListArticles } from "../action/articleAction";


const initialState: UserSliceType = {
    loggedIn: false,
    articles: { articles: [], totalCount: [{ count: 0 }] },
    user: null,
    myArticles: [],
    article: null,
    loading: false,
    page: 1,
    pageSize: 3,
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setArticleById(state, action: PayloadAction<string>) {
            const id = action.payload
            const foundedArticle: any = state.articles.articles?.find((article) => article._id == id)
            state.article = foundedArticle
        },
        updatePage(state, { payload }: { payload: number }) {
            state.page = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Register.pending, (state) => {
            state.loggedIn = false
            state.articles.articles = []
            state.user = null
        })
        builder.addCase(Register.fulfilled, (state, { payload }) => {
            state.loggedIn = true
            state.articles.articles = []
            state.user = payload
        })
        builder.addCase(Register.rejected, (state) => {
            state.loggedIn = false
            state.articles.articles = []
            state.user = null
        })
        builder.addCase(Logout.pending, (state) => {
            state.loggedIn = true
        })
        builder.addCase(Logout.fulfilled, (state) => {
            state.loggedIn = false
            state.articles.articles = []
            state.user = null
        })
        builder.addCase(Logout.rejected, (state) => {
            state.loggedIn = true
        })
        builder.addCase(CreateArticle.pending, () => {

        })
        builder.addCase(CreateArticle.fulfilled, (state, { payload }) => {
            state.articles.articles = [...state.articles.articles, payload.data]
        })
        builder.addCase(CreateArticle.rejected, () => {

        })
        builder.addCase(ListArticles.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ListArticles.fulfilled, (state, { payload }) => {
            state.loading = false
            state.articles = payload
        })
        builder.addCase(ListArticles.rejected, (state) => {
            state.loading = false
            state.articles.articles = []
        })
        builder.addCase(getUser.pending, (state) => {
            state.user = null
        })
        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            state.user = payload.data
        })
        builder.addCase(getUser.rejected, (state) => {
            state.user = null
        })
        builder.addCase(ArticlesOfOneUser.pending, (state) => {
            state.myArticles = []
        })
        builder.addCase(ArticlesOfOneUser.fulfilled, (state, { payload }) => {
            state.myArticles = payload.data
        })
        builder.addCase(ArticlesOfOneUser.rejected, (state) => {
            state.myArticles = []
        })
        builder.addCase(editArticle.pending, (state) => {
            state.article = null
        })
        builder.addCase(editArticle.fulfilled, (state, { payload }) => {
            state.article = payload.data
            state.myArticles = state.myArticles.map(data => data._id == payload.data._id ? payload.data : data)
        })
        builder.addCase(editArticle.rejected, (state) => {
            state.article = null
        })
        builder.addCase(likeArticle.pending, () => {
        })
        builder.addCase(likeArticle.fulfilled, (state, { payload }) => {
            state.article = payload.data
        })
        builder.addCase(likeArticle.rejected, () => {
        })
        builder.addCase(updateProfile.pending, (state) => {
            state.user = state.user
        })
        builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
            state.user = payload.data
        })
        builder.addCase(updateProfile.rejected, (state) => {
            state.user = state.user
        })
        builder.addCase(blockArticle.pending, (state) => {
            state.articles = state.articles
        })
        builder.addCase(blockArticle.fulfilled, (state, { payload }) => {
            state.articles.articles = state.articles.articles?.filter(data => data._id == payload.data._id ? null : data)
        })
        builder.addCase(blockArticle.rejected, () => {
        })
        builder.addCase(deleteArticle.pending, (state) => {
            state.myArticles = state.myArticles
        })
        builder.addCase(deleteArticle.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.myArticles = state.myArticles?.filter(data => data._id == payload.data._id ? null : data)
        })
        builder.addCase(deleteArticle.rejected, (state) => {
            state.myArticles = []
        })
    },
})
export const { setArticleById, updatePage } = UserSlice.actions
export default UserSlice.reducer