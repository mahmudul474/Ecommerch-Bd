import { api } from "../apiSlice";

const categorys=api.injectEndpoints({
    endpoints: (builder) => ({
        GetAllCategory: builder.query({
         query: () =>'/category',
       }),
        GetAllCategoryBySlug: builder.query({
          query: (slug) => `/category?slug=${slug}`
       }),
       GetALLSpacewsie: builder.query({
        query: (tags) => `/category?tags=${tags}`
         
      }),
       GetALLOfficsCategory: builder.query({
       query: (tags) => `/category?tags=${tags}`,
      }),
     }),
})

export const{useGetAllCategoryBySlugQuery,useGetAllCategoryQuery,useGetALLSpacewsieQuery,useGetALLOfficsCategoryQuery} =categorys