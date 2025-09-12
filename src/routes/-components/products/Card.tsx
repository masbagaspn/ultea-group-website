import { Product } from '@models/product'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      key={`home-products-${product.name}`}
      to="/produk/$produkId"
      params={{ produkId: product.id }}
      className="group"
    >
      <article className="flex flex-col gap-2 lg:flex-col lg:gap-4">
        <img
          src={product.imageUrl}
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
  )
}

export default ProductCard
