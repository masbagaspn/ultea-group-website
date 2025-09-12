import { HTMLMotionProps, motion as m } from 'motion/react'

import NavbarContents from './Contents'
import NavbarHeader from './Header'

type NavbarSheetProps = {
  className?: string
  state: {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
  }
} & HTMLMotionProps<'div'>

const NavbarSheet = ({ className, state, ...props }: NavbarSheetProps) => {
  return (
    <m.div
      onClick={() => state.setVisible(false)}
      className="bg-primary text-tertiary fixed top-0 left-0 z-40 flex h-screen w-screen flex-col gap-10 px-8 py-6 lg:hidden"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: state.visible ? 1 : 0, x: state.visible ? '0%' : '100%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.25, stiffness: 0 }}
      {...props}
    >
      <NavbarHeader />
      <NavbarContents />
    </m.div>
  )
}

export default NavbarSheet
