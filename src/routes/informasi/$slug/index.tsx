import { getInformationBySlug } from '@api/informations.api'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/$slug/')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const response = await getInformationBySlug(params.slug)

    return response
  },
})

function RouteComponent() {
  const information = Route.useLoaderData()

  console.log(information)
  return <div>Hello "/informasi/$slug/"!</div>
}
