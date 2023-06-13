import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tweetsApi = createApi({
  reducerPath: "tweetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64836088f2e76ae1b95c648e.mockapi.io/tweets",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: (page = 1) => `/users?page=${page}&limit=3`,

      providesTags: ["users"],
    }),

    updateUser: builder.mutation({
      query: ({ id, followers }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: followers,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = tweetsApi;
