import Section from '@components/layout/section'
import heroSectionContents from '@static/produk/hero-section'

const HeroSection = () => {
  return (
    <Section>
      <div className="text-primary flex w-full flex-col gap-6">
        <h2 className="font-light uppercase">{heroSectionContents.headline}</h2>
        <p className="col-span-2 text-5xl">{heroSectionContents.subheadline}</p>
      </div>
    </Section>
  )
}

export default HeroSection
