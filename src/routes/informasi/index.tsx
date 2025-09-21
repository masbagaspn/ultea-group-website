import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { getAllInformations } from '@api/informations.api'

import PageLayout from '@components/layout/PageLayout'
import Section from '@components/layout/Section'

import { calculateRange } from '@lib/helper'
import InformationPageHeader from '@routes/informasi/-components/layout/InformationHeader'
import InformationList from '@routes/informasi/-components/layout/InformationList'

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

    const range = calculateRange(page ?? 1, pageSize, response.data.length)

    const pagination = {
      currentPage: page ?? 1,
      totalPage: response.totalPage,
      totalItem: response.totalCount,
      startItem: range.startItem,
      endItem: range.endItem,
    }

    return { pagination, informations: response.data }
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()

  if (!data.informations) return null

  const navigate = useNavigate({ from: Route.fullPath })

  const handleNext = () => {
    navigate({
      search: (prev: InformationSearchLoaderDeps) => ({
        ...prev,
        page: (prev.page ?? 1) + 1,
      }),
    })
  }

  const handlePrev = () => {
    navigate({
      search: (prev: InformationSearchLoaderDeps) => ({
        ...prev,
        page: (prev.page ?? 1) - 1,
      }),
    })
  }

  return (
    <PageLayout>
      <Section className="flex flex-col gap-10 lg:gap-20">
        <InformationPageHeader />
        {data.informations.length ? (
          <InformationList
            informations={data.informations}
            pagination={{
              ...data.pagination,
              handleNext: handleNext,
              handlePrev: handlePrev,
            }}
          />
        ) : null}
      </Section>
    </PageLayout>
  )
}
