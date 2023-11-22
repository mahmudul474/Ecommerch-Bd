import { axiosBaseQuery } from '@/helperConfige/axios/axiosBaseQuery'
import { getBaseUrl } from '@/helperConfige/envConfige'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({}),
    tagTypes:["user"]
  })







   
  