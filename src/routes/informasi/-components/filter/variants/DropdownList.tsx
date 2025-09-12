import { cn } from '@lib/utils'
import { InformationVariant } from '@models/information'

import { INFORMATION_VARIANTS } from '@static/information'

type DropdownListProps = {
  active: InformationVariant
  handleSelect: (variant: InformationVariant) => void
}

const DropdownList = ({ active, handleSelect }: DropdownListProps) => {
  return INFORMATION_VARIANTS.map((variant, idx) => (
    <button
      onClick={() => handleSelect(variant)}
      key={`information-type-filter-${variant.name}`}
      className={cn(
        'text-primary/70 hover:text-primary border-primary inline-flex h-full w-full cursor-pointer items-center justify-center border-b capitalize',
        'text-xs lg:text-sm',
        { 'border-none': idx === INFORMATION_VARIANTS.length - 1 },
        {
          'text-primary pointer-events-none font-medium': variant.name === active.name,
        },
      )}
    >
      {variant.name}
    </button>
  ))
}

export default DropdownList
