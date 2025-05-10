import Section from '@components/layout/section'
import { cn, generateInitials } from '@lib/utils'
import testimonialSectionContents from '@static/home/testimonials-section'

const TestimonySection = () => {
  return (
    <Section>
      <div className="grid grid-cols-3 grid-rows-6 gap-10">
        <h2 className="text-primary col-start-2 row-start-1 inline-flex w-full flex-col items-center justify-center text-xl">
          {testimonialSectionContents.headline.split(', ').map((word, idx) => (
            <span>{`${word}${idx === 0 ? ',' : ''}`}</span>
          ))}
        </h2>
        {testimonialSectionContents.contents.map((testimony, idx) => (
          <div
            key={`home-testimony-${testimony.name}`}
            className={cn('flex flex-col gap-6 rounded-lg p-6', {
              'bg-secondary text-primary col-start-3 row-span-4 row-start-1 text-xl': idx === 0,
              'bg-tertiary text-primary col-start-2 row-span-3 row-start-2 text-2xl': idx === 1,
              'bg-primary text-tertiary col-span-2 col-start-2 row-span-2 row-start-5 text-xl':
                idx === 2,
              'bg-tertiary text-primary col-start-1 row-span-3 row-start-1 text-2xl': idx === 3,
              'bg-secondary text-primary col-start-1 row-span-3 row-start-4 text-2xl': idx === 4,
            })}
          >
            <div className="flex items-center gap-3">
              <div className="text-primary flex h-12 w-12 items-center justify-center rounded-full bg-white p-4 text-lg">
                {generateInitials(testimony.name)}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium">{testimony.name}</h3>
                <span className="text-lg">
                  {testimony.location && (
                    <span>{`${testimony.location} ${testimony.age ? ' | ' : ''}`}</span>
                  )}
                  {testimony.age && <span className="capitalize">{` ${testimony.age} tahun`}</span>}
                </span>
              </div>
            </div>
            <p>{testimony.testimony}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TestimonySection
