import Footer from '@components/layout/footer'
import NavBar from '@components/layout/navbar'
import { useRouter } from '@tanstack/react-router'
import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen max-w-screen">
      <NavBar className="sticky top-0 bg-white backdrop-blur" />
      <ScrollToTopOnNavigate />
      {children}
      <Footer />
    </main>
  )
}

export function ScrollToTopOnNavigate() {
  const router = useRouter()

  React.useEffect(() => {
    const unsub = router.subscribe('onBeforeNavigate', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // or 'smooth'
    })
    return unsub
  }, [router])

  return null
}

export default PageLayout
