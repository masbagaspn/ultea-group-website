import STATIC from '@static/contacts'
import NavbarContact from './Contact'

const NavbarContacts = () => {
  const CONTACTS = [STATIC.CONTACTS.SOCIAL_MEDIA, STATIC.CONTACTS.E_COMMERCE]

  return (
    <div className="flex flex-col gap-4">
      {CONTACTS.map((CONTACT) => (
        <div key={`mobile-nav-contacts-${CONTACT.NAME}`} className="flex flex-col gap-2">
          <h2 className="text-xs font-light capitalize">{CONTACT.NAME}</h2>
          <ul className="grid grid-cols-3 gap-6 text-white">
            {CONTACT.CONTENTS.map((ITEM) => (
              <NavbarContact ITEM={ITEM} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default NavbarContacts
