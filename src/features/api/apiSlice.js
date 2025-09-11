import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";
import { ItemContent } from "semantic-ui-react";

export const apiSlice = createApi({

    reducerPath: 'api',

    baseQuery: fetchBaseQuery({baseUrl: 'https://siwes-db.vercel.app/api/'}),

    endpoints: builder => ({
        addStudents: builder.mutation({
            query: initialPost => ({
                url: 'students/',
                method: 'POST',
                body: initialPost
            })
        }),
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
        addLocations: builder.mutation({
            query: initialPost => ({
                url: 'locations/',
                method: 'POST',
                body: initialPost
            })
        }),
        getlocations: builder.query({
            query: () => '/locations'
        }),
        deleteLocations: builder.mutation({
            query: (id) => ({
                url: `/locations/${id}`,
                method: 'DELETE'
            })
        }),
        editLocations: builder.mutation({
            query: item => ({
                url: `/locations/${item.id}/`,
                method: 'PATCH',
                body: item
            })
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

        uploadFiles: builder.mutation({
            query: initialPost => ({
                url: 'faculties/',
                method: 'POST',
                body: initialPost
            })
        }),
        getFaculties: builder.query({
            query: () => '/faculties',
        }),
        getDepartments: builder.query({
            query: () => '/departments',
        }),
        deleteFaculty: builder.mutation({
            query: (id) => ({
                url: `/faculties/${id}`,
                method: 'DELETE'
            })
        }),
        deleteDepartment: builder.mutation({
            query: (id) => ({
                url: `/departments/${id}`,
                method: 'DELETE'
            })
        }),
        getDisciplines: builder.query({
            query: () => '/disciplines',
        }),
        deleteDisciplines: builder.mutation({
            query: (id) => ({
                url: `/disciplines/${id}`,
                method: 'DELETE'
            })
        }),

    })

})

export const { useGetStudentsQuery, useAddSiwesMutation, useGetlocationsQuery, useAddPaymentMutation, useGetSiwesQuery, useGetPaymentQuery, useAddStudentsMutation, useAddLocationsMutation, useDeleteLocationsMutation, useEditLocationsMutation, useUploadFilesMutation, useGetFacultiesQuery, useDeleteFacultyMutation, useGetDepartmentsQuery, useDeleteDepartmentMutation, useGetDisciplinesQuery, useDeleteDisciplinesMutation} = apiSlice

