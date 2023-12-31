import { baseApi } from "../baseApiSlice";

export const productapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLatestProduct: builder.query({
      query: (tagname) => `/products?tags=${tagname}`,
    }),
    getProductBycategoryName: builder.query({
      query: (category): any => `/products?category=${category}`,
    }),
    getSingelProduct: builder.query({
      query: (slug): any => `/products/${slug}`,
    }),

    getSearchProducts: builder.query({
      query: (name): any => `/products?search=${name}`,
    })
  }),
});

export const {
  useGetSingelProductQuery,
  useGetLatestProductQuery,
  useGetProductBycategoryNameQuery,
  useGetSearchProductsQuery
} = productapi;
