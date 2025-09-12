import { createFileRoute } from '@tanstack/react-router'

import PageLayout from '@components/layout/PageLayout'
import BenefitSection from '@routes/tentang-kami/-components/benefit/Section'
import HistorySection from '@routes/tentang-kami/-components/history/Section'
import InvitationSection from '@routes/tentang-kami/-components/invitations/Section'
import TaglineSection from '@routes/tentang-kami/-components/tagline/Section'

export const Route = createFileRoute('/tentang-kami/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageLayout>
      <HistorySection />
      <BenefitSection />
      <InvitationSection />
      <TaglineSection />
    </PageLayout>
  )
}
