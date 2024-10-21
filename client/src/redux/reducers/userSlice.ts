import { UserSliceType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { Logout, Register } from "../action/userAction";
import { CreateArticle } from "../action/articleAction";


const initialState: UserSliceType = {
    loggedIn: false,
    articles: [],
    user: null
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Register.pending, (state) => {
            state.loggedIn = false
            state.articles = []
            state.user = null
        })
        builder.addCase(Register.fulfilled, (state,{payload}) => {
            state.loggedIn = true
            state.articles = []
            state.user = payload
        })
        builder.addCase(Register.rejected, (state) => {
            state.loggedIn = false
            state.articles = []
            state.user = null
        })
        builder.addCase(Logout.pending, (state) => {
            state.loggedIn = true
        })
        builder.addCase(Logout.fulfilled, (state) => {
            state.loggedIn = false
            state.articles = []
            state.user = null
        })
        builder.addCase(Logout.rejected, (state) => {
            state.loggedIn = true
        })
        builder.addCase(CreateArticle.pending,() => {
            
        })
        builder.addCase(CreateArticle.fulfilled,(state,{payload}) => {
           state.articles = [...state.articles,payload.data]
        })
        builder.addCase(CreateArticle.rejected,() => {
            
        })
    },
})

export default UserSlice.reducer