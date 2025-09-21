import InformationListCard from '@routes/informasi/-components/cards/InformationListCard'

import type { Information } from '@models/information'
import InformationPagination from './InformationPagination'

type InformationListProps = {
  informations: Information[]
  pagination?: {
    handlePrev: () => void
    handleNext: () => void
    startItem: number
    endItem: number
    totalItem: number
    currentPage: number
    totalPage: number
  }
}

const InformationList = ({ informations, pagination }: InformationListProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
        {informations.map((info, idx) => (
          <InformationListCard
            key={`informations-list-${info.id}`}
            information={info}
            isLast={idx !== informations.length - 1}
          />
        ))}
      </div>
      {pagination && <InformationPagination pagination={pagination} />}
    </div>
  )
}

export default InformationList
