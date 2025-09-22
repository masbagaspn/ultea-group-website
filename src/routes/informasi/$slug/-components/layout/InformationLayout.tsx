import Section from '@components/layout/Section'
import InformationContent from '../contents/InformationContent'
import InformationHeader from './header/InformationHeader'

const InformationLayout = () => {
  return (
    <Section className="lg:flex lg:flex-col lg:gap-20 lg:px-80">
      <InformationHeader />
      <InformationContent />
    </Section>
  )
}

export default InformationLayout
