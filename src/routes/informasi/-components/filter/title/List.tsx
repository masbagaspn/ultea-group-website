import type { Information } from '@models/information'
import { Link } from '@tanstack/react-router'

type ListProps = {
  informations: Information[]
  isLoading: boolean
}

type ListCardProps = {
  information: Information
}

const List = ({ informations, isLoading }: ListProps) => {
  if (isLoading) {
    return (
      <div className="absolute top-16 right-0 flex w-full flex-col gap-1 rounded bg-white p-2 text-center drop-shadow-md">
        Loading...
      </div>
    )
  }

  if (!informations.length) {
    return (
      <div className="absolute top-16 right-0 flex w-full flex-col gap-1 rounded bg-white p-2 text-center drop-shadow-md">
        No Result
      </div>
    )
  }

  return (
    <div className="absolute top-16 right-0 flex w-[120%] flex-col gap-1 rounded bg-white p-2 drop-shadow-md">
      {informations.map((information) => (
        <ListCard key={information.id} information={information} />
      ))}
    </div>
  )
}

const ListCard = ({ information }: ListCardProps) => {
  return (
    <Link to="/informasi/$informasiId" params={{ informasiId: information.id }}>
      <article className="hover:bg-primary/5 flex w-full items-center rounded-sm p-0.5 hover:cursor-pointer">
        <img
          className="aspect-square h-8 w-auto rounded-sm bg-black object-cover"
          src={information.thumbnailUrl}
        />
        <div className="flex h-8 w-full flex-1 items-center overflow-hidden rounded-tr-sm rounded-br-sm px-2">
          <p className="truncate text-center text-sm">{information.title}</p>
        </div>
      </article>
    </Link>
  )
}

export default List
