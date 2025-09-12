import { MotionValue } from 'motion/react'

import LeftContainerHeader from '@routes/tentang-kami/-components/benefit/desktop/left/Header'
import LeftContainerScrollbar from '@routes/tentang-kami/-components/benefit/desktop/left/Scrollbar'

type LeftContainerDesktopProps = {
  progresses: MotionValue<string>[]
}

const LeftContainerDesktop = ({ progresses }: LeftContainerDesktopProps) => {
  return (
    <div className="sticky top-28 flex h-[80vh] w-1/2 flex-col items-center justify-between pb-10">
      <LeftContainerHeader />
      <LeftContainerScrollbar progresses={progresses} />
    </div>
  )
}

export default LeftContainerDesktop
