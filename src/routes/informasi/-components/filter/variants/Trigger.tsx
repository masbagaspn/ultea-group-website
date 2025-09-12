import { cn } from '@lib/utils'
import { InformationVariant } from '@models/information'
import { ChevronDown } from 'lucide-react'
import { SetStateAction } from 'react'

type ButtonProp = {
  active: InformationVariant
  state: {
    show: boolean
    setShow: React.Dispatch<SetStateAction<boolean>>
  }
}

const Trigger = ({ active, state }: ButtonProp) => {
  return (
    <button
      onClick={() => state.setShow(!state.show)}
      className={cn(
        'border-primary flex cursor-pointer items-center justify-between border-[0.5px] capitalize',
        'w-full rounded px-2 py-1.5 text-left text-sm',
        'lg:w-60 lg:rounded-lg lg:px-6 lg:py-3 lg:text-base',
      )}
    >
      {active.name}
      <span>
        <ChevronDown
          strokeWidth={1}
          className={cn('w-4 transition duration-250 lg:w-6', {
            'rotate-180': state.show,
          })}
        />
      </span>
    </button>
  )
}

export default Trigger
