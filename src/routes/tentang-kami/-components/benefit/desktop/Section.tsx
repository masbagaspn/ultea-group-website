import { useScroll, useTransform } from 'motion/react'
import React from 'react'

import Section from '@components/layout/Section'

import LeftContainer from '@routes/tentang-kami/-components/benefit/desktop/left/Container'
import RightContainer from '@routes/tentang-kami/-components/benefit/desktop/right/Container'

const BenefitSection = () => {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacities = [
    useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0]),
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
  ]

  const positions = [
    useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -200]),
    useTransform(scrollYProgress, [0.5, 0.6], [200, 0]),
  ]

  const progresses = [
    useTransform(scrollYProgress, [0, 0.4], ['0%', '100%']),
    useTransform(scrollYProgress, [0.6, 1], ['0%', '100%']),
  ]

  return (
    <Section className="py-10">
      <div className="bg-primary flex min-h-[80vh] gap-10 rounded-2xl p-10">
        <LeftContainer progresses={progresses} />
        <RightContainer ref={containerRef} opacities={opacities} positions={positions} />
      </div>
    </Section>
  )
}

export default BenefitSection
