import Section from '@components/layout/section'
import products from '@static/products'
import { useParams } from '@tanstack/react-router'

const BenefitSection = () => {
  const { produkId } = useParams({ from: '/produk/$produkId' })

  const product = products.find((product) => product.id === produkId)

  if (!product) return null

  return (
    <Section className="flex flex-col gap-10 px-40 py-0">
      <h2 className="text-lg font-light text-neutral-500 uppercase">keuntungan</h2>
      <ul className="grid w-full list-disc grid-cols-3 gap-x-10 gap-y-6 border-b border-neutral-300 pb-10 pl-4">
        {product.benefits.map((benefit) => (
          <li key={`product-details-${benefit}`} className="text-xl">
            {benefit}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default BenefitSection
