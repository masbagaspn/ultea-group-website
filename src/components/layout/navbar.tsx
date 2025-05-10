import { cn } from '@lib/utils'
import { navMenuItems } from '@static/nav-menu-items'
import { Link } from '@tanstack/react-router'

type NavBarProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'header'>

const NavBar = ({ className, ...rest }: NavBarProps) => {
  return (
    <header
      className={cn('z-20 flex items-center justify-between px-10 py-6 backdrop-blur', className)}
      {...rest}
    >
      <h1>Ultea Group</h1>
      <nav className="flex gap-10">
        {navMenuItems.map((item) => {
          return (
            <Link
              key={`navbar-${item.name}`}
              to={item.path}
              className="text-primary/70 hover:text-primary text-sm font-light capitalize"
              activeProps={{ className: 'text-primary' }}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default NavBar
