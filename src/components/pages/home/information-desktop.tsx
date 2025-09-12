import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { AnimatePresence, LayoutGroup, motion as m } from "motion/react"

import { Information } from "@models/information"
import { cn } from "@lib/utils"

type InformationDesktopContainerProps = {
  informations: Information[]
}

type InformationDesktopCardProps = {
  information: Information,
  selected: Information,
  handleSelect: (information: Information) => void
}

const InformationDesktopContainer = ({informations}: InformationDesktopContainerProps) => {
  const navigate = useNavigate()
  const [selectedInformation, setSelectedInformation] = React.useState(informations[0])

  const handleSelectInformation = (information: Information) => {
    if (information.title === selectedInformation.title) {
      navigate({ to: '/informasi/$informasiId', params: { informasiId: information.title } })
    } else {
      setSelectedInformation(information)
    }
  }

  return (
    <LayoutGroup>
      <m.div layout className="grid grid-cols-4 gap-6">
        {informations.map((info) => (
          <InformationDesktopCards 
            key={`information-${info.id}`}
            information={info}
            handleSelect={handleSelectInformation}
            selected={selectedInformation}
          />
        ))}
      </m.div>
    </LayoutGroup>
  )
}

const InformationDesktopCards = ({ information, handleSelect, selected }: InformationDesktopCardProps ) => {
  return (
        <m.article
            onClick={() => handleSelect(information)}
            style={{
                justifyContent: selected.title === information.title ? 'end' : 'space-between',
            }}
            className={cn(
                'relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-6 text-white',
                {
                'col-span-2 aspect-video h-auto w-full gap-3':
                    selected.title === information.title,
                'gap-3': selected.title !== information.title,
                },
            )}
            layout
            >
            <m.div
                layout
                className="z-10 flex w-full items-center justify-between gap-3 font-light text-white"
            >
                <m.span className="z-10">{information.type}</m.span>
                <AnimatePresence>
                {selected.title === information.title && (
                    <m.div className="h-[1px] flex-1 bg-white" />
                )}
                </AnimatePresence>
                <m.span className="z-10">{information.categories[0]}</m.span>
            </m.div>
            <m.h3 className="z-10 w-full text-2xl font-medium will-change-transform">
                {information.title}
            </m.h3>
            <img className="absolute top-0 left-0 z-0 h-full w-full rounded-2xl bg-black object-cover" />
        </m.article>
    )
}

export default InformationDesktopContainer