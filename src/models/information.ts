export type Category = {
  id: string
  name: string
  slug: string
}

export type Information = {
  id: string
  slug: string
  title: string
  contents: string
  categories: Category[] | string
  type: number
  author: string
  thumbnailUrl: string
  status: boolean
  createdAt: string
  updatedAt: string
}

export type InformationVariant = {
  value: number
  name: string
}
