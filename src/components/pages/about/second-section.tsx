import Section from '@components/layout/section'
import secondSectionContents from '@static/tentang-kami/second'

const SecondSection = () => {
  return (
    <Section className="text-primary flex flex-col items-center gap-20 py-10">
      <h2 className="w-2/3 text-center text-5xl">{secondSectionContents.headline}</h2>
      <p className="inline-flex w-2/3 items-end text-center text-xl">
        {secondSectionContents.contents}
      </p>
    </Section>
  )
}

export default SecondSection
