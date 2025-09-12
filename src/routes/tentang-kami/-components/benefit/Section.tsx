import { useMediaQuery } from 'usehooks-ts'

import BenefitSectionDesktop from '@routes/tentang-kami/-components/benefit/desktop/Section'
import BenefitSectionMobile from '@routes/tentang-kami/-components/benefit/mobile/Section'

const BenefitsSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return <BenefitSectionDesktop />

  return <BenefitSectionMobile />
}

export default BenefitsSection
