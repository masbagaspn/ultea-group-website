import { Link } from '@tanstack/react-router'
import { Undo2 } from 'lucide-react'

import PageLayout from '@components/layout/PageLayout'

export const CustomErrorComponent = () => {
  return (
    <PageLayout>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-primary text-4xl">Something went wrong.</h1>
        <Link
          to="/"
          className="text-primary hover:text-primary/70 inline-flex items-center gap-1 font-light tracking-tight underline transition"
        >
          Back to Home
          <Undo2 size={16} strokeWidth={1} />
        </Link>
      </div>
    </PageLayout>
  )
}
