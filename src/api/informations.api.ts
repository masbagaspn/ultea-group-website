import { api } from './index.api'

export const getAllInformations = async (page = 1, pageSize = 3, title?: string, type?: number) => {
  try {
    const response = await api.get('/informations', {
      params: { page, pageSize, title, type },
    })
    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}

export const getInformationBySlug = async (slug: string) => {
  try {
    const response = await api.get(`informations/client/${slug}`)

    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}

export const getAllInformationsByCategories = async (slug: string) => {
  try {
    const response = await api.get(`categories/client/${slug}`)

    if (response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

    return response.data.responseData
  } catch (err: any) {
    throw new Error(err.response.data.responseMessage)
  }
}
