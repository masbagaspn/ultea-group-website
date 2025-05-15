import { cn } from '@lib/utils'
import contacts from '@static/contacts'
import { navMenuItems } from '@static/nav-menu-items'
import { Link } from '@tanstack/react-router'
import { Menu, MoveUpRight, X } from 'lucide-react'
import { AnimatePresence, HTMLMotionProps, motion as m } from 'motion/react'
import * as React from 'react'

type MobileNavBarProps = {
  className?: string
} & React.ComponentPropsWithoutRef<'header'>

const MobileNavBar = ({ className, ...props }: MobileNavBarProps) => {
  const [show, setShow] = React.useState(false)
  return (
    <header
      className={cn('sticky top-0 z-30 flex w-full justify-between px-6 py-4', className)}
      {...props}
    >
      <h1>
        <img src="/assets/logo/logotype-colored-green.png" className="h-5" />
        <span className="sr-only">Ultea Group</span>
      </h1>
      <button onClick={() => setShow(true)} className="text-primary">
        <Menu size={20} />
      </button>
      <AnimatePresence>{show && <MobileNavMenus show={show} setShow={setShow} />}</AnimatePresence>
    </header>
  )
}

type MobileNavMenusProps = {
  className?: string
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
} & HTMLMotionProps<'div'>

const MobileNavMenus = ({ className, show, setShow, ...props }: MobileNavMenusProps) => {
  return (
    <m.div
      onClick={() => setShow(false)}
      className="bg-primary text-tertiary fixed top-0 left-0 z-40 flex h-screen w-screen flex-col gap-10 px-8 py-6 lg:hidden"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: show ? 1 : 0, x: show ? '0%' : '100%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.25, stiffness: 0 }}
      {...props}
    >
      <div className="flex w-full items-center justify-between">
        <h1>
          <img src="/assets/logo/logotype-colored-white.png" className="h-6" />
          <span className="sr-only">Ultea Group</span>
        </h1>
        <button className="text-white">
          <X size={28} strokeWidth={1} />
        </button>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <ul className="flex flex-col gap-3 text-2xl font-light capitalize">
          {navMenuItems.map((item) => (
            <Link to={item.path} key={`mobile-nav-menu-items-${item.name}`}>
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          {[contacts.socialMedia, contacts.ecommerce].map((contact) => (
            <div key={`mobile-nav-contacts-${contact.name}`} className="flex flex-col gap-2">
              <h2 className="text-xs font-light capitalize">{contact.name}</h2>
              <ul className="grid grid-cols-3 gap-6 text-white">
                {contact.contents.map((item) => (
                  <li key={`mobile-nav-${item.name}`}>
                    <Link
                      to={item.links}
                      className="inline-flex items-start gap-0.5 text-xs font-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                      <span>
                        <MoveUpRight size={12} strokeWidth={1} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  )
}

export default MobileNavBar
