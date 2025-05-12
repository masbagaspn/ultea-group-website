import PageLayout from '@/components/layout/page-layout'
import HeroSection from '@components/pages/products/hero-section'
import ProductSection from '@components/pages/products/products-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produk/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <HeroSection />
      <ProductSection />
    </PageLayout>
  )
}
