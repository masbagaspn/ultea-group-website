import { api } from "./index.api"

export const getAllInformations = async (page=1, pageSize=3, title?: string) => {
    try{
        const response = await api.get('/informations', {
            params: { page, pageSize, title}
        })
    
        if(response.data.responseCode !== '0200') throw new Error(response.data.responseMessage)
    
        return response.data.responseData
    } catch(err: any) {
        throw new Error(err.response.data.responseMessage)
    }
}