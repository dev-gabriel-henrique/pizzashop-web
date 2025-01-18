import { api } from '@/lib/axios'

export type GetPropularProductsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPropularProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
