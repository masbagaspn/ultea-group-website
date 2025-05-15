import Section from '@components/layout/section'
import heroSectionContents from '@static/produk/hero-section'

const HeroSection = () => {
  return (
    <Section>
      <div className="text-primary flex w-full flex-col gap-3 lg:gap-6">
        <h2 className="section-title">{heroSectionContents.headline}</h2>
        <p className="headline col-span-2">{heroSectionContents.subheadline}</p>
      </div>
    </Section>
  )
}

export default HeroSection
