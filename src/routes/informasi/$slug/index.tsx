import { createFileRoute } from '@tanstack/react-router'

import PageLayout from '@components/layout/PageLayout'

import { getInformationBySlug } from '@api/informations.api'
import InformationLayout from './-components/layout/InformationLayout'

export const Route = createFileRoute('/informasi/$slug/')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const response = await getInformationBySlug(params.slug)

    return response
  },
})

function RouteComponent() {
  const information = Route.useLoaderData()

  return (
    <PageLayout>
      <InformationLayout />
    </PageLayout>
  )
}
