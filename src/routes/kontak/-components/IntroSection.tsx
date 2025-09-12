import Section from '@components/layout/Section'
import CONTACT_CONTENTS from '@static/contacts'

const IntroSection = () => {
  return (
    <Section className="text-primary flex w-full flex-col gap-6">
      <h2 className="section-title">{CONTACT_CONTENTS.HEADLINE}</h2>
      <p className="headline w-full lg:w-2/3">{CONTACT_CONTENTS.SUBHEADLINE}</p>
    </Section>
  )
}

export default IntroSection
