import PageLayout from '@components/layout/page-layout'
import Section from '@components/layout/section'
import { cn } from '@lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown, Search } from 'lucide-react'
import { AnimatePresence, motion as m } from 'motion/react'
import React from 'react'

export const Route = createFileRoute('/informasi/')({
  component: RouteComponent,
})

const types = ['semua informasi', 'artikel', 'video', 'booklet']

function RouteComponent() {
  const [showTypeFilter, setShowTypeFilter] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState(types[0])

  const handleSelectType = (type: string) => {
    setSelectedType(type)
    setShowTypeFilter(false)
  }

  return (
    <PageLayout>
      <Section className="flex flex-col gap-20">
        <div className="text-primary flex flex-col gap-6">
          <div className="flex w-full justify-between">
            <h2 className="font-light uppercase">informasi</h2>
            <div className="flex gap-6">
              <div className="relative flex flex-col gap-2">
                <button
                  onClick={() => setShowTypeFilter(!showTypeFilter)}
                  className="border-primary flex min-w-60 cursor-pointer justify-between rounded-lg border-[0.5px] px-6 py-3 capitalize"
                >
                  {selectedType}
                  <span>
                    <ChevronDown strokeWidth={1} />
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
                      className="border-primary absolute top-14 flex w-60 flex-col overflow-hidden rounded-lg border-[0.5px] bg-white drop-shadow-2xl"
                    >
                      {types.map((type, idx) => (
                        <button
                          onClick={() => handleSelectType(type)}
                          key={`information-type-filter-${type}`}
                          className={cn(
                            'text-primary/70 hover:text-primary border-primary inline-flex h-full w-full cursor-pointer items-center justify-center border-b text-sm capitalize',
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
              <div className="relative">
                <input className="border-primary min-w-60 rounded-lg border-[0.5px] py-3 pr-4 pl-12" />
                <Search className="absolute top-3 left-4" strokeWidth={1} />
              </div>
            </div>
          </div>
          <p className="w-2/3 text-5xl">
            Temukan berbagai tulisan dan video seputar obat herbal dan kandungannya!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <article className="text-primary flex flex-col gap-6">
            <img className="bg-tertiary aspect-square h-auto w-full rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between text-lg font-light">
                <span>Kategori</span>
                <span>Tipe</span>
              </div>
              <h3 className="text-2xl font-medium">Judul Informasi</h3>
            </div>
          </article>
          <article className="text-primary flex flex-col gap-6">
            <img className="bg-tertiary aspect-square h-auto w-full rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between text-lg font-light">
                <span>Kategori</span>
                <span>Tipe</span>
              </div>
              <h3 className="text-2xl font-medium">Judul Informasi</h3>
            </div>
          </article>
          <article className="text-primary flex flex-col gap-6">
            <img className="bg-tertiary aspect-square h-auto w-full rounded-2xl" />
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between text-lg font-light">
                <span>Kategori</span>
                <span>Tipe</span>
              </div>
              <h3 className="text-2xl font-medium">Judul Informasi</h3>
            </div>
          </article>
        </div>
      </Section>
    </PageLayout>
  )
}
