import Section from '@components/layout/section'
import { convertToPrice } from '@lib/utils'
import products from '@static/products'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { motion as m } from 'motion/react'

const ProductSection = () => {
  return (
    <Section className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 lg:gap-10">
      {products.map((product) => (
        <div key={`products-item-card-${product.name}`} className="flex flex-col gap-3 lg:gap-6">
          <Link
            to="/produk/$produkId"
            params={{ produkId: product.id }}
            resetScroll={false}
            className="flex flex-col gap-3 lg:gap-6"
          >
            <img
              src={product.imageProduct}
              className="bg-tertiary aspect-square h-auto w-full rounded-xl object-cover"
            />
            <div className="flex flex-col gap-1">
              <div>
                <m.div
                  whileHover={{ width: '100%' }}
                  className="group hover:text-primary inline-flex w-fit items-center justify-between gap-2 text-black"
                >
                  <h3 className="text-lg capitalize lg:text-2xl">{product.name}</h3>
                  <ArrowRight className="opacity-0 transition group-hover:opacity-100" size={20} />
                </m.div>
              </div>
              <div className="flex w-full flex-col justify-between text-sm text-neutral-500 lg:flex-row lg:text-base">
                <p>{product.items}</p>
                <p>{convertToPrice(product.price)}</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-2 text-center text-xs font-light text-white lg:flex-row lg:text-center lg:text-sm">
            <Link
              to={product.links.tokopedia}
              className="bg-primary hover:bg-primary/70 rounded-full px-4 py-2"
            >
              Tokopedia
            </Link>
            <Link
              to={product.links.tokopedia}
              className="rounded-full bg-orange-500 px-4 py-2 hover:bg-orange-500/70"
            >
              Shopee
            </Link>
          </div>
        </div>
      ))}
    </Section>
  )
}

export default ProductSection
