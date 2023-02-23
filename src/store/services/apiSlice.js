import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.carbucks.app' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({})
});
