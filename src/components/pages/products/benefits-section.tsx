import Section from '@components/layout/section'
import products from '@static/products'
import { useParams } from '@tanstack/react-router'

const BenefitSection = () => {
  const { produkId } = useParams({ from: '/produk/$produkId' })

  const product = products.find((product) => product.id === produkId)

  if (!product) return null

  return (
    <Section className="flex flex-col gap-6 py-0 lg:gap-10 lg:px-40">
      <h2 className="section-title border-t border-neutral-300 pt-4 text-neutral-500 lg:border-none lg:pt-0">
        keuntungan
      </h2>
      <ul className="flex w-full list-disc flex-col gap-2 border-b border-neutral-300 pb-10 pl-4 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-6">
        {product.benefits.map((benefit) => (
          <li key={`product-details-${benefit}`} className="text-base lg:text-xl">
            {benefit}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default BenefitSection
