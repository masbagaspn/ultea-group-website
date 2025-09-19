import type { Information } from '@models/information'
import InformationListCard from '@routes/informasi/-components/cards/InformationListCard'

type InformationListProps = {
  informations: Information[]
}

const InformationList = ({ informations }: InformationListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      {informations.map((info, idx) => (
        <InformationListCard
          key={`informations-list-${info.id}`}
          information={info}
          isLast={idx !== informations.length - 1}
        />
      ))}
    </div>
  )
}

export default InformationList
