import Section from '@components/layout/Section'

import STATIC from '@static/products'

const IntroSection = () => {
  return (
    <Section>
      <div className="text-primary flex w-full flex-col gap-3 lg:gap-6">
        <h2 className="section-title">{STATIC.HEADLINE}</h2>
        <p className="headline col-span-2">{STATIC.SUBHEADLINE}</p>
      </div>
    </Section>
  )
}

export default IntroSection
