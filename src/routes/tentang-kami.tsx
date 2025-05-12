import PageLayout from '@components/layout/page-layout'
import CopySection from '@components/pages/about/copy-section'
import FirstSection from '@components/pages/about/first-section'
import HeroSection from '@components/pages/about/hero-section'
import SecondSection from '@components/pages/about/second-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tentang-kami')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <CopySection />
    </PageLayout>
  )
}
