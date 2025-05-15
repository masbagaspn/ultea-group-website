import PageLayout from '@components/layout/page-layout'
import Section from '@components/layout/section'
import { cn } from '@lib/utils'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ChevronDown, Search } from 'lucide-react'
import { AnimatePresence, motion as m } from 'motion/react'
import React from 'react'

export const Route = createFileRoute('/informasi/')({
  component: RouteComponent,
})

const types = ['semua informasi', 'artikel', 'video', 'booklet']

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

function RouteComponent() {
  const [showTypeFilter, setShowTypeFilter] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState(types[0])

  const handleSelectType = (type: string) => {
    setSelectedType(type)
    setShowTypeFilter(false)
  }

  return (
    <PageLayout>
      <Section className="flex flex-col gap-10 lg:gap-20">
        <div className="text-primary flex flex-col gap-10 lg:gap-20">
          <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
            <h2 className="section-title">informasi</h2>
            <div className="flex w-full gap-3 lg:w-fit lg:gap-6">
              <div className="relative flex w-1/2 flex-col gap-2">
                <button
                  onClick={() => setShowTypeFilter(!showTypeFilter)}
                  className={cn(
                    'border-primary flex cursor-pointer items-center justify-between border-[0.5px] capitalize',
                    'w-full rounded px-2 py-1.5 text-left text-sm',
                    'lg:w-60 lg:rounded-lg lg:px-6 lg:py-3 lg:text-base',
                  )}
                >
                  {selectedType}
                  <span>
                    <ChevronDown
                      strokeWidth={1}
                      className={cn('w-4 transition duration-250 lg:w-6', {
                        'rotate-180': showTypeFilter,
                      })}
                    />
                  </span>
                </button>
                <AnimatePresence>
                  {showTypeFilter && (
                    <m.div
                      initial={{ height: '0px', opacity: 0 }}
                      animate={{
                        height: showTypeFilter ? '400%' : '0px',
                        opacity: showTypeFilter ? 100 : 0,
                      }}
                      exit={{ height: '0px', opacity: 0 }}
                      transition={{ duration: 0.5, stiffness: 0 }}
                      onMouseLeave={() => setShowTypeFilter(false)}
                      className={cn(
                        'border-primary absolute flex flex-col overflow-hidden border-[0.5px] bg-white drop-shadow',
                        'top-10 w-full rounded',
                        'lg:top-14 lg:w-60 lg:rounded-lg',
                      )}
                    >
                      {types.map((type, idx) => (
                        <button
                          onClick={() => handleSelectType(type)}
                          key={`information-type-filter-${type}`}
                          className={cn(
                            'text-primary/70 hover:text-primary border-primary inline-flex h-full w-full cursor-pointer items-center justify-center border-b capitalize',
                            'text-xs lg:text-sm',
                            { 'border-none': idx === types.length - 1 },
                            {
                              'text-primary pointer-events-none font-medium': type === selectedType,
                            },
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative w-1/2">
                <input
                  className={cn(
                    'border-primary border-[0.5px]',
                    'w-full rounded py-2 pr-2 pl-8 text-sm',
                    'lg:w-60 lg:rounded-lg lg:py-3 lg:pr-4 lg:pl-12 lg:text-base',
                  )}
                />
                <Search
                  className="absolute top-2 left-2 w-4 lg:top-3 lg:left-4 lg:w-6"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
          <p className="headline w-full lg:w-2/3">
            Temukan berbagai tulisan dan video seputar obat herbal dan kandungannya!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
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
                  className="bg-tertiary aspect-square h-auto w-full rounded-lg lg:rounded-2xl"
                />
                <div className="flex flex-col gap-1 lg:gap-3">
                  <div className="flex w-full justify-between text-xs font-light text-black lg:text-base">
                    <span className="font-normal uppercase">{article.category}</span>
                    <span>{article.type}</span>
                  </div>
                  <h3 className="text-xl font-medium text-nowrap text-ellipsis lg:text-2xl">
                    {article.title}
                  </h3>
                  <p className="inline-flex items-center gap-2 text-xs lg:text-base">
                    by Article Author
                    <span className="text-xs text-neutral-500 lg:text-sm">{`${new Date().toUTCString()}`}</span>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  )
}
