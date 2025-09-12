import Section from '@components/layout/Section'

import STATIC from '@static/about'

const TaglineSection = () => {
  return (
    <Section>
      <div className="bg-tertiary text-primary rounded-lg p-6 lg:rounded-2xl lg:p-10">
        <h2 className="headline">{STATIC.TAGLINE}</h2>
      </div>
    </Section>
  )
}

export default TaglineSection
