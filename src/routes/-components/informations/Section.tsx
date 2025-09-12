import { useMediaQuery } from 'usehooks-ts'

import Section from '@components/layout/Section'

import InformationContentsDesktop from '@routes/-components/informations/desktop/Contents'
import InformationContentsMobile from '@routes/-components/informations/mobile/Contents'

import { Information } from '@models/information'
import { PaginationResponse } from '@models/payload'

type InformationSectionProps = {
  informations: PaginationResponse<Information>
}

const InformationSection = ({ informations }: InformationSectionProps) => {
  const isDesktop = useMediaQuery('(min-width:1024px)')

  if (!informations.data.length) return null

  return (
    <Section className="text-primary flex flex-col gap-10">
      <h2 className="section-title">most recent articles</h2>
      {isDesktop ? (
        <InformationContentsDesktop informations={informations.data} />
      ) : (
        <InformationContentsMobile informations={informations.data} />
      )}
    </Section>
  )
}

export default InformationSection
