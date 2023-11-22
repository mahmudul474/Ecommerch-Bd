import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 

export const    baseApi= createApi({
  reducerPath: 'baseApi ',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://site-api.trelyt.store/api/v1/' }),
  endpoints: (builder) => ({
    getPokemonByNames: builder.query({
      query: () => `category?grouped=true`,
    }),
  }),
})


 export  const {useGetPokemonByNamesQuery}=baseApi