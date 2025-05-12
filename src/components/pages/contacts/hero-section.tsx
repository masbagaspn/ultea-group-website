import Section from '@components/layout/section'
import heroSectionContents from '@static/contacts/hero-section'

const HeroSection = () => {
  return (
    <Section className="text-primary flex w-full flex-col gap-6">
      <h2 className="font-light uppercase">{heroSectionContents.headline}</h2>
      <p className="w-2/3 text-5xl">{heroSectionContents.subheadline}</p>
    </Section>
  )
}

export default HeroSection
