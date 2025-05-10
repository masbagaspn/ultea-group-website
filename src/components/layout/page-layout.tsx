import Footer from '@components/layout/footer'
import NavBar from '@components/layout/navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen max-w-screen">
      <NavBar className="sticky top-0 bg-white backdrop-blur" />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
