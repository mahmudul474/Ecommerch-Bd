import { api } from "@/redux/api/apiSlice";
 

const AUTH_URL = "/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData): any => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    userRegistetions: build.mutation({
      query: (loginData): any => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    forgatePassword: build.mutation({
      query: (email): any => ({
        url: `${AUTH_URL}/forget-password`,
        method: "POST",
        data: email,
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation, useUserRegistetionsMutation, useForgatePasswordMutation } = authApi;
