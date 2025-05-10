import Section from '@components/layout/section'
import { cn, generateListNumber, generateProductDescription } from '@lib/utils'
import { productSectionContents } from '@static/home/product-section'
import React from 'react'

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
  const firstItem = productSectionContents.contents[0]
  const [selectedProduct, setSelectedProduct] = React.useState(firstItem)

  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product)
  }

  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="col-span-2 flex flex-col gap-10">
        <div className="bg-tertiary aspect-video w-full rounded-2xl"></div>
        <p className="text-tertiary text-xl font-light">
          {generateProductDescription(selectedProduct.description)}
        </p>
      </div>
      <ul className="col-span-3 flex flex-col">
        {productSectionContents.contents.map((item, idx) => (
          <li key={`home-products-${item.name}`}>
            <button
              className={cn('inline-flex w-full gap-10 p-10', {
                'cursor-pointer text-neutral-300 opacity-70': selectedProduct.name !== item.name,
                'text-primary bg-tertiary rounded-xl': selectedProduct.name === item.name,
              })}
              onClick={() => handleSelectProduct(item)}
            >
              <span>{generateListNumber(idx)}</span>
              <span className="text-3xl capitalize">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductSection
