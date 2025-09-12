import Section from '@components/layout/Section'

import HOME_CONTENTS from '@static/home'

const CopySection = () => {
  return (
    <Section className="py-10 lg:py-0">
      <div className="lg:bg-tertiary rounded-2xl p-0 lg:p-20">
        <h3 className="text-primary headline w-full lg:w-4/5">
          {HOME_CONTENTS.TAGLINE_SECTION.HEADLINE}
        </h3>
      </div>
    </Section>
  )
}

export default CopySection
