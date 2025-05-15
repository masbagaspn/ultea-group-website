import Section from '@components/layout/section'
import heroSectionContents from '@static/contacts/hero-section'

const HeroSection = () => {
  return (
    <Section className="text-primary flex w-full flex-col gap-6">
      <h2 className="section-title">{heroSectionContents.headline}</h2>
      <p className="headline w-full lg:w-2/3">{heroSectionContents.subheadline}</p>
    </Section>
  )
}

export default HeroSection
