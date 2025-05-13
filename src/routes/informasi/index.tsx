import PageLayout from '@components/layout/page-layout'
import Section from '@components/layout/section'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown, Search } from 'lucide-react'
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
                {showTypeFilter && (
                  <div
                    onMouseLeave={() => setShowTypeFilter(false)}
                    className="absolute top-14 flex w-60 flex-col rounded-lg border-[0.5px] bg-white drop-shadow-2xl"
                  >
                    {types.map((type) => (
                      <button
                        onClick={() => handleSelectType(type)}
                        key={`information-type-filter-${type}`}
                        className="text-primary/70 hover:text-primary w-full cursor-pointer border-b py-3 text-sm capitalize"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
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
