import { api } from "../apiSlice";

export const products = api.injectEndpoints({
  endpoints: (builder) => ({
    GetLatestProuct: builder.query({
      query: (tags) => `/products?tags=${tags}`,
    }),
    GetAllProudctCategoryName: builder.query({
      query: (name) => `/products?category=${name}`,
    }),

    getFilteredAndSortedProducts: builder.query({
      query: ({ sortBy }) => {
        return `/products?sortBy=${sortBy}`;
      },
    }),
    getFilteredByPriceProducts: builder.query({
      query: ({ minPrice, maxPrice }) => {    
        return `products?min_price=${minPrice}&max_price=${maxPrice}`;
      },
    }),
    
    getFilteredByPriceAndSortedProducts: builder.query({
      query: ({ minPrice, maxPrice, sortBy }) => {
        return `/products?min_price=${minPrice}&max_price=${maxPrice}&sortBy=${sortBy}`;
      },
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
  useGetFilteredAndSortedProductsQuery,
  useGetFilteredByPriceProductsQuery,
  useGetFilteredByPriceAndSortedProductsQuery
} = products;
