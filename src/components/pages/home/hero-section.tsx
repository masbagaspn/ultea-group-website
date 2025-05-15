import Section from '@components/layout/section'
import HeroCarousel from '@components/pages/home/hero-carousel'
import heroSectionContents from '@static/home/hero-section'

const HeroSection = () => {
  return (
    <Section className="flex min-h-[90vh] flex-col justify-between gap-10 lg:h-fit lg:justify-start">
      <div className="text-primary flex w-full flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-10">
        <h2 className="headline lg:col-span-2">{heroSectionContents.headline}</h2>
        <p className="subheadline inline-flex items-end">{heroSectionContents.subheadline}</p>
      </div>
      <HeroCarousel />
    </Section>
  )
}

export default HeroSection
