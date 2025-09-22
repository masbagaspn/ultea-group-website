import { Link } from '@tanstack/react-router'

import { SocialMediaIconProps } from '@models/socmed'

import CONTACT_CONTENTS from '@static/contacts'

type SocialMedia = {
  NAME: string
  LINKS: string
  TARGET: string
  PERSON?: string
  ICON: React.ComponentType<SocialMediaIconProps>
}

const FooterSocmed = () => {
  const SOCMED = CONTACT_CONTENTS.CONTACTS.SOCIAL_MEDIA.CONTENTS

  return (
    <ul className="flex items-center gap-2">
      {SOCMED.map((social: SocialMedia) => (
        <li key={`footer-socmed-${social.NAME}`}>
          <Link to={social.LINKS} target="_blank" rel="noopener noreferrer" className="text-white">
            <social.ICON size={28} className="fill-white transition hover:fill-white/90" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterSocmed
