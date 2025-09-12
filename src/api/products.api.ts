import { api } from "./index.api"

export const getAllProducts = async (page?: number, pageSize = 10, title?: string) => {
    try{
        const response = await api.get('/products', {
            params: { page, pageSize, title}
        })
    
        if(response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)
    
        return response.data.responseData
    } catch(err: any) {
        throw new Error(err.response.data.responseMessage)
    }
}

export const getProductById = async (id:string) => {
    try {
        const response = await api.get(`/products/${id}`)

        if(response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)

        return response.data.responseData
    } catch(err: any){
        throw new Error(err.response.data.responseMessage)
    }
}