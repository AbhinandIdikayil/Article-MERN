import React from "react";

export type OutletContextType = {
  setCreateArticle: React.Dispatch<React.SetStateAction<boolean>>;// Adjust the type based on the actual function signature
  showArticle: boolean,
  setShowArticle: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserType = {
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  DOB: string,
  password: string,
  preferences: {value:string}[]
}

export type ArticleType = {
  title: string
  content: string
  description: string;
  image: string;
  tags: string[];
  category: string;
}


export type UserSliceType = {
  loggedIn: boolean,
  user: UserType | null,
  articles: ArticleType[]
}