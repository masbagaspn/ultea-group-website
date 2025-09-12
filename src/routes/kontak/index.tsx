import { createFileRoute } from '@tanstack/react-router'

import PageLayout from '@components/layout/PageLayout'
import ContactSection from '@routes/kontak/-components/ContactSection'
import IntroSection from '@routes/kontak/-components/IntroSection'

export const Route = createFileRoute('/kontak/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <IntroSection />
      <ContactSection />
    </PageLayout>
  )
}
