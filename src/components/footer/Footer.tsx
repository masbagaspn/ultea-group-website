import FooterLogo from '@components/footer/FooterLogo'

import FooterContacts from '@components/footer/FooterContacts'
import FooterSitemap from '@components/footer/FooterSitemap'

const Footer = () => {
  return (
    <footer className="p-6 lg:p-10">
      <div className="bg-primary flex flex-col gap-10 rounded-lg p-6 text-white lg:grid lg:grid-cols-3 lg:gap-0 lg:rounded-2xl lg:p-10">
        <FooterLogo />
        <FooterSitemap />
        <FooterContacts />
      </div>
    </footer>
  )
}

export default Footer
