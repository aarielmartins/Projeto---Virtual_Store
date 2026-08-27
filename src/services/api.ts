import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from '../models/Product'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://projeto-virtual-store-api.onrender.com'
  }),
  endpoints: (builder) => ({
    getFeatureGames: builder.query<Product, void>({
      query: () => '/products'
    })
  })
})

export const { useGetFeatureGamesQuery } = api
export default api
