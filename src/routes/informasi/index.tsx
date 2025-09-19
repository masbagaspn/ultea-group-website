import { createFileRoute } from '@tanstack/react-router'

import { getAllInformations } from '@api/informations.api'

import PageLayout from '@components/layout/PageLayout'
import Section from '@components/layout/Section'

import InformationPageHeader from '@routes/informasi/-components/layout/InformationHeader'
import InformationList from '@routes/informasi/-components/lists/InformationList'

export type InformationSearchLoaderDeps = {
  page?: number
  pageSize?: number
  title?: string
  type?: number
}

export const Route = createFileRoute('/informasi/')({
  component: RouteComponent,
  loaderDeps: ({ search }: { search: InformationSearchLoaderDeps }) => ({
    page: search.page,
    pageSize: search.pageSize,
    type: search.type,
    title: search.title,
  }),
  loader: async ({ deps: { page, pageSize = 9, title, type } }) => {
    const response = await getAllInformations(page, pageSize, title, type)

    return response
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  if (!data.data) return null

  return (
    <PageLayout>
      <Section className="flex flex-col gap-10 lg:gap-20">
        <InformationPageHeader />
        <InformationList informations={data.data} />
      </Section>
    </PageLayout>
  )
}
