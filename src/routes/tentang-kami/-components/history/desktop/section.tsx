import { useScroll, useTransform } from 'motion/react'
import * as React from 'react'

import Section from '@components/layout/Section'

import AboutHeroDesktopLeftContainer from '@routes/tentang-kami/-components/history/desktop/left/Container'
import AboutHeroDesktopRightContainer from '@routes/tentang-kami/-components/history/desktop/right/Container'

const AboutHeroDesktopSection = () => {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacities = [
    useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]),
    useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]),
  ]

  const positions = [
    useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -200]),
    useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [200, 0, 0, -200]),
    useTransform(scrollYProgress, [0.7, 0.8, 1], [200, 0, 0]),
  ]

  const progresses = [
    useTransform(scrollYProgress, [0, 0.2], ['0%', '100%']),
    useTransform(scrollYProgress, [0.4, 0.6], ['0%', '100%']),
    useTransform(scrollYProgress, [0.8, 1], ['0%', '100%']),
  ]

  return (
    <Section className="py-10">
      <div className="flex min-h-[80vh] gap-10">
        <AboutHeroDesktopLeftContainer progresses={progresses} />
        <AboutHeroDesktopRightContainer
          ref={containerRef}
          opacities={opacities}
          positions={positions}
        />
      </div>
    </Section>
  )
}

{
  /* <div ref={containerRef} className="relative h-[400vh] w-1/2">
          <div className="text-primary sticky top-28 flex h-[80vh] items-end text-xl">
            <div className="relative w-full">
              <m.p
                style={{ opacity: opacity1, y: y1 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {STATIC.HERO.CONTENTS[0]}
              </m.p>
              <m.p
                style={{ opacity: opacity2, y: y2 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {STATIC.HERO.CONTENTS[1]}
              </m.p>
              <m.p
                style={{ opacity: opacity3, y: y3 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {STATIC.HERO.CONTENTS[2]}
              </m.p>
            </div>
          </div>
        </div> */
}

export default AboutHeroDesktopSection
