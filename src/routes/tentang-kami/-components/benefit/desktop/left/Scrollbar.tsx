import { motion as m, MotionValue } from 'motion/react'

type LeftContainerScrollbarProps = {
  progresses: MotionValue<string>[]
}

const LeftContainerScrollbar = ({ progresses }: LeftContainerScrollbarProps) => {
  return (
    <div className="grid w-full grid-cols-2 gap-1">
      {progresses.map((progress, index) => (
        <div
          key={`about-benefits-left-container-scrollbar-${index}`}
          className="bg-tertiary/50 relative h-1 w-full rounded-full"
        >
          <m.div
            style={{ width: progress }}
            className="bg-tertiary absolute top-0 left-0 h-1 w-full rounded-full"
          />
        </div>
      ))}
    </div>
  )
}

export default LeftContainerScrollbar
