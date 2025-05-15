import Section from '@components/layout/section'
import { productSectionContents } from '@static/home/product-section'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const ProductSection = () => {
  return (
    <Section>
      <div className="bg-primary flex flex-col gap-20 rounded-lg p-4 lg:rounded-2xl lg:p-10">
        <div className="text-tertiary flex flex-col gap-4 lg:grid lg:grid-cols-5">
          <h2 className="section-title col-span-2">{productSectionContents.headline}</h2>
          <p className="headline col-span-3">{productSectionContents.subheadline}</p>
        </div>
        <ProductsContainer />
      </div>
    </Section>
  )
}

const ProductsContainer = () => {
  return (
    <div className="flex grid grid-cols-2 flex-col gap-6 lg:grid-cols-4 lg:gap-10">
      {productSectionContents.contents.map((product) => (
        <div
          key={`home-products-${product.name}`}
          className="flex flex-col gap-2 lg:flex-col lg:gap-4"
        >
          <img
            src={product.imageProduct}
            className="bg-tertiary aspect-square h-auto w-full rounded object-cover lg:rounded-xl"
          />
          <div className="flex w-full items-center justify-between">
            <Link
              to="/produk/$produkId"
              params={{ produkId: product.id }}
              resetScroll={false}
              className="group text-tertiary inline-flex w-full items-center justify-between text-base capitalize transition hover:opacity-70 lg:text-3xl"
            >
              {product.name}
              <ArrowRight className="w-4 transition group-hover:-rotate-45 lg:w-8" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSection
