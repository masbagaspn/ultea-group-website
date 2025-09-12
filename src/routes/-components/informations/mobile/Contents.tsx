import InformationCard from '@routes/-components/informations/mobile/Card'

import { Information } from '@models/information'

type InformationContentsMobileProps = {
  informations: Information[]
}

const InformationContentsMobile = ({ informations }: InformationContentsMobileProps) => {
  return (
    <div className="flex w-full flex-col">
      {informations.map((info, idx) => (
        <InformationCard
          key={`information-card-${info.title}`}
          information={info}
          total={informations.length}
          index={idx}
        />
      ))}
    </div>
  )
}

export default InformationContentsMobile
