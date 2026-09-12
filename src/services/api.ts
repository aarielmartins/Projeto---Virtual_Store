import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Product from '../models/Product'

type ProductOrder = {
  id: string
  price: number
}

type PurchasePayload = {
  products: ProductOrder[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
    address: string
    number: string
    city: string
    state: string
    zipCode: number
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureProductsQuery,
  useGetProductQuery,
  useGetProductsByCollectionQuery,
  usePurchaseMutation
} = api
export default api
