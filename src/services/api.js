import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiHeaders = {
    "X-RapidAPI-Key": "35299f1bfcmshcf34a3b622d38d1p108441jsnc66a8fc80982",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url, params) => ({
    url,
    params,
    headers: rapidApiHeaders,
});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () =>
                createRequest("/coins", {
                    timePeriod: "24h",
                    "tiers[0]": "1",
                    orderBy: "marketCap",
                    orderDirection: "desc",
                    limit: "50",
                    offset: "0",
                }),
        }),

        getCoins: builder.query({
            query: () =>
                createRequest("/coins", {
                    timePeriod: "24h",
                    "tiers[0]": "1",
                    orderBy: "marketCap",
                    orderDirection: "desc",
                    limit: "50",
                    offset: "0",
                }),
        }),

        getCoinDetail: builder.query({
            query: (coinId) =>
                createRequest(`/coin/${coinId}`, {
                    timePeriod: "24h",
                }),
        }),

        getCoinPriceHistory: builder.query({
            query: (coinId) =>
                createRequest(`/coin/${coinId}/history`, {
                    timePeriod: "24h",
                }),
        }),

        getCoinSupply: builder.query({
            query: (coinId) =>
                createRequest(`/coin/${coinId}/supply`, {
                    limit: "50",
                    offset: "0",
                    orderBy: "24hVolume",
                    orderDirection: "desc",
                }),
        }),

        getGlobalStats: builder.query({
            query: () => createRequest("/stats"),
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;
