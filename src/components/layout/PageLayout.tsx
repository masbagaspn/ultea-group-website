import { useRouter } from '@tanstack/react-router'
import * as React from 'react'

import Footer from '@components/layout/footer'
import NavBar from '@components/navigations/navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  React.useEffect(() => {
    const unsub = router.subscribe('onBeforeNavigate', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // or 'smooth'
    })
    return unsub
  }, [router])

  return (
    <main className="relative flex min-h-screen max-w-screen flex-col">
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
