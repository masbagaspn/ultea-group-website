import { Link } from '@tanstack/react-router'

import { cn } from '@lib/utils'

type CarouseCTAsProps = {
  active: any
}

const CarouselCTAs = ({ active }: CarouseCTAsProps) => {
  const ctas = JSON.parse(active.ctas)

  return (
    <div className="flex w-full justify-between gap-2 lg:justify-start lg:gap-3">
      {ctas.map((action: { name: string; link: string }) => (
        <Link
          key={`hero-carousel-cta-${active.id}-${action.name}`}
          to={action.link}
          className={cn(
            'text-primary rounded-full bg-white font-medium tracking-tighter capitalize transition hover:bg-white/70',
            'w-full px-3 py-1.5 text-center text-sm',
            'lg:w-fit lg:px-6 lg:py-3 lg:text-base',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {action.name}
        </Link>
      ))}
    </div>
  )
}

export default CarouselCTAs
