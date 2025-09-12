import NAV_MENU_ITEMS from '@static/navigations'
import { Link } from '@tanstack/react-router'

const NavbarMenu = () => {
  return (
    <nav className="flex gap-10">
      {NAV_MENU_ITEMS.map((ITEM) => {
        return (
          <Link
            key={`desktopNavBar-${ITEM.NAME}`}
            to={ITEM.PATH}
            className="text-primary/70 hover:text-primary text-sm font-light capitalize"
            activeProps={{ className: 'text-primary' }}
          >
            {ITEM.NAME}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavbarMenu
