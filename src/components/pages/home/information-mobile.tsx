import { Link } from "@tanstack/react-router"

import { cn } from "@lib/utils"
import { Information } from "@models/information"

type InformationMobileContainerProps = {
  informations: Information[]
}
type InformationMobileCardProps = {
  information: Information
  informationsLength: number
  index: number
}

const InformationMobileContainer = ({ informations }: InformationMobileContainerProps) => {
  return (
    <div className="flex w-full flex-col">
      {informations.map((info, idx) => (
        <InformationMobileCard 
            key={`information-card-${info.title}`}
            information={info}
            informationsLength={informations.length}
            index={idx}
        />
      ))}
    </div>
  )
}

const InformationMobileCard = ({ information, informationsLength, index }: InformationMobileCardProps ) => {
    return (
        <Link
          to="/informasi/$informasiId"
          params={{ informasiId: information.title }}
        >
          <article
            className={cn('text-primary flex flex-col gap-6 py-6', 'lg:border-none', {
              'border-primary/30 border-t': index !== informationsLength,
              'border-b': index === informationsLength - 1,
            })}
          >
            <img
              src="/assets/image-placeholder.webp"
              className="bg-tertiary aspect-video h-auto w-full rounded-lg object-cover lg:rounded-2xl"
            />
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex w-full justify-between text-xs font-light text-black lg:text-base">
                <span className="font-normal uppercase">{information.categories[0]}</span>
                <span>{information.type}</span>
              </div>
              <h3 className="text-xl font-medium text-nowrap text-ellipsis lg:text-2xl">
                {information.title}
              </h3>
              <p className="inline-flex flex-col items-start gap-1 text-xs lg:text-base capitalize">
                By {information.author}
                <span className="text-xs text-neutral-500 lg:text-sm">{`${new Date().toUTCString()}`}</span>
              </p>
            </div>
          </article>
        </Link>
    )
}

export default InformationMobileContainer