import { api } from "@/redux/api/apiSlice";
 

const AUTH_URL = "/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData):any => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags:["user"]
    }),
    userRegistetions: build.mutation({
      query: (loginData):any => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags:["user"]
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation, useUserRegistetionsMutation } = authApi;
