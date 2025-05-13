import Section from '@components/layout/section'
import { productSectionContents } from '@static/home/product-section'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const ProductSection = () => {
  return (
    <Section>
      <div className="bg-primary flex flex-col gap-20 rounded-2xl p-10">
        <div className="text-tertiary grid grid-cols-5">
          <h2 className="col-span-2 font-light uppercase">{productSectionContents.headline}</h2>
          <p className="col-span-3 text-5xl">{productSectionContents.subheadline}</p>
        </div>
        <ProductsContainer />
      </div>
    </Section>
  )
}

const ProductsContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {productSectionContents.contents.map((product) => (
        <div className="flex flex-col gap-4">
          <img
            src={product.imageProduct}
            className="bg-tertiary aspect-square h-auto w-full rounded-xl object-cover"
          />
          <div className="flex w-full items-center justify-between">
            <h3 className="text-tertiary text-3xl capitalize">{product.name}</h3>
            <Link to="/produk/$produkId" params={{ produkId: product.id }}>
              <button className="text-primary cursor-pointer rounded-full bg-white p-2 transition hover:-rotate-45">
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSection
