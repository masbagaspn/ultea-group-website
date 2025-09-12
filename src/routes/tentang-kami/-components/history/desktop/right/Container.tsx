import { motion as m, MotionValue } from 'motion/react'
import * as React from 'react'

import STATIC from '@static/about'

type AboutHeroRightContainerDesktopProps = {
  opacities: MotionValue<number>[]
  positions: MotionValue<number>[]
} & React.ComponentPropsWithRef<'div'>

const AboutHeroRightContainerDesktop = React.forwardRef<
  HTMLDivElement,
  AboutHeroRightContainerDesktopProps
>(({ opacities, positions, className, ...rest }, ref) => {
  return (
    <div ref={ref} className="relative h-[400vh] w-1/2" {...rest}>
      <div className="text-primary sticky top-28 flex h-[80vh] items-end text-xl">
        <div className="relative w-full">
          {STATIC.HISTORY.CONTENTS.map((content, index) => (
            <m.p
              key={`about-hero-desktop-right-Container-contents-${index}`}
              style={{ opacity: opacities[index], y: positions[index] }}
              className="absolute bottom-1/2 h-fit -translate-y-1/2"
            >
              {content}
            </m.p>
          ))}
        </div>
      </div>
    </div>
  )
})

export default AboutHeroRightContainerDesktop
