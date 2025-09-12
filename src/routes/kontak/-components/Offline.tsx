import CONTACT_CONTENTS from '@static/contacts'
import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

const Offline = () => {
  const CONTACTS = CONTACT_CONTENTS.CONTACTS.RUMAH_ULTEA
  return (
    <div
      key={`contact-page-${CONTACTS.NAME}`}
      className="border-tertiary flex flex-col gap-6 border-t py-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-10"
    >
      <h3 className="text-base font-medium tracking-tight lg:text-2xl">{CONTACTS.NAME}</h3>
      <Link
        to={CONTACTS.LINKS}
        className="group col-span-2 flex flex-col transition hover:opacity-70"
      >
        {CONTACTS.CONTENTS.map((text, idx) => (
          <span
            key={`contact-${CONTACTS.NAME}-${idx}`}
            className="text-primary inline-flex gap-2 text-base font-light lg:text-3xl"
          >
            {text}
            {idx === CONTACTS.CONTENTS.length - 1 && (
              <span>
                <MoveUpRight
                  size={20}
                  strokeWidth={1}
                  className="w-3 origin-top-right transition group-hover:scale-125 lg:w-5"
                />
              </span>
            )}
          </span>
        ))}
      </Link>
    </div>
  )
}

export default Offline
