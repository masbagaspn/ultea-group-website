import Section from '@components/layout/Section'
import type { Product } from '@models/product'
import ProductCard from './Card'

type ListSectionProps = {
  products: Product[]
}

const ListSection = ({ products }: ListSectionProps) => {
  if (!products.length) return null

  return (
    <Section className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 lg:gap-10">
      {products.map((product: Product) => (
        <ProductCard key={`product-page-${product.id}`} product={product} />
      ))}
    </Section>
  )
}

export default ListSection
