import { getAllCategoriesWithPostCount } from '@api/categories.api'
import PageLayout from '@components/layout/PageLayout'
import Section from '@components/layout/Section'
import { Category } from '@models/information'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/tags/')({
  component: RouteComponent,
  loader: async () => {
    const response = await getAllCategoriesWithPostCount()

    return response
  },
})

type Payload = {
  totalPost: number
} & Category

function RouteComponent() {
  const categories = Route.useLoaderData()

  return (
    <PageLayout>
      <Section className="flex justify-between">
        <h2 className="text-primary headline w-full">Kategori</h2>
        <div className="subheadline flex w-full flex-col gap-3">
          {categories.map(
            (category: Payload) =>
              category.totalPost !== 0 && (
                <Link
                  to="/informasi/tags/$slug"
                  params={{ slug: category.slug }}
                  className="hover:text-primary hover:border-primary inline-flex w-fit gap-1 border-b-1 border-transparent transition"
                >
                  <h3 className="subheadline capitalize">{category.name}</h3>
                  <span className="text-gray-500">{`(${category.totalPost})`}</span>
                </Link>
              ),
          )}
        </div>
      </Section>
    </PageLayout>
  )
}
