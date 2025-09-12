import { getProductById } from '@api/products.api'
import PageLayout from '@components/layout/PageLayout'
import BenefitsSection from '@routes/produk/-components/details/BenefitsSection'
import DetailSection from '@routes/produk/-components/details/DetailsSection'
import RulesSection from '@routes/produk/-components/details/RulesSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk/$produkId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const response = await getProductById(params.produkId)

    return response
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  if (!data.data) return null

  const product = data.data

  return (
    <PageLayout>
      <DetailSection product={product} />
      <BenefitsSection benefits={product.benefits} />
      <RulesSection rules={product.rules} />
    </PageLayout>
  )
}
