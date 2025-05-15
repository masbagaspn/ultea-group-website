import useCarousel from '@hooks/useCarousel'
import { cn } from '@lib/utils'
import heroSectionContents from '@static/home/hero-section'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion as m } from 'motion/react'
import * as React from 'react'

const HeroCarousel = () => {
  const banners = heroSectionContents.contents
  const { index, direction, paginate, startAutoPlay, clearAutoPlay } = useCarousel(banners.length)

  React.useEffect(() => {
    startAutoPlay()
    return clearAutoPlay
  }, [])

  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden',
        'h-auto w-full rounded-lg',
        'lg:h-[100dvh] lg:w-auto lg:rounded-2xl',
      )}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <m.div
          key={`hero-banner-${banners[index].image}`}
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
        <div className="flex w-full justify-between gap-2 lg:justify-start lg:gap-3">
          {banners[index].cta.map((action) => (
            <Link
              key={`hero-carousel-cta-${banners[index].id}-${action.text}`}
              to={action.links}
              className={cn(
                'text-primary rounded-full bg-white font-medium tracking-tighter capitalize transition hover:bg-white/70',
                'w-full px-3 py-1.5 text-center text-sm',
                'lg:w-fit lg:px-6 lg:py-3 lg:text-base',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {action.text}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => paginate(-1, true)}
            className="bg-primary text-tertiary hover:bg-primary/90 transtition cursor-pointer rounded-full p-2"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex w-8 items-center justify-center text-white">
            <span className="text-lg">{index + 1}</span>
            <span className="text-base font-light">/{banners.length}</span>
          </div>
          <button
            onClick={() => paginate(1, true)}
            className="bg-primary text-tertiary hover:bg-primary/90 transtition cursor-pointer rounded-full p-2"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
