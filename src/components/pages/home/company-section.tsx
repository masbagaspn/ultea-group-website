import Section from '@components/layout/section'
import companySectionContents from '@static/home/company-section'

const CompanySection = () => {
  return (
    <Section className="flex flex-col gap-32">
      <div className="grid w-full grid-cols-3">
        <h2 className="font-light uppercase">{companySectionContents.headline}</h2>
        <p className="text-primary col-span-2 text-5xl">{companySectionContents.subheadline}</p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {companySectionContents.contents.map((content, index) => {
          const Icon = content.icon
          return (
            <div key={`home-company-content-${index}`} className="flex flex-col gap-10">
              <Icon size={80} strokeWidth={1} className="text-primary" />
              <p className="text-xl font-light text-neutral-600">{content.text}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default CompanySection
