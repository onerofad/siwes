import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import { ItemContent } from "semantic-ui-react";

export const apiSlice = createApi({

    reducerPath: 'api',

    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),

    endpoints: builder => ({
        getStudents: builder.query({
            query: () => '/students'
        }),
        addSiwes: builder.mutation({
            query: initialPost => ({
                url: 'studentviews/',
                method: 'POST',
                body: initialPost
            })
        }),
        getSiwes: builder.query({
            query: () => '/studentviews'
        }),

        getlocations: builder.query({
            query: () => '/locations'
        }),

        addPayment: builder.mutation({
            query: initialPost => ({
                url: 'payments/',
                method: 'POST',
                body: initialPost
            })
        }),

        getPayment: builder.query({
            query: () => '/payments',
        }),

    })

})

export const { useGetStudentsQuery, useAddSiwesMutation, useGetlocationsQuery, useAddPaymentMutation, useGetSiwesQuery, useGetPaymentQuery} = apiSlice

