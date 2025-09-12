import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import * as React from 'react'

import NavbarSheet from '@components/navigations/mobile/Sheet'

import { cn } from '@lib/utils'

type NavbarMobileProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'header'>

const NavbarMobile = ({ className, ...props }: NavbarMobileProps) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <header
      className={cn('sticky top-0 z-30 flex w-full justify-between px-6 py-4', className)}
      {...props}
    >
      <Link to="/">
        <h1>
          <img src="/assets/logo/logotype-colored-green.png" className="h-5" />
          <span className="sr-only">Ultea Group</span>
        </h1>
      </Link>
      <button onClick={() => setVisible(true)} className="text-primary">
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {visible && <NavbarSheet state={{ visible, setVisible }} />}
      </AnimatePresence>
    </header>
  )
}

export default NavbarMobile
