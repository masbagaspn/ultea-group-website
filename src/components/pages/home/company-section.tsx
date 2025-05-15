import Section from '@components/layout/section'
import { cn } from '@lib/utils'
import companySectionContents from '@static/home/company-section'

const CompanySection = () => {
  return (
    <Section className="flex flex-col gap-10 lg:gap-32">
      <div className="text-primary flex w-full flex-col gap-3 lg:grid lg:grid-cols-3">
        <h2 className="section-title">{companySectionContents.headline}</h2>
        <p className="headline col-span-2">{companySectionContents.subheadline}</p>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-10">
        {companySectionContents.contents.map((content, index) => {
          const Icon = content.icon
          return (
            <div
              key={`home-company-content-${index}`}
              className={cn('flex flex-col', 'gap-4', 'lg:gap-10')}
            >
              <Icon size={80} strokeWidth={1} className="text-primary w-10 lg:w-20" />
              <p className="flex-1 text-xs font-light text-neutral-600 lg:text-xl">
                {content.text}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default CompanySection
