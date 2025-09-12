import NavbarContacts from '@components/navigations/mobile/Contacts'
import NavbarMenu from '@components/navigations/mobile/Menu'

const NavbarContents = () => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <NavbarMenu />
      <NavbarContacts />
    </div>
  )
}

export default NavbarContents
