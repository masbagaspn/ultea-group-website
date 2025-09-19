import { useNavigate } from '@tanstack/react-router'
import { AnimatePresence, motion as m } from 'motion/react'

import { InformationSearchLoaderDeps, Route } from '@routes/informasi'
import InformationFilterByVariantDropdownList from '@routes/informasi/-components/dropdown/InformationFilterByVariantDropdownList'

import { InformationVariant } from '@models/information'

import { cn } from '@lib/utils'

type InformationFilterByVariantDropdownProps = {
  active: InformationVariant
  state: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const InformationFilterByVariantDropdown = ({
  active,
  state,
}: InformationFilterByVariantDropdownProps) => {
  const navigate = useNavigate({ from: Route.fullPath })

  const handleSelectType = (type: InformationVariant) => {
    state.setShow(false)
    navigate({
      search: (prev: InformationSearchLoaderDeps) => ({ ...prev, type: type.value, page: 1 }),
    })
  }

  return (
    <AnimatePresence>
      {state.show && (
        <m.div
          initial={{ height: '0px', opacity: 0 }}
          animate={{
            height: state.show ? '400%' : '0px',
            opacity: state.show ? 100 : 0,
          }}
          exit={{ height: '0px', opacity: 0 }}
          transition={{ duration: 0.5, stiffness: 0 }}
          onMouseLeave={() => state.setShow(false)}
          className={cn(
            'border-primary absolute flex flex-col overflow-hidden border-[0.5px] bg-white drop-shadow',
            'top-10 w-full rounded',
            'lg:top-14 lg:w-60 lg:rounded-lg',
          )}
        >
          <InformationFilterByVariantDropdownList active={active} handleSelect={handleSelectType} />
        </m.div>
      )}
    </AnimatePresence>
  )
}

export default InformationFilterByVariantDropdown
