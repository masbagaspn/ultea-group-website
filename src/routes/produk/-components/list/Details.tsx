import { ArrowRight } from 'lucide-react'
import { motion as m } from 'motion/react'

import { convertToPrice } from '@lib/utils'

import type { Product } from '@models/product'

type ProductDetailsProps = {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <m.div
          whileHover={{ width: '100%' }}
          className="group hover:text-primary ProductItems-center inline-flex w-fit justify-between gap-2 text-black"
        >
          <h3 className="text-lg capitalize lg:text-2xl">{product.name}</h3>
          <ArrowRight className="opacity-0 transition group-hover:opacity-100" size={20} />
        </m.div>
      </div>
      <div className="flex w-full flex-col justify-between text-sm text-neutral-500 lg:flex-row lg:text-base">
        <p>{product.contents}</p>
        <p>{convertToPrice(product.price)}</p>
      </div>
    </div>
  )
}

export default ProductDetails
