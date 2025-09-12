import ProductCard from '@routes/-components/products/Card'

import type { Product } from '@models/product'

type ProductContentsProps = {
  products: Product[]
}

const ProductContents = ({ products }: ProductContentsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductContents
