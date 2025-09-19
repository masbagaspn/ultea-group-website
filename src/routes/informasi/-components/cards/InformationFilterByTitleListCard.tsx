import { Link } from '@tanstack/react-router'

import { findVariantByValue, formatISODate } from '@lib/helper'
import type { Information } from '@models/information'

type InformationFilterByTitleListCardProps = {
  information: Information
}

const InformationFilterByTitleListCard = ({
  information,
}: InformationFilterByTitleListCardProps) => {
  const type = findVariantByValue(information.type)
  return (
    <Link to="/informasi/$slug" params={{ slug: information.slug }}>
      <article className="hover:bg-secondary/5 flex w-full flex-col gap-2 truncate rounded-sm p-2 hover:cursor-pointer">
        <div className="flex flex-col gap-2 p-2">
          <span className="text-primary/50 text-[10px] capitalize">{type.name}</span>
          <p className="w-full text-xs font-semibold text-wrap">{information.title}</p>
          <span className="text-primary/50 text-xs capitalize">
            {formatISODate(information.createdAt)}
          </span>
        </div>
      </article>
    </Link>
  )
}

export default InformationFilterByTitleListCard
