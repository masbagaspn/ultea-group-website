import Section from '@components/layout/section'
import products from '@static/products'
import { useParams } from '@tanstack/react-router'

const RuleSection = () => {
  const { produkId } = useParams({ from: '/produk/$produkId' })

  const product = products.find((product) => product.id === produkId)

  if (!product) return null

  return (
    <Section className="flex gap-20 px-40 py-10">
      <h2 className="w-42 text-lg font-light text-neutral-500 uppercase">aturan konsumsi</h2>
      <ul className="flex flex-1 flex-col gap-6">
        {product.rules.map((rule) => (
          <li key={`product-details-${rule}`} className="text-xl">
            {rule}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default RuleSection
