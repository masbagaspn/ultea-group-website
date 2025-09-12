import { createFileRoute } from '@tanstack/react-router'

import { getAllInformations } from '@api/informations.api'

import PageLayout from '@components/layout/PageLayout'
import Section from '@components/layout/Section'

import Header from '@routes/informasi/-components/Header'
import List from '@routes/informasi/-components/List'

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
  loader: async ({ deps: { page, pageSize, title, type } }) => {
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
        <Header />
        <List informations={data.data} />
      </Section>
    </PageLayout>
  )
}
