import { createFileRoute, Link } from '@tanstack/react-router'

import { getAllInformationsByCategories } from '@api/informations.api'
import PageLayout from '@components/layout/PageLayout'
import Section from '@components/layout/Section'
import { formatSlug } from '@lib/helper'
import InformationList from '../-components/layout/InformationList'

export const Route = createFileRoute('/informasi/tags/$slug')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const response = await getAllInformationsByCategories(params.slug)

    return response
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  const { slug } = Route.useParams()

  return (
    <PageLayout>
      <Section className="flex flex-col gap-10 lg:gap-20">
        <div className="flex w-full items-end justify-between">
          <h2 className="text-primary headline capitalize">{formatSlug(slug)}</h2>
          <Link
            to="/informasi/tags"
            className="text-primary font-light capitalize transition hover:underline"
          >
            Liat semua kategori
          </Link>
        </div>
        <InformationList informations={data.data} />
      </Section>
    </PageLayout>
  )
}
