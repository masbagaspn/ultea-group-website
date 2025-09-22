import FooterSitemapItem from '@components/footer/FooterSitemapItem'

import NAV_MENU_ITEMS from '@static/navigations'

const FooterSitemap = () => {
  const menu = NAV_MENU_ITEMS

  return (
    <div className="flex flex-col gap-4 lg:gap-10">
      <h2 className="text-sm lg:text-base">Sitemap</h2>
      <ul className="grid grid-cols-2 gap-2 text-sm font-light capitalize lg:flex lg:flex-col lg:gap-2 lg:text-base">
        {menu.map(
          (item) =>
            item.NAME !== 'beranda' && (
              <FooterSitemapItem key={`footer-sitemap-${item.NAME}`} item={item} />
            ),
        )}
      </ul>
    </div>
  )
}

export default FooterSitemap
