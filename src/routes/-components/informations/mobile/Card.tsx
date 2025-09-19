import { cn } from '@lib/utils'
import { Information } from '@models/information'
import { Link } from '@tanstack/react-router'

type InformationCardProps = {
  information: Information
  total: number
  index: number
}

const cardVariants = {
  base: 'border-b',
  last: 'border-primary/30 border-t',
}

const InformationCard = ({ information, total, index }: InformationCardProps) => {
  const isLast = index === total - 1
  const category = JSON.parse(information.categories as string)[0]
  return (
    <Link to="/informasi/$slug" params={{ slug: information.slug }}>
      <article
        className={cn(
          'text-primary flex flex-col gap-6 py-6 lg:border-none',
          `${isLast ? cardVariants.last : cardVariants.base}`,
        )}
      >
        <img
          src="/assets/image-placeholder.webp"
          className="bg-tertiary aspect-video h-auto w-full rounded-lg object-cover lg:rounded-2xl"
        />
        <div className="flex flex-col gap-1 lg:gap-3">
          <div className="flex w-full justify-between text-xs font-light text-black lg:text-base">
            <span className="font-normal uppercase">{category.name}</span>
            <span>{information.type}</span>
          </div>
          <h3 className="text-xl font-medium text-nowrap text-ellipsis lg:text-2xl">
            {information.title}
          </h3>
          <p className="inline-flex flex-col items-start gap-1 text-xs capitalize lg:text-base">
            By {information.author}
            <span className="text-xs text-neutral-500 lg:text-sm">{`${new Date().toUTCString()}`}</span>
          </p>
        </div>
      </article>
    </Link>
  )
}

export default InformationCard
