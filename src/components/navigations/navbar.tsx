import { useMediaQuery } from 'usehooks-ts'

import NavbarDesktop from '@components/navigations/desktop/Navbar'
import NavbarMobile from '@components/navigations/mobile/Navbar'

const NavBar = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return <NavbarDesktop className="sticky top-0 bg-white" />

  return <NavbarMobile className="sticky top-0 bg-white" />
}

export default NavBar
