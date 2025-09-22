import { Link } from '@tanstack/react-router'

type FooterSitemapProps = {
  item: {
    NAME: string
    PATH: string
  }
}

const FooterSitemapItem = ({ item }: FooterSitemapProps) => {
  return (
    <li key={`footer-nav-${item.NAME}`} className="text-neutral-300 transition hover:text-white">
      <Link to={item.PATH}>{item.NAME}</Link>
    </li>
  )
}

export default FooterSitemapItem
