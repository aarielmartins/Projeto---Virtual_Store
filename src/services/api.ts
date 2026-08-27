import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from '../models/Product'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://projeto-virtual-store-api.onrender.com'
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<Product, string>({
      query: (id) => `/products/${id}`
    }),
    getFeatureProducts: builder.query<Product[], void>({
      query: () => '/products'
    }),
    getProductsByCollection: builder.query<Product[], string>({
      query: (colecao) => `/products?colecao=${colecao}`
    })
  })
})

export const {
  useGetFeatureProductsQuery,
  useGetProductQuery,
  useGetProductsByCollectionQuery
} = api
export default api
