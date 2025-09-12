import Section from '@components/layout/Section'
import TestimonyContents from '@routes/-components/testimonies/Contents'

import { PaginationResponse } from '@models/payload'
import { Testimony } from '@models/testimony'

import HOME_CONTENTS from '@static/home'

type TestimoniesSectionProps = {
  testimonies: PaginationResponse<Testimony>
}

const TestimoniesSection = ({ testimonies }: TestimoniesSectionProps) => {
  if (!testimonies.data.length) return null

  const SPLIT_HEADLINE = HOME_CONTENTS.TESTIMONIES_SECTION.HEADLINE.split(', ')

  const text = (word: string, index: number) => {
    const addComma = index === 0 ? ',' : ''
    return `${word}${addComma}`
  }

  return (
    <Section>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:gap-10">
        <h2 className="text-primary col-start-2 row-start-1 inline-flex w-full flex-col text-3xl lg:items-center lg:justify-center lg:text-xl">
          {SPLIT_HEADLINE.map((word, idx) => (
            <span key={`home-testimony-headline-${idx}`}>{text(word, idx)}</span>
          ))}
        </h2>
        <TestimonyContents testimonies={testimonies.data} />
      </div>
    </Section>
  )
}

export default TestimoniesSection
