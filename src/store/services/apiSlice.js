import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.carbucks.app' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (payload) => ({
                url: '/api/v1/auth/email/register',
                method: 'POST',
                body: payload
            })
        })
    })
});

export const { useRegisterUserMutation } = apiSlice;
