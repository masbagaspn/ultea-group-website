import NAV_MENU_ITEMS from '@static/navigations'
import { Link } from '@tanstack/react-router'

const NavbarMenu = () => {
  return (
    <ul className="flex flex-col gap-3 text-2xl font-light capitalize">
      {NAV_MENU_ITEMS.map((ITEM) => (
        <Link to={ITEM.PATH} key={`mobile-nav-menu-items-${ITEM.NAME}`}>
          {ITEM.NAME}
        </Link>
      ))}
    </ul>
  )
}

export default NavbarMenu
