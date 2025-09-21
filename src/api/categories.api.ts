import { api } from './index.api'

export async function getAllCategoriesWithPostCount() {
  try {
    const response = await api.get('/categories/client')
    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}
