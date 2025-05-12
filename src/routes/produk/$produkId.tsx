import PageLayout from '@components/layout/page-layout'
import BenefitSection from '@components/pages/products/benefits-section'
import DetailSection from '@components/pages/products/detail-section'
import RuleSection from '@components/pages/products/rules-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk/$produkId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <DetailSection />
      <BenefitSection />
      <RuleSection />
    </PageLayout>
  )
}
