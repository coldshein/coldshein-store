import {createApi, fetchBaseQuery, QueryDefinition } from '@reduxjs/toolkit/query/react'

interface IStoreItems  {
        id: number;
        title: string;
        sex: string;
        price: string;
        brand: string;
        size: string[];
        imageUrl: string[];
        link: string;
        type: string;
        category: string;
      
}

const API_URL = 'https://650464d5c8869921ae24f99f.mockapi.io/items'

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getAllStoreItems: builder.query<IStoreItems[], void>({
            query: () => '/'
        }),
    }),
})


export const { useGetAllStoreItemsQuery } = storeApi;

