import { INFORMATION_VARIANTS } from '@static/information'

export function findVariantByValue(value: number) {
  const variant = INFORMATION_VARIANTS.find((variant) => variant.value === value)

  return variant ?? INFORMATION_VARIANTS[0]
}

export function findVariantByName(name: string) {
  const variant = INFORMATION_VARIANTS.find((variant) => variant.name === name)

  return variant
}

export function formatISODate(isoString: string) {
  const date = new Date(isoString)

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  return date.toLocaleDateString('id-ID', options)
}

export function formatSlug(slug: string) {
  return slug.replace('-', ' ')
}

export function calculateRange(page: number, pageSize: number, totalItem: number) {
  const offset = (page - 1) * pageSize
  const startItem = offset + 1
  const endItem = offset + totalItem

  return { startItem, endItem }
}

export function generateWhatsappLink(title: string, category: string, slug: string) {
  const url = `${import.meta.env.VITE_BASE_URL}/informasi/${slug}`
  const message = `${title}\nKategori: ${category}\n\nBaca selengkapnya di: ${url}`

  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/?text=${encodedMessage}`
}
