import { ArrowLeft, ArrowRight } from 'lucide-react'
import * as React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import { Route } from '@routes/informasi/$slug'

import { cn } from '@lib/utils'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url'
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const InformationEBook = () => {
  const [total, setTotal] = React.useState(0)
  const [page, setPage] = React.useState(1)

  const information = Route.useLoaderData()

  const documentRef = React.useRef<HTMLDivElement | null>(null)

  const handlePrev = () => {
    setPage(page - 1)
    if (documentRef.current) {
      documentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNext = () => {
    setPage(page + 1)
    if (documentRef.current) {
      documentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex w-full flex-col justify-center gap-8">
      <div className="flex w-full justify-center" ref={documentRef}>
        <Document
          file={information.contents}
          onLoadSuccess={({ numPages }) => {
            setTotal(numPages)
            setPage(page)
          }}
          loading={<p>Loading ...</p>}
        >
          <Page pageNumber={page} width={900} />
        </Document>
      </div>
      <div className="flex items-center justify-center gap-20">
        <button
          onClick={() => handlePrev()}
          disabled={page === 1}
          className={cn(
            'text-primary inline-flex items-center gap-1 border-b-1 border-b-transparent transition',
            {
              'hover:border-b-primary cursor-pointer hover:opacity-70': page !== 1,
              'text-neutral-400': page === 1,
            },
          )}
        >
          <ArrowLeft size={16} />
          Sebelumnya
        </button>
        <span className="text-sm">
          Halaman {page} dari {total}
        </span>
        <button
          onClick={() => handleNext()}
          disabled={page === total}
          className={cn(
            'text-primary inline-flex items-center gap-1 border-b-1 border-b-transparent transition',
            {
              'hover:border-b-primary cursor-pointer hover:opacity-70': page !== total,
              'text-neutral-400': page === total,
            },
          )}
        >
          Selanjutnya
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default InformationEBook
