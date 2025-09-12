import type { Product } from '@models/product'
import { Link } from '@tanstack/react-router'

type ProductLinksProps = {
  product: Product
}

const ProductLinks = ({ product }: ProductLinksProps) => {
  return (
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
  )
}

export default ProductLinks
