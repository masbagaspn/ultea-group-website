import useHideOnScroll from '@hooks/useHideOnScroll'
import { cn } from '@lib/utils'
import { Link } from '@tanstack/react-router'
import * as React from 'react'
import NavbarMenu from './Menu'

type NavbarDesktopProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'header'>

const NavbarDesktop = ({ className, ...rest }: NavbarDesktopProps) => {
  const isVisible = useHideOnScroll(200)

  return (
    <header
      className={cn(
        'z-50 flex items-center justify-between px-10 py-6 backdrop-blur transition duration-500',
        { 'translate-y-0': isVisible, '-translate-y-full': !isVisible },
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

      <NavbarMenu />
    </header>
  )
}

export default NavbarDesktop
