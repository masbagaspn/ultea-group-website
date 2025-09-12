import Section from '@components/layout/Section'

import STATIC from '@static/about'

const InvitationSection = () => {
  return (
    <Section className="text-primary flex flex-col items-center gap-10 py-10 lg:gap-20">
      <h2 className="headline w-full text-center lg:w-2/3">{STATIC.INVITATION.HEADLINE}</h2>
      <p className="subheadline inline-flex w-full items-end text-center lg:w-2/3">
        {STATIC.INVITATION.CONTENTS}
      </p>
    </Section>
  )
}

export default InvitationSection
