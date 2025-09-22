import { formatISODate } from '@lib/helper'
import { Route } from '@routes/informasi/$slug'
import { Link } from '@tanstack/react-router'

const InformationDetail = () => {
  const information = Route.useLoaderData()

  const category = JSON.parse(information.categories)[0]
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="headline text-primary mb-4 w-3/4">{information.title}</h2>
      <p className="text-neutral-400">Ditulis oleh {information.author}</p>
      <div className="text-primary mt-10 flex items-center gap-4">
        <p>{formatISODate(information.createdAt)}</p>
        <div className="bg-primary h-[1px] w-8" />
        <Link
          to="/informasi/tags/$slug"
          params={{ slug: category.slug }}
          className="capitalize transition hover:underline"
        >
          {category.name}
        </Link>
      </div>
    </div>
  )
}

export default InformationDetail
