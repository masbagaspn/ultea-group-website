import { cn } from '@lib/utils'
import { navMenuItems } from '@static/nav-menu-items'
import { Link } from '@tanstack/react-router'
import * as React from 'react'

type DesktopNavBarProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'header'>

const DesktopNavBar = ({ className, ...rest }: DesktopNavBarProps) => {
  const [show, setShow] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScrollY = () => {
      const currentY = window.scrollY

      if (currentY > lastScrollY && currentY > 200) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScrollY)

    return () => window.removeEventListener('scroll', handleScrollY)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        'z-50 flex items-center justify-between px-10 py-6 backdrop-blur transition duration-500',
        {
          'translate-y-0': show,
          '-translate-y-full': !show,
        },
        className,
      )}
      {...rest}
    >
      <Link to="/">
        <h1 className="w-fit">
          <img className="h-6" src="/assets/logo/logotype-colored-green.png" />
          <span className="sr-only">Ultea Group</span>
        </h1>
      </Link>
      <nav className="flex gap-10">
        {navMenuItems.map((item) => {
          return (
            <Link
              key={`desktopNavBar-${item.name}`}
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

export default DesktopNavBar
