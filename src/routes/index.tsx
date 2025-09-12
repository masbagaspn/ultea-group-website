import { createFileRoute } from '@tanstack/react-router'

import CompanySection from '@components/pages/home/company-section'
import CopySection from '@components/pages/home/copy-section'
import InformationSection from '@components/pages/home/information-section'
import ProductSection from '@components/pages/home/product-section'
import TestimonySection from '@components/pages/home/testimony-section'
import PageLayout from '@components/layout/page-layout'
import HeroSection from '@components/pages/home/hero-section'

import { useGetHomeData } from '@hooks/useGetHomeData'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    const data = useGetHomeData()

    return data
  }
})

function RouteComponent() {
  const data = Route.useLoaderData()
  
  return (
    <PageLayout>
      <HeroSection banners={data.banners}/>
      <CompanySection />
      <ProductSection products={data.products}/>
      <CopySection />
      <TestimonySection testimonies={data.testimonies}/>
      <InformationSection informations={data.informations} />
    </PageLayout>
  )
}
