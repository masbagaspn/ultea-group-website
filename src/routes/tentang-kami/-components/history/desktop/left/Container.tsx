import { MotionValue } from 'motion/react'

import AboutHistoryDesktopHeader from '@routes/tentang-kami/-components/history/desktop/left/Header'
import AboutHistoryDesktopScrollBar from '@routes/tentang-kami/-components/history/desktop/left/Scrollbar'

type AboutHistoryLeftContainerDesktopProps = {
  progresses: MotionValue<string>[]
}

const AboutHistoryLeftContainerDesktop = ({
  progresses,
}: AboutHistoryLeftContainerDesktopProps) => {
  return (
    <div className="sticky top-28 flex h-[80vh] w-1/2 flex-col items-center justify-between pb-10">
      <AboutHistoryDesktopHeader />
      <AboutHistoryDesktopScrollBar progresses={progresses} />
    </div>
  )
}

export default AboutHistoryLeftContainerDesktop
