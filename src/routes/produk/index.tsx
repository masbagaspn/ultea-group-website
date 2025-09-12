import { createFileRoute } from '@tanstack/react-router'

import { getAllProducts } from '@api/products.api'

import PageLayout from '@components/layout/PageLayout'
import IntroSection from '@routes/produk/-components/intro/Section'
import ListSection from './-components/list/Section'

export const Route = createFileRoute('/produk/')({
  component: RouteComponent,
  loader: async () => {
    const products = await getAllProducts()

    return products
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <PageLayout>
      <IntroSection />
      <ListSection products={data.data} />
    </PageLayout>
  )
}
