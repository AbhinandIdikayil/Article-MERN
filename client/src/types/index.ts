import React from "react";

export type OutletContextType = {
  setCreateArticle: React.Dispatch<React.SetStateAction<boolean>>;// Adjust the type based on the actual function signature
  showArticle: boolean,
  setShowArticle: React.Dispatch<React.SetStateAction<boolean>>
  setEditArticle: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserType = {
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  DOB: string,
  password: string,
  preferences: { value: string }[]
}

export type ArticleType = {
  _id: string
  title: string
  content: string
  description: string;
  image: string;
  tags: string;
  category: string;
  likes: string[]
  dislikes: string[]
}


export type UserSliceType = {
  loggedIn: boolean,
  user: UserType | null,
  articles: {
    articles: ArticleType[]
    totalCount: [{count:number}]
  },
  myArticles: ArticleType[],
  article: ArticleType | null,
  loading:boolean
}


export type options = {
  page: number,
  pageSize: number,
}