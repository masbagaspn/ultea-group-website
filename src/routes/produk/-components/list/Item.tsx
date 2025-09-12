import { Product } from '@models/product'
import { Link } from '@tanstack/react-router'
import ProductDetails from './Details'

type ProductItemProps = {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link
      to="/produk/$produkId"
      params={{ produkId: product.id }}
      resetScroll={false}
      className="flex flex-col gap-3 lg:gap-6"
    >
      <img
        src={product.imageUrl}
        className="bg-tertiary aspect-square h-auto w-full rounded-xl object-cover"
      />
      <ProductDetails product={product} />
    </Link>
  )
}

export default ProductItem
