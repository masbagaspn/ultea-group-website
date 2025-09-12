import { Link } from '@tanstack/react-router'

import { cn } from '@lib/utils'
import type { Information } from '@models/information'

type ListProps = {
  informations: Information[]
}

const List = ({ informations }: ListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
      {informations.map((info, idx) => (
        <Link
          to="/informasi/$informasiId"
          params={{ informasiId: info.title }}
          key={`information-card-${info.title}`}
        >
          <article
            className={cn('text-primary flex flex-col gap-6 py-6', 'lg:border-none', {
              'border-primary/30 border-t': idx !== informations.length,
              'border-b': idx === informations.length - 1,
            })}
          >
            <img
              src="/assets/image-placeholder.webp"
              className="bg-tertiary aspect-square h-auto w-full rounded-lg lg:rounded-2xl"
            />
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex w-full justify-between text-xs font-light text-black lg:text-base">
                <span className="font-normal uppercase">{info.categories}</span>
                <span>{info.type}</span>
              </div>
              <h3 className="text-xl font-medium text-nowrap text-ellipsis lg:text-2xl">
                {info.title}
              </h3>
              <p className="inline-flex items-center gap-2 text-xs lg:text-base">
                by {info.author}
                <span className="text-xs text-neutral-500 lg:text-sm">{`${new Date().toUTCString()}`}</span>
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default List
