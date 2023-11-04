import { api } from "../apiSlice";

export const products = api.injectEndpoints({
  endpoints: (builder) => ({

    ///latest  product for home
    GetLatestProuct: builder.query({
      query: (tags) => `/products?tags=${tags}`,
    }),


    ///get all products by category name
    GetAllProudctCategoryName: builder.query({
      query: (name) => `/products?category=${name}`,
    }),
//filltaring start here 
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


    //singel product get 
    GetAllproductBySlugName: builder.query({
      query: (slug) => `/products/${slug}`,
    }),
  }),
});

export const {
  useGetAllProudctCategoryNameQuery,
  useGetLatestProuctQuery,
  useGetAllproductByCategoryTagQuery,
  useGetFilteredAndSortedProductsQuery,
  useGetFilteredByPriceProductsQuery,
  useGetFilteredByPriceAndSortedProductsQuery,
  useGetAllproductBySlugNameQuery
} = products;
