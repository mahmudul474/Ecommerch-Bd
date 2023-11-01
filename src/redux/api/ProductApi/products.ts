import { api } from "../apiSlice";

export const products = api.injectEndpoints({
  endpoints: (builder) => ({
    GetLatestProuct: builder.query({
      query: (tags) => `/products?tags=${tags}`,
    }),
    GetAllProudctCategoryName: builder.query({
      query: (name) => `/products?category=${name}`,
    }),

    GetAllproductByCategoryTag: builder.query({
      query: (tags) => `/products?tags=${tags}`,
    }),
  }),
});

export const {
  useGetAllProudctCategoryNameQuery,
  useGetLatestProuctQuery,
  useGetAllproductByCategoryTagQuery,
} = products;
