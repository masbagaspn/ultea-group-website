import { api } from './index.api'

export const getAllBanners = async (page?: number, pageSize = 10, title?: string) => {
  try {
    const response = await api.get('/banners', {
      params: { page, pageSize, title, status: true },
    })

    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}
