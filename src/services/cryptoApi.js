import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '961167a451msh8afa8d55046ffa0p1cee47jsne8ccfb801fe4'
}

const baseURL = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => {
    return {url, headers: apiHeaders }
}

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(baseURL + '/coins')
        }),
        getDetails: builder.query({
            query: (coinId) => createRequest(baseURL + '/coin/' + coinId)
        })
    }) 
})

export const {
    useGetCryptosQuery,
    useGetDetailsQuery
} = cryptoApi