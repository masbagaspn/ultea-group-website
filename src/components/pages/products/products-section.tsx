import Section from '@components/layout/section'
import { convertToPrice } from '@lib/utils'
import products from '@static/products'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { motion as m } from 'motion/react'

const ProductSection = () => {
  return (
    <Section className="grid grid-cols-4 gap-10">
      {products.map((product) => (
        <div className="flex flex-col gap-6 p-2">
          <img
            src={product.imageProduct}
            className="bg-tertiary aspect-square h-auto w-full rounded-xl object-cover"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Link to="/produk/$produkId" params={{ produkId: product.id }}>
                <m.div
                  whileHover={{ width: '100%' }}
                  className="group hover:text-primary inline-flex w-fit items-center justify-between gap-2 text-black"
                >
                  <h3 className="text-2xl capitalize">{product.name}</h3>
                  <ArrowRight className="opacity-0 transition group-hover:opacity-100" size={20} />
                </m.div>
              </Link>
              <div className="flex w-full justify-between text-neutral-500">
                <p>{product.items}</p>
                <p>{convertToPrice(product.price)}</p>
              </div>
            </div>
            <div className="flex gap-2 text-sm font-light text-white">
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
        </div>
      ))}
    </Section>
  )
}

export default ProductSection
