import { AnimatePresence, motion as m } from 'motion/react'

import { Information } from '@models/information'

import { findVariantByValue } from '@lib/helper'
import { cn } from '@lib/utils'

type InformationCardProps = {
  information: Information
  selected: Information
  handleSelect: (information: Information) => void
}

const cardVariants = {
  active: 'col-span-2 aspect-video h-auto w-full gap-3',
  inactive: 'gap-3',
}

const InformationCard = ({ information, handleSelect, selected }: InformationCardProps) => {
  const isActive = selected.title === information.title
  const type = findVariantByValue(information.type)
  const category = JSON.parse(information.categories as string)[0]
  return (
    <m.article
      onClick={() => handleSelect(information)}
      style={{
        justifyContent: selected.title === information.title ? 'end' : 'space-between',
      }}
      className={cn(
        'relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-6 text-white',
        `${isActive ? cardVariants.active : cardVariants.inactive}`,
      )}
      layout
    >
      <m.div
        className="z-10 flex w-full items-center justify-between gap-3 font-light text-white"
        layout
      >
        <m.span className="z-10 capitalize">{type.name}</m.span>
        <AnimatePresence>
          {isActive && <m.div className="h-[1px] flex-1 bg-white" />}
        </AnimatePresence>
        <m.span className="z-10 capitalize">{category.name}</m.span>
      </m.div>

      <m.h3 className="z-10 w-full text-2xl font-medium will-change-transform">
        {information.title}
      </m.h3>
      <img className="absolute top-0 left-0 z-0 h-full w-full rounded-2xl bg-black object-cover" />
    </m.article>
  )
}

export default InformationCard
