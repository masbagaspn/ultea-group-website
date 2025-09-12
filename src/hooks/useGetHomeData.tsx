import { getAllBanners } from "@api/banners.api"
import { getAllInformations } from "@api/informations.api"
import { getAllProducts } from "@api/products.api"
import { getAllTestimonies } from "@api/testimonies.api"

export const useGetHomeData = async () => {
    const banners = await getAllBanners()
    const products = await getAllProducts()
    const testimonies = await getAllTestimonies()
    const informations = await getAllInformations(1, 3)

    const data = {
        banners,
        products,
        testimonies,
        informations
    }

    return data
}