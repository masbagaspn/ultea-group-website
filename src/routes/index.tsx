import CopySection from '@components/pages/home/copy-section'
import InformationSection from '@components/pages/home/information-section'
import ProductSection from '@components/pages/home/product-section'
import TestimonySection from '@components/pages/home/testimony-section'
import { createFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/layout/page-layout'
import CompanySection from '../components/pages/home/company-section'
import HeroSection from '../components/pages/home/hero-section'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <HeroSection />
      <CompanySection />
      <ProductSection />
      <CopySection />
      <TestimonySection />
      <InformationSection />
    </PageLayout>
  )
}
