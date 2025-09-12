import type { Testimony } from '@models/testimony'
import TestimonyCard from '@routes/-components/testimonies/Card'

type TestimonyContentsProps = {
  testimonies: Testimony[]
}

const TestimonyContents = ({ testimonies }: TestimonyContentsProps) => {
  return testimonies.map((testimony, idx) => (
    <TestimonyCard key={testimony.id} index={idx} testimony={testimony} />
  ))
}

export default TestimonyContents
