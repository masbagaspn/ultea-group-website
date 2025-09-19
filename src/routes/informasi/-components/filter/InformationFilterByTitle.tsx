import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import * as React from 'react'

import { getAllInformations } from '@api/informations.api'

import InformationFilterByTitleList from '@routes/informasi/-components/lists/InformationFilterByTItleList'
import { InformationSearchLoaderDeps, Route } from '@routes/informasi/index'

import { cn } from '@lib/utils'

const InformationFilterByTitle = () => {
  const filter = Route.useSearch() as InformationSearchLoaderDeps

  const [show, setShow] = React.useState(false)
  const [titleInput, setTitleInput] = React.useState(filter.title ?? '')
  const [debouncedSearch, setDebouncedSearch] = React.useState('')

  const navigate = useNavigate({ from: Route.fullPath })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.target as any)[0].value

    if (value.trim() === '') {
      navigate({
        search: (prev: InformationSearchLoaderDeps) => ({
          page: 1,
          type: prev.type,
        }),
      })
    } else {
      navigate({
        search: (prev: InformationSearchLoaderDeps) => ({
          page: 1,
          type: prev.type,
          title: value.trim(),
        }),
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTitleInput(e.target.value)

    if (e.target.value.trim() === '') {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShow(false)
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(titleInput)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [titleInput])

  const { data, isLoading } = useQuery({
    queryKey: ['informations', `type-${filter.type}`, `title-${debouncedSearch}`],
    queryFn: async () => {
      const response = await getAllInformations(1, 3, debouncedSearch, filter.type)
      return response
    },
    placeholderData: (prev) => prev,
  })

  const handleInputFocus = () => {
    if (titleInput) {
      setShow(true)
    }
  }

  return (
    <div ref={containerRef} className="relative flex flex-col gap-4">
      <form className="relative w-1/2" onSubmit={handleSubmit}>
        <input
          value={titleInput}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={() => setShow(false)}
          className={cn(
            'border-primary border-[0.5px]',
            'w-full rounded py-2 pr-2 pl-8 text-sm',
            'lg:w-60 lg:rounded-lg lg:py-3 lg:pr-4 lg:pl-10 lg:text-base',
          )}
          placeholder="Cari judul"
        />
        <Search className="absolute top-2 left-2 w-4 lg:top-3 lg:left-2.5 lg:w-6" strokeWidth={1} />
      </form>
      {show && (
        <InformationFilterByTitleList
          informations={data.data}
          isLoading={!debouncedSearch.length || isLoading}
        />
      )}
    </div>
  )
}

export default InformationFilterByTitle
