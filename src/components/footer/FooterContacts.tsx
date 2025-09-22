import FooterSocmed from '@components/footer/FooterSocmed'

const FooterContacts = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <FooterSocmed />
      <p className="flex flex-col text-sm font-extralight lg:font-normal">
        <span>Jl. Pandugo Baru XIII Blok R no. 41</span>
        <span>Kel. Penjaringan Sari, Kec. Rungkut</span>
        <span>Surabaya, 60297</span>
      </p>
    </div>
  )
}

export default FooterContacts
