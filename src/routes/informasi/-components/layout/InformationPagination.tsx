import { cn } from '@lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type InformationPaginationProps = {
  pagination: {
    handlePrev: () => void
    handleNext: () => void
    startItem: number
    endItem: number
    totalItem: number
    currentPage: number
    totalPage: number
  }
}

const InformationPagination = ({ pagination }: InformationPaginationProps) => {
  return (
    <div className="flex justify-between">
      <span className="text-neutral-400">
        Menampilkan {pagination.startItem}-{pagination.endItem} dari {pagination.totalItem}
      </span>
      <div className="text-primary flex items-center gap-4">
        {pagination.currentPage !== 1 && (
          <button
            className="hover:border-primary inline-flex cursor-pointer items-center gap-1 border-b-1 border-transparent transition hover:opacity-70"
            onClick={() => pagination.handlePrev()}
            disabled={pagination.currentPage === 1}
          >
            <ArrowLeft size={16} /> Halaman Sebelumnya
          </button>
        )}
        {pagination.currentPage !== pagination.totalPage && (
          <button
            className={cn(
              'inline-flex cursor-pointer items-center gap-1 border-b-1 border-transparent transition',
              'hover:border-primary hover:opacity-70',
              'disabled:pointer-events-none disabled:text-neutral-500 disabled:hover:text-neutral-500',
            )}
            onClick={() => pagination.handleNext()}
            disabled={pagination.currentPage === pagination.totalPage}
          >
            Halaman Berikutnya
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export default InformationPagination
