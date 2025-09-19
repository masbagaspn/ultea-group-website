import { Information } from '@models/information'

import { findVariantByValue, formatISODate } from '@lib/helper'
import { cn } from '@lib/utils'
import { Link } from '@tanstack/react-router'

type InformationListCardProps = {
  information: Information
  isLast: boolean
}

const InformationListCard = ({ information, isLast }: InformationListCardProps) => {
  const category = JSON.parse(information.categories as string)[0]
  const type = findVariantByValue(information.type)

  return (
    <article
      className={cn('text-primary flex flex-col gap-6 py-6', 'lg:border-none', {
        'border-primary/30 border-t': !isLast,
        'border-b': isLast,
      })}
    >
      <Link to="/informasi/$slug" params={{ slug: information.slug }}>
        <img
          src="/assets/image-placeholder.webp"
          className="bg-tertiary aspect-video h-auto w-full rounded lg:rounded-2xl"
        />
      </Link>
      <div className="flex h-full flex-col justify-between gap-1 lg:gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between text-xs font-light text-black capitalize lg:text-base">
            <Link
              to="/informasi/tags/$slug"
              params={{ slug: category.name }}
              className="transition hover:underline"
            >
              <span>{category.name}</span>
            </Link>
            <Link to="/informasi" search={{ page: 1, type: type.value }}>
              <span>{type.name}</span>
            </Link>
          </div>
          <Link
            to="/informasi/$slug"
            params={{ slug: information.slug }}
            className="text-xl font-medium text-nowrap text-ellipsis transition hover:underline lg:text-2xl"
          >
            <h3 className="text-wrap">{information.title}</h3>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500">{formatISODate(information.createdAt)}</p>
        </div>
      </div>
    </article>
  )
}

export default InformationListCard
