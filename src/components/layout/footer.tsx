import { navMenuItems } from '@static/nav-menu-items'
import { Link } from '@tanstack/react-router'

const Footer = () => {
  return (
    <footer className="p-10">
      <div className="bg-primary grid grid-cols-3 rounded-2xl p-10 text-white">
        <h1>Ultea Group</h1>
        <div className="flex flex-col gap-10">
          <h2>Sitemap</h2>
          <ul className="flex flex-col gap-4">
            {navMenuItems.map(
              (item) =>
                item.name !== 'beranda' && (
                  <li
                    key={`footer-nav-${item.name}`}
                    className="font-light text-neutral-300 capitalize transition hover:text-white"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ),
            )}
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <ul>
            <li>Socmed Icon</li>
          </ul>
          <p className="flex flex-col">
            <span>Jl. Pandugo Baru XIII Blok R no. 41</span>
            <span>Kel. Penjaringan Sari, Kec. Rungkut</span>
            <span>Surabaya, 60297</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
