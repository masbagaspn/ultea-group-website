import type { Information } from '@models/information'
import InformationFilterByTitleListCard from '@routes/informasi/-components/cards/InformationFilterByTitleListCard'

type InformationFilterByTitleListProps = {
  informations: Information[]
  isLoading: boolean
}

const InformationFilterByTitleList = ({
  informations,
  isLoading,
}: InformationFilterByTitleListProps) => {
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
    <div className="absolute top-16 right-0 flex w-[120%] flex-col rounded bg-white drop-shadow-md">
      {informations.map((information) => (
        <InformationFilterByTitleListCard key={information.id} information={information} />
      ))}
    </div>
  )
}

export default InformationFilterByTitleList
