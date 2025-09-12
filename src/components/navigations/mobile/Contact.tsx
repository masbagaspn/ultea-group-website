import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

type NavbarContactProps = {
  ITEM: {
    NAME: string
    LINKS: string
  }
}

const NavbarContact = ({ ITEM }: NavbarContactProps) => {
  return (
    <li key={`mobile-nav-${ITEM.NAME}`}>
      <Link
        to={ITEM.LINKS}
        className="inline-flex items-start gap-0.5 text-xs font-light"
        target="_blank"
        rel="noopener noreferrer"
      >
        {ITEM.NAME}
        <span>
          <MoveUpRight size={12} strokeWidth={1} />
        </span>
      </Link>
    </li>
  )
}

export default NavbarContact
