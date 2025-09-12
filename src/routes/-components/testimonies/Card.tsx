import { cn, generateInitials } from '@lib/utils'

import { Testimony } from '@models/testimony'

type TestimonyCardProps = {
  testimony: Testimony
  index: number
}

// #region variants
const colorVariants = {
  primary: 'bg-primary text-tertiary',
  secondary: 'bg-secondary text-primary',
  tertiary: 'bg-tertiary text-primary',
}

const sizeVariants = {
  base: 'text-sm lg:text-xl',
  large: 'text-sm lg:text-2xl',
}

const layoutVariants = {
  0: 'col-start-3 row-span-4 row-start-1',
  1: 'col-start-2 row-span-3 row-start-2',
  2: 'col-span-2 col-start-2 row-span-2 row-start-5',
  3: 'col-start-1 row-span-3 row-start-1',
  4: 'col-start-1 row-span-3 row-start-4',
}

const cardVariants: Record<number, string> = {
  0: cn(colorVariants.secondary, sizeVariants.base, layoutVariants[0]),
  1: cn(colorVariants.tertiary, sizeVariants.large, layoutVariants[1]),
  2: cn(colorVariants.primary, sizeVariants.base, layoutVariants[2]),
  3: cn(colorVariants.tertiary, sizeVariants.large, layoutVariants[3]),
  4: cn(colorVariants.secondary, sizeVariants.large, layoutVariants[4]),
}
// #endregion

const TestimonyCard = ({ testimony, index }: TestimonyCardProps) => {
  const details = `${testimony.location} ${testimony.age ? ' | ' : ''}`
  return (
    <div
      key={`home-testimony-${testimony.name}`}
      className={cn(
        'flex flex-col gap-3 rounded-lg p-3 text-sm lg:gap-6 lg:p-6',
        cardVariants[index],
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-primary flex h-8 w-8 items-center justify-center rounded-full bg-white p-4 text-sm lg:h-12 lg:w-12 lg:text-lg">
          {generateInitials(testimony.name)}
        </div>
        <div className="flex flex-col lg:gap-1">
          <h3 className="text-sm font-medium lg:text-xl">{testimony.name}</h3>
          <span className="text-xs lg:text-lg">
            {testimony.location && <span>{details}</span>}
            {testimony.age && <span className="capitalize">{` ${testimony.age} tahun`}</span>}
          </span>
        </div>
      </div>
      <p>{testimony.testimony}</p>
    </div>
  )
}

export default TestimonyCard
