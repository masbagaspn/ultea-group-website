import Section from '@components/layout/section'
import secondSectionContents from '@static/tentang-kami/second'

const SecondSection = () => {
  return (
    <Section className="text-primary flex flex-col items-center gap-10 py-10 lg:gap-20">
      <h2 className="headline w-full text-center lg:w-2/3">{secondSectionContents.headline}</h2>
      <p className="subheadline inline-flex w-full items-end text-center lg:w-2/3">
        {secondSectionContents.contents}
      </p>
    </Section>
  )
}

export default SecondSection
