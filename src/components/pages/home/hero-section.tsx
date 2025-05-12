import HeroCarousel from '@components/pages/home/hero-carousel'
import heroSectionContents from '@static/home/hero-section'

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10 p-10 pt-32">
      <div className="text-primary grid w-full grid-cols-3 gap-10">
        <h2 className="col-span-2 text-5xl">{heroSectionContents.headline}</h2>
        <p className="inline-flex items-end text-xl font-light">
          {heroSectionContents.subheadline}
        </p>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default HeroSection
