import Section from '@components/layout/section'
import copySectionContents from '@static/home/copy-section'

const CopySection = () => {
  return (
    <Section className="py-10 lg:py-0">
      <div className="lg:bg-tertiary rounded-2xl p-0 lg:p-20">
        <h3 className="text-primary headline w-full lg:w-4/5">{copySectionContents.headline}</h3>
      </div>
    </Section>
  )
}

export default CopySection
