import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://6490219b1e6aa71680caaadd.mockapi.io/';

export const phoneBooksApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes:['Contacts'],

    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => ({ url: 'contacts' }),
            providesTags:['Contacts']
        }),
        deleteContacts: builder.mutation({
            query: (id) => ({ url: `contacts/${id}`, method: 'DELETE' }),
            invalidatesTags:['Contacts'],
        }),
        createContacts: builder.mutation({
            query: (data) => ({ url: `contacts`, method: 'POST', body: data }),
            invalidatesTags:['Contacts'],
        }),
    }),
})

export const { useGetContactsQuery, useDeleteContactsMutation, useCreateContactsMutation } = phoneBooksApi