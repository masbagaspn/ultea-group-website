import CONTACT_CONTENTS from '@static/contacts'
import OnlineContents from './OnlineContents'

const Online = () => {
  const DIGITAL_CONTACTS = [
    CONTACT_CONTENTS.CONTACTS.SOCIAL_MEDIA,
    CONTACT_CONTENTS.CONTACTS.E_COMMERCE,
  ]

  return DIGITAL_CONTACTS.map((CONTACT) => (
    <div
      key={`contact-page-${CONTACT.NAME}`}
      className="border-tertiary flex flex-col gap-6 border-t py-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-10"
    >
      <h3 className="text-base font-medium tracking-tight lg:text-2xl">{CONTACT.NAME}</h3>
      <OnlineContents CONTACT={CONTACT} />
    </div>
  ))
}

export default Online
