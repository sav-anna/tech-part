import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64836088f2e76ae1b95c648e.mockapi.io/api/v1",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: (page = 1) => `/users?page=${page}&limit=3`,
      providesTags: ["users"],
    }),

    updateUsers: builder.mutation({
      query: (id, status, newFollowers) => ({
        url: `/users/:${id}`,
        method: "PUT",
        body: {
          id,
          followers: newFollowers,
          following: status,
        },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUsersMutation } = usersApi;
