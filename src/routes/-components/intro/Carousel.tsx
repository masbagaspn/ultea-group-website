import { AnimatePresence, motion as m } from 'motion/react'
import * as React from 'react'

import useCarousel from '@hooks/useCarousel'

import CarouselAction from '@routes/-components/intro/CarouselAction'
import CarouselCTAs from '@routes/-components/intro/CarouselCTAs'

import { cn } from '@lib/utils'

type IntroCarouselProps = {
  banners: any
}

const IntroCarousel = ({ banners }: IntroCarouselProps) => {
  const { index, direction, paginate, startAutoPlay, clearAutoPlay } = useCarousel(banners.length)

  React.useEffect(() => {
    startAutoPlay()
    return clearAutoPlay
  }, [])

  if (!banners.length) return null

  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden',
        'h-auto w-full rounded-lg',
        'lg:h-[100dvh] lg:w-auto lg:flex-[0] lg:rounded-2xl',
      )}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <m.div
          key={`hero-banner-${banners[index].imageUrl}`}
          className="flex h-full w-full overflow-hidden rounded-lg lg:rounded-2xl"
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: '0%' }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, stiffness: 0 }}
        >
          <m.img
            src={banners[index].image}
            className="w-full object-cover object-right lg:object-center"
          />
        </m.div>
      </AnimatePresence>

      <div
        className={cn(
          'absolute z-10 flex w-full justify-between',
          'bottom-0 flex p-3',
          'lg:bottom-0 lg:flex lg:p-10',
        )}
      >
        <CarouselCTAs active={banners[index]} />
        <CarouselAction index={index} total={banners.length} paginate={paginate} />
      </div>
    </div>
  )
}

export default IntroCarousel
