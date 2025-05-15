import { navMenuItems } from '@static/nav-menu-items'
import { Link } from '@tanstack/react-router'

const Footer = () => {
  return (
    <footer className="p-6 lg:p-10">
      <div className="bg-primary flex flex-col gap-10 rounded-lg p-6 text-white lg:grid lg:grid-cols-3 lg:gap-0 lg:rounded-2xl lg:p-10">
        <h1>
          <span className="sr-only">Ultea Group</span>
          <img src="/assets/logo/logotype-colored-white.png" className="h-6" />
        </h1>
        <div className="flex flex-col gap-4 lg:gap-10">
          <h2 className="text-sm lg:text-base">Sitemap</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm font-light capitalize lg:flex lg:flex-col lg:gap-4 lg:text-base">
            {navMenuItems.map(
              (item) =>
                item.name !== 'beranda' && (
                  <li
                    key={`footer-nav-${item.name}`}
                    className="text-neutral-300 transition hover:text-white"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ),
            )}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <ul>
            <li>Socmed Icon</li>
          </ul>
          <p className="flex flex-col text-sm font-extralight lg:font-normal">
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
