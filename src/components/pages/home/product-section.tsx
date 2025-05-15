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
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
      {productSectionContents.contents.map((product) => (
        <Link
          key={`home-products-${product.name}`}
          to="/produk/$produkId"
          params={{ produkId: product.id }}
          className="group"
        >
          <article className="flex flex-col gap-2 lg:flex-col lg:gap-4">
            <img
              src={product.imageProduct}
              className="bg-tertiary aspect-square h-auto w-full rounded object-cover lg:rounded-xl"
            />
            <div className="flex w-full items-center justify-between">
              <h3 className="text-tertiary inline-flex w-full items-center justify-between text-base capitalize transition group-hover:opacity-70 lg:text-3xl">
                {product.name}
                <ArrowRight className="w-4 transition group-hover:-rotate-45 lg:w-8" />
              </h3>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default ProductSection
