import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoAPIHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8503eb40dfmsh99d8f217e0402a0p105067jsna7b9a3f2df5d'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
    url, 
    headers: cryptoAPIHeaders
})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl : baseURL }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchnages: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`coin/${coinId}/history/${timeperiod}`)
        }),
    }),
});



export const {
    useGetCryptosQuery,
    useGetExchnagesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoAPI;