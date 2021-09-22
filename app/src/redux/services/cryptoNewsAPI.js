import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoAPIHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8503eb40dfmsh99d8f217e0402a0p105067jsna7b9a3f2df5d'
}

const baseURL = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({
    url, 
    headers: cryptoAPIHeaders
})

export const cryptoNewsAPI = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl : baseURL }),
    endpoints : (builder) => ({
        getNews : builder.query({
            query : ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    }),
});



export const {
    useGetNewsQuery
} = cryptoNewsAPI;