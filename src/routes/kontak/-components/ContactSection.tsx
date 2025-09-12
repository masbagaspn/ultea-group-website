import Section from '@components/layout/Section'

import Offline from '@routes/kontak/-components/Offline'
import Online from '@routes/kontak/-components/Online'

const ContactSection = () => {
  return (
    <Section className="text-primary flex flex-col lg:gap-10">
      <Offline />
      <Online />
    </Section>
  )
}

export default ContactSection
