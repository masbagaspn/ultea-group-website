import Section from '@components/layout/Section'

import STATIC from '@static/about'

const AboutHeroMobileSection = () => {
  return (
    <Section className="flex flex-col gap-10">
      <div className="text-primary flex w-full flex-col gap-2">
        <h2 className="section-title">{STATIC.HISTORY.HEADLINE}</h2>
        <p className="headline">{STATIC.HISTORY.SUBHEADLINE}</p>
      </div>
      <div className="text-primary flex flex-col gap-6 text-sm font-light">
        {STATIC.HISTORY.CONTENTS.map((text) => (
          <p key={`about-hero-section-${text}`}>{text}</p>
        ))}
      </div>
    </Section>
  )
}

export default AboutHeroMobileSection
