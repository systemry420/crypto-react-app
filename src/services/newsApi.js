import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseURL = 'https://bing-news-search1.p.rapidapi.com'

const headers = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '961167a451msh8afa8d55046ffa0p1cee47jsne8ccfb801fe4'
}

const createRequest = (url) => {
    return {url, headers }
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ category, count }) => createRequest(baseURL + `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const  {
    useGetNewsQuery
} = newsApi
