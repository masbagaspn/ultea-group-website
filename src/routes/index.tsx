import { createFileRoute } from '@tanstack/react-router'

import { useGetHomeData } from '@hooks/useGetHomeData'

import PageLayout from '@components/layout/PageLayout'

import IntroSection from '@routes/-components/intro/Section'
import CompanySection from './-components/company/Section'
import InformationSection from './-components/informations/Section'
import ProductSection from './-components/products/Section'
import TestimoniesSection from './-components/testimonies/Section'
import TaglineSection from './tentang-kami/-components/tagline/Section'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    const data = useGetHomeData()

    return data
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <PageLayout>
      <IntroSection banners={data.banners} />
      <CompanySection />
      <ProductSection products={data.products} />
      <TaglineSection />
      <TestimoniesSection testimonies={data.testimonies} />
      <InformationSection informations={data.informations} />
    </PageLayout>
  )
}
