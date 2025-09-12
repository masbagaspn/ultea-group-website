import Section from '@components/layout/Section'

import IntroCarousel from '@routes/-components/intro/Carousel'

import HOME_CONTENTS from '@static/home'

type IntroSectionProps = {
  banners: any
}

const IntroSection = ({ banners }: IntroSectionProps) => {
  return (
    <Section className="flex flex-col justify-between gap-10 lg:h-fit lg:justify-start">
      <div className="text-primary flex w-full flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-10">
        <h2 className="headline lg:col-span-2">{HOME_CONTENTS.INTRO_SECTION.HEADLINE}</h2>
        <p className="subheadline inline-flex items-end">
          {HOME_CONTENTS.INTRO_SECTION.SUBHEADLINE}
        </p>
      </div>
      <IntroCarousel banners={banners.data} />
    </Section>
  )
}

export default IntroSection
