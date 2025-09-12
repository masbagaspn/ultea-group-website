import Section from '@components/layout/Section'

import ProductContents from '@routes/-components/products/Contents'

import type { PaginationResponse } from '@models/payload'
import type { Product } from '@models/product'

import HOME_CONTENTS from '@static/home'

type ProductSectionProps = {
  products: PaginationResponse<Product>
}

const ProductSection = ({ products }: ProductSectionProps) => {
  if (!products.data.length) return null

  return (
    <Section>
      <div className="bg-primary flex flex-col gap-20 rounded-lg p-4 lg:rounded-2xl lg:p-10">
        <div className="text-tertiary flex flex-col gap-4 lg:grid lg:grid-cols-5">
          <h2 className="section-title col-span-2">{HOME_CONTENTS.PRODUCTS_SECTION.HEADLINE}</h2>
          <p className="headline col-span-3">{HOME_CONTENTS.PRODUCTS_SECTION.SUBHEADLINE}</p>
        </div>
        <ProductContents products={products.data as Product[]} />
      </div>
    </Section>
  )
}

export default ProductSection
