import { useMediaQuery } from 'usehooks-ts'

import AboutHistoryDesktopSection from '@routes/tentang-kami/-components/history/desktop/section'
import AboutHistoryMobileSection from '@routes/tentang-kami/-components/history/mobile/section'

const HistorySection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return <AboutHistoryDesktopSection />

  return <AboutHistoryMobileSection />
}
export default HistorySection
