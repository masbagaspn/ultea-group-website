import Section from '@components/layout/section'
import copySectionContents from '@static/home/copy-section'

const CopySection = () => {
  return (
    <Section className="py-20">
      <div className="bg-tertiary rounded-2xl p-10">
        <h3 className="text-primary w-4/5 text-5xl">{copySectionContents.headline}</h3>
      </div>
    </Section>
  )
}

export default CopySection
