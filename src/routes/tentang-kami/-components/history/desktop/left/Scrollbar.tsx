import { motion as m, MotionValue } from 'motion/react'

type AboutHistoryLeftContainerScrollbarDesktopProps = {
  progresses: MotionValue<string>[]
}

const AboutHistoryLeftContainerScrollbarDesktop = ({
  progresses,
}: AboutHistoryLeftContainerScrollbarDesktopProps) => {
  return (
    <div className="grid w-full grid-cols-3 gap-1">
      {progresses.map((progress, index) => (
        <div
          key={`about-history-desktop-scroll-bar-${index}`}
          className="bg-primary/50 relative h-1 w-full rounded-full"
        >
          <m.div
            style={{ width: progress }}
            className="bg-primary absolute top-0 left-0 h-1 w-full rounded-full"
          />
        </div>
      ))}
    </div>
  )
}

export default AboutHistoryLeftContainerScrollbarDesktop
