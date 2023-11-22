import { baseApi } from "../baseApiSlice";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getallCategory: builder.query({
      query: () => `/category?grouped=true`,
    }),
    getSpaceCategory: builder.query({
      query: (tagname) => `/category?tags=${tagname}&grouped=true`,
    }),
    getAllOficeCategory: builder.query({
      query: () => `/category?tags=office`,
    }),
    getCategoryBySlugName: builder.query({
      query: (slug) => `/category/${slug}?children=true`,
    }),
  }),
});

export const { useGetallCategoryQuery, useGetSpaceCategoryQuery, useGetAllOficeCategoryQuery, useGetCategoryBySlugNameQuery} = categoryApi;
