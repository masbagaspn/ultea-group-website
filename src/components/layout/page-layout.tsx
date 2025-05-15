import Footer from '@components/layout/footer'
import NavBar from '@components/navigations/navbar'
import { useRouter } from '@tanstack/react-router'
import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  React.useEffect(() => {
    const unsub = router.subscribe('onBeforeNavigate', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // or 'smooth'
    })
    return unsub
  }, [router])

  return (
    <main className="relative min-h-screen max-w-screen">
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
