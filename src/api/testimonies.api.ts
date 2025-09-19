import { api } from './index.api'

export const getAllTestimonies = async () => {
  try {
    const response = await api.get('/testimonies', {
      params: { page: 1, pageSize: 5, status: true },
    })

    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}
