import Section from '@components/layout/section'
import { cn } from '@lib/utils'
import { Link, useNavigate } from '@tanstack/react-router'
import { AnimatePresence, LayoutGroup, motion as m } from 'motion/react'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

const articlesDummy = [
  {
    title: 'Article Title 1',
    type: 'Article Type',
    category: 'Article Category',
  },
  {
    title: 'Article Title 2',
    type: 'Article Type',
    category: 'Article Category',
  },
  {
    title: 'Article Title 3',
    type: 'Article Type',
    category: 'Article Category',
  },
]

type Information = {
  title: string
  type: string
  category: string
}

const InformationSection = () => {
  const isDesktop = useMediaQuery('(min-width:1024px)')
  return (
    <Section className="text-primary flex flex-col gap-10">
      <h2 className="section-title">most recent articles</h2>
      {isDesktop ? <DesktopInformation /> : <MobileInformation />}
    </Section>
  )
}

const DesktopInformation = () => {
  const navigate = useNavigate()
  const [selectedInformation, setSelectedInformation] = React.useState(articlesDummy[0])

  const handleSelectInformation = (information: Information) => {
    if (information.title === selectedInformation.title) {
      navigate({ to: '/informasi/$informasiId', params: { informasiId: information.title } })
    } else {
      setSelectedInformation(information)
    }
  }
  return (
    <LayoutGroup>
      <m.div layout className="grid grid-cols-4 gap-6">
        {articlesDummy.map((article, idx) => (
          <m.article
            key={`information-${idx}`}
            onClick={() => handleSelectInformation(article)}
            style={{
              justifyContent: selectedInformation.title === article.title ? 'end' : 'space-between',
            }}
            className={cn(
              'relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-6 text-white',
              {
                'col-span-2 aspect-video h-auto w-full gap-3':
                  selectedInformation.title === article.title,
                'gap-3': selectedInformation.title !== article.title,
              },
            )}
            layout
          >
            <m.div
              layout
              className="z-10 flex w-full items-center justify-between gap-3 font-light text-white"
            >
              <m.span className="z-10">{article.type}</m.span>
              <AnimatePresence>
                {selectedInformation.title === article.title && (
                  <m.div className="h-[1px] flex-1 bg-white" />
                )}
              </AnimatePresence>
              <m.span className="z-10">{article.category}</m.span>
            </m.div>
            <m.h3 className="z-10 w-full text-2xl font-medium will-change-transform">
              {article.title}
            </m.h3>
            <img className="absolute top-0 left-0 z-0 h-full w-full rounded-2xl bg-black object-cover" />
          </m.article>
        ))}
      </m.div>
    </LayoutGroup>
  )
}

const MobileInformation = () => {
  return (
    <div className="flex w-full flex-col">
      {articlesDummy.map((article, idx) => (
        <Link
          to="/informasi/$informasiId"
          params={{ informasiId: article.title }}
          key={`information-card-${article.title}`}
        >
          <article
            className={cn('text-primary flex flex-col gap-6 py-6', 'lg:border-none', {
              'border-primary/30 border-t': idx !== articlesDummy.length,
              'border-b': idx === articlesDummy.length - 1,
            })}
          >
            <img
              src="/assets/image-placeholder.webp"
              className="bg-tertiary aspect-video h-auto w-full rounded-lg object-cover lg:rounded-2xl"
            />
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex w-full justify-between text-xs font-light text-black lg:text-base">
                <span className="font-normal uppercase">{article.category}</span>
                <span>{article.type}</span>
              </div>
              <h3 className="text-xl font-medium text-nowrap text-ellipsis lg:text-2xl">
                {article.title}
              </h3>
              <p className="inline-flex flex-col items-start gap-1 text-xs lg:text-base">
                by Article Author
                <span className="text-xs text-neutral-500 lg:text-sm">{`${new Date().toUTCString()}`}</span>
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default InformationSection
