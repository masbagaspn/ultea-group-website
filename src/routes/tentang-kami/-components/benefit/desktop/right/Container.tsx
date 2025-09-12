import STATIC from '@static/about'
import { motion as m, MotionValue } from 'motion/react'
import React from 'react'

type RightContainerProps = {
  opacities: MotionValue<number>[]
  positions: MotionValue<number>[]
} & React.ComponentPropsWithRef<'div'>

const RightContainer = React.forwardRef<HTMLDivElement, RightContainerProps>(
  ({ opacities, positions, ...rest }, ref) => {
    return (
      <div className="relative h-[240vh] w-1/2" ref={ref} {...rest}>
        <div className="text-tertiary sticky top-28 flex h-[80vh] items-end text-xl">
          <div className="relative w-full">
            {STATIC.BENEFIT.CONTENTS.map((content, index) => (
              <m.p
                key={`about-benefit-right-container-contents-${index}`}
                style={{ opacity: opacities[index], y: positions[index] }}
                className="absolute bottom-16"
              >
                {content}
              </m.p>
            ))}
          </div>
        </div>
      </div>
    )
  },
)

export default RightContainer
