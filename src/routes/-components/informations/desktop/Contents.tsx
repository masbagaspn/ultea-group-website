import { useNavigate } from '@tanstack/react-router'
import { LayoutGroup, motion as m } from 'motion/react'
import * as React from 'react'

import { Information } from '@models/information'

import InformationCard from '@routes/-components/informations/desktop/Card'

type InformationContentsDesktopProps = {
  informations: Information[]
}

const InformationContentsDesktop = ({ informations }: InformationContentsDesktopProps) => {
  const navigate = useNavigate()
  const [selectedInformation, setSelectedInformation] = React.useState(informations[0])

  const handleSelectInformation = (information: Information) => {
    if (information.title === selectedInformation.title) {
      navigate({
        to: '/informasi/$slug',
        params: { slug: information.slug },
      })
    } else {
      setSelectedInformation(information)
    }
  }

  return (
    <LayoutGroup>
      <m.div layout className="grid grid-cols-4 gap-6">
        {informations.map((info) => (
          <InformationCard
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

export default InformationContentsDesktop
