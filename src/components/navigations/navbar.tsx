import DesktopNavBar from '@components/navigations/desktop-navbar'
import MobileNavBar from '@components/navigations/mobile-navbar'
import { useMediaQuery } from 'usehooks-ts'

const NavBar = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return <DesktopNavBar className="sticky top-0 bg-white" />

  return <MobileNavBar className="sticky top-0 bg-white" />
}

export default NavBar
