import Section from '@components/layout/section'
import firstSectionContents from '@static/tentang-kami/first'
import { motion as m, useScroll, useTransform } from 'motion/react'
import * as React from 'react'

const FirstSection = () => {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.45, 0.5], [1, 1, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -200])
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
  const y2 = useTransform(scrollYProgress, [0.5, 0.6], [200, 0])

  const progress1 = useTransform(scrollYProgress, [0, 0.4], ['0%', '100%'])
  const progress2 = useTransform(scrollYProgress, [0.6, 1], ['0%', '100%'])

  return (
    <Section className="py-10">
      <div className="bg-primary flex min-h-[80vh] gap-10 rounded-2xl p-10">
        <div className="sticky top-28 flex h-[80vh] w-1/2 flex-col items-center justify-between pb-10">
          <div className="text-tertiary flex w-full flex-col gap-6">
            <p className="col-span-2 inline-flex flex-col text-5xl">
              {firstSectionContents.subheadline.split(': ').map((text, idx) => (
                <span>
                  {text}
                  {idx === 0 && ': '}
                </span>
              ))}
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-1">
            <div className="bg-tertiary/50 relative h-1 w-full rounded-full">
              <m.div
                style={{ width: progress1 }}
                className="bg-tertiary absolute top-0 left-0 h-1 w-full rounded-full"
              />
            </div>
            <div className="bg-tertiary/50 relative h-1 w-full rounded-full">
              <m.div
                style={{ width: progress2 }}
                className="bg-tertiary absolute top-0 left-0 h-1 w-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div ref={containerRef} className="relative h-[240vh] w-1/2">
          <div className="text-tertiary sticky top-28 flex h-[80vh] items-end text-xl">
            <div className="relative w-full">
              <m.p style={{ opacity: opacity1, y: y1 }} className="absolute bottom-16">
                {firstSectionContents.contents[0]}
              </m.p>
              <m.p style={{ opacity: opacity2, y: y2 }} className="absolute bottom-16">
                {firstSectionContents.contents[1]}
              </m.p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FirstSection
