import { createApi, fetchBaseQuery } from '@reduxjs/toolkit'

const apiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '961167a451msh8afa8d55046ffa0p1cee47jsne8ccfb801fe4'
}

const baseURL = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({url, headers: apiHeaders })

const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    }) 
})
