import Section from '@components/layout/section'
import { cn } from '@lib/utils'
import { useNavigate } from '@tanstack/react-router'
import { AnimatePresence, LayoutGroup, motion as m } from 'motion/react'
import React from 'react'

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
    <Section className="flex flex-col gap-10">
      <h2 className="font-light uppercase">most recent articles</h2>
      <LayoutGroup>
        <m.div layout className="grid grid-cols-4 gap-6">
          {articlesDummy.map((article, idx) => (
            <m.article
              key={`information-${idx}`}
              onClick={() => handleSelectInformation(article)}
              style={{
                justifyContent:
                  selectedInformation.title === article.title ? 'end' : 'space-between',
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
    </Section>
  )
}

export default InformationSection
