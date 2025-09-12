import Section from '@components/layout/Section'

type RulesSectionProps = {
  rules: string[]
}

const RulesSection = ({ rules }: RulesSectionProps) => {
  if (!rules.length) return null

  return (
    <Section className="flex flex-col gap-6 lg:flex-row lg:gap-20 lg:px-40 lg:py-10">
      <h2 className="section-title w-42 text-neutral-500">aturan konsumsi</h2>
      <ul className="flex flex-1 flex-col gap-6">
        {rules.map((rule) => (
          <li key={`product-details-${rule}`} className="text-base lg:text-xl">
            {rule}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default RulesSection
