import PageLayout from '@components/layout/page-layout'
import ContactSection from '@components/pages/contacts/contact-section'
import HeroSection from '@components/pages/contacts/hero-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kontak')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <HeroSection />
      <ContactSection />
    </PageLayout>
  )
}
