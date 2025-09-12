import { Link } from '@tanstack/react-router'

import { Product } from '@models/product'

import ProductItem from './Item'

type CardProps = {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <div key={`products-item-card-${product.name}`} className="flex flex-col gap-3 lg:gap-6">
      <ProductItem product={product} />
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
  )
}

export default Card
