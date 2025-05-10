import heroSectionContents from '@static/home/hero-section'

import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion as m } from 'motion/react'
import * as React from 'react'

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10 p-10 pt-32">
      <div className="text-primary grid w-full grid-cols-3 gap-10">
        <h2 className="col-span-2 text-5xl">{heroSectionContents.headline}</h2>
        <p className="inline-flex items-end text-xl font-light">
          {heroSectionContents.subheadline}
        </p>
      </div>
      <HeroCarousel />
    </section>
  )
}

const HeroCarousel = () => {
  const banners = heroSectionContents.contents
  const [index, setIndex] = React.useState(0)
  const [prevIndex, setPrevIndex] = React.useState(banners.length - 1)
  const [direction, setDirection] = React.useState(1)
  const intervalRef = React.useRef<number | null>(null)

  const clearAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const startAutoPlay = () => {
    clearAutoPlay()
    intervalRef.current = setInterval(() => {
      paginate(1, false)
    }, 3000)
  }

  const paginate = React.useCallback(
    (dir: -1 | 1, isManual: boolean = true) => {
      setPrevIndex(index)
      setDirection(dir)
      setIndex((prev) => (prev + dir + banners.length) % banners.length)

      if (isManual) {
        startAutoPlay()
      }
    },
    [index],
  )

  React.useEffect(() => {
    startAutoPlay()
    return clearAutoPlay
  }, [])

  return (
    <div className="relative h-[85vh] w-full overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <m.div
          key={`hero-banner-${banners[index].image}`}
          className="flex h-full w-full overflow-hidden rounded-xl"
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: '0%' }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, stiffness: 0 }}
        >
          <m.img src={banners[index].image} className="w-full object-cover object-center" />
        </m.div>
      </AnimatePresence>
      <div className="absolute bottom-10 z-10 flex w-full justify-between px-10">
        <div className="flex gap-3">
          <Link
            to={banners[index].shopee}
            className="text-primary rounded-full bg-white px-8 py-3 font-medium tracking-tighter transition hover:bg-white/70"
          >
            Shopee
          </Link>
          <Link
            to={banners[index].tokopedia}
            className="text-primary rounded-full bg-white px-8 py-3 font-medium tracking-tighter transition hover:bg-white/70"
          >
            Tokopedia
          </Link>
        </div>
        <div className="flex items-center gap-3">
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

export default HeroSection
