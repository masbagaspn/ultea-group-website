import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselActionProps = {
  paginate: (dir: 1 | -1, isManual?: boolean) => void
  total: number
  index: number
}

const CarouselAction = ({ paginate, total, index }: CarouselActionProps) => {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <button
        onClick={() => paginate(-1, true)}
        className="bg-primary text-tertiary hover:bg-primary/90 transtition cursor-pointer rounded-full p-2"
      >
        <ChevronLeft size={16} />
      </button>
      <div className="flex w-8 items-center justify-center text-white">
        <span className="text-lg">{index + 1}</span>
        <span className="text-base font-light">/{total}</span>
      </div>
      <button
        onClick={() => paginate(1, true)}
        className="bg-primary text-tertiary hover:bg-primary/90 transtition cursor-pointer rounded-full p-2"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default CarouselAction
