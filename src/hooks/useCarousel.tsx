import * as React from 'react'

export default function useCarousel(length: number) {
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1)
  const intervalRef = React.useRef<number | null>(null)

  const clearAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const startAutoPlay = () => {
    clearAutoPlay()
    intervalRef.current = setInterval(() => {
      paginate(1, false)
    }, 3000)
  }

  const paginate = React.useCallback(
    (dir: -1 | 1, isManual: boolean = true) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + length) % length)

      if (isManual) {
        startAutoPlay()
      }
    },
    [index],
  )

  return { index, direction, startAutoPlay, clearAutoPlay, paginate }
}
