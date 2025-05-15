import Section from '@components/layout/section'
import heroSectionContents from '@static/tentang-kami/hero'
import { motion as m, useScroll, useTransform } from 'motion/react'
import * as React from 'react'
import { useMediaQuery } from 'usehooks-ts'

const HeroSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return <DesktopHeroSection />

  return <MobileHeroSection />
}

const MobileHeroSection = () => {
  return (
    <Section className="flex flex-col gap-10">
      <div className="text-primary flex w-full flex-col gap-2">
        <h2 className="section-title">{heroSectionContents.headline}</h2>
        <p className="headline">{heroSectionContents.subheadline}</p>
      </div>
      <div className="text-primary flex flex-col gap-6 text-sm font-light">
        {heroSectionContents.contents.map((text) => (
          <p key={`about-hero-section-${text}`}>{text}</p>
        ))}
      </div>
    </Section>
  )
}

const DesktopHeroSection = () => {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -200])
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0])
  const y2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [200, 0, 0, -200])
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1])
  const y3 = useTransform(scrollYProgress, [0.7, 0.8, 1], [200, 0, 0])

  const progress1 = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%'])
  const progress2 = useTransform(scrollYProgress, [0.4, 0.6], ['0%', '100%'])
  const progress3 = useTransform(scrollYProgress, [0.8, 1], ['0%', '100%'])

  return (
    <Section className="py-10">
      <div className="flex min-h-[80vh] gap-10">
        <div className="sticky top-28 flex h-[80vh] w-1/2 flex-col items-center justify-between pb-10">
          <div className="text-primary flex w-full flex-col gap-6">
            <h2 className="font-light uppercase">{heroSectionContents.headline}</h2>
            <p className="col-span-2 text-5xl">{heroSectionContents.subheadline}</p>
          </div>
          <div className="grid w-full grid-cols-3 gap-1">
            <div className="bg-primary/50 relative h-1 w-full rounded-full">
              <m.div
                style={{ width: progress1 }}
                className="bg-primary absolute top-0 left-0 h-1 w-full rounded-full"
              />
            </div>
            <div className="bg-primary/50 relative h-1 w-full rounded-full">
              <m.div
                style={{ width: progress2 }}
                className="bg-primary absolute top-0 left-0 h-1 w-full rounded-full"
              />
            </div>
            <div className="bg-primary/50 relative h-1 w-full rounded-full">
              <m.div
                style={{ width: progress3 }}
                className="bg-primary absolute top-0 left-0 h-1 w-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div ref={containerRef} className="relative h-[400vh] w-1/2">
          <div className="text-primary sticky top-28 flex h-[80vh] items-end text-xl">
            <div className="relative w-full">
              <m.p
                style={{ opacity: opacity1, y: y1 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {heroSectionContents.contents[0]}
              </m.p>
              <m.p
                style={{ opacity: opacity2, y: y2 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {heroSectionContents.contents[1]}
              </m.p>
              <m.p
                style={{ opacity: opacity3, y: y3 }}
                className="absolute bottom-1/2 h-fit -translate-y-1/2"
              >
                {heroSectionContents.contents[2]}
              </m.p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
