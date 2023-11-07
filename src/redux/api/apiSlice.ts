import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:'https://site-api.trelyt.store/api/v1' }),
    endpoints: (builder) => ({
    }),
  })


