 import { axiosBaseQuery } from '@/helperConfige/axios/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
 
export const user = createApi({
  reducerPath: 'user',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({}),
  tagTypes:["user"]
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
 