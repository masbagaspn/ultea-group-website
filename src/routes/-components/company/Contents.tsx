import { cn } from '@lib/utils'

import HOME_CONTENTS from '@static/home'

const CompanyContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-10">
      {HOME_CONTENTS.COMPANY_SECTION.CONTENTS.map((CONTENT, index) => {
        const Icon = CONTENT.ICON

        return (
          <div
            key={`home-company-content-${index}`}
            className={cn('flex flex-col', 'gap-4', 'lg:gap-10')}
          >
            <Icon size={80} strokeWidth={1} className="text-primary w-10 lg:w-20" />
            <p className="flex-1 text-xs font-light text-neutral-600 lg:text-xl">{CONTENT.TEXT}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CompanyContainer
