export type ProductLinks = {
    tokopedia: string
    shopee: string
}

export type Product = {
    id: string
    name: string
    imageUrl: string
    description: string
    price: number
    contents: string
    benefits: string[],
    rules: string[],
    links: ProductLinks,
    status: boolean
}