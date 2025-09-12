import Section from '@components/layout/Section'
import CompanyContainer from '@routes/-components/company/Contents'
import HOME_CONTENTS from '@static/home'

const CompanySection = () => {
  return (
    <Section className="flex flex-col gap-10 lg:gap-32">
      <div className="text-primary flex w-full flex-col gap-3 lg:grid lg:grid-cols-3">
        <h2 className="section-title">{HOME_CONTENTS.COMPANY_SECTION.HEADLINE}</h2>
        <p className="headline col-span-2">{HOME_CONTENTS.COMPANY_SECTION.SUBHEADLINE}</p>
      </div>
      <CompanyContainer />
    </Section>
  )
}

export default CompanySection
