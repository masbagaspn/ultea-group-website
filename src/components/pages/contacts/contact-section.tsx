import Section from '@components/layout/section'
import contacts from '@static/contacts'
import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

const ContactSection = () => {
  const rumahUltea = contacts.rumahUltea
  const digitalContacts = [contacts.ecommerce, contacts.socialMedia]

  return (
    <Section className="text-primary flex flex-col gap-10">
      <div
        key={`contact-page-${rumahUltea.name}`}
        className="border-tertiary grid grid-cols-3 gap-10 border-t py-10"
      >
        <h3 className="text-2xl font-medium tracking-tight">{rumahUltea.name}</h3>
        <Link
          to={rumahUltea.links}
          className="group col-span-2 flex flex-col transition hover:opacity-70"
        >
          {rumahUltea.contents.map((text, idx) => (
            <span
              key={`contact-${rumahUltea.name}-${idx}`}
              className="text-primary inline-flex gap-2 text-3xl font-light"
            >
              {text}
              {idx === rumahUltea.contents.length - 1 && (
                <span>
                  <MoveUpRight
                    size={20}
                    strokeWidth={1}
                    className="origin-top-right transition group-hover:scale-125"
                  />
                </span>
              )}
            </span>
          ))}
        </Link>
      </div>
      {digitalContacts.map((contact) => (
        <div
          key={`contact-page-${contact.name}`}
          className="border-tertiary grid grid-cols-3 gap-10 border-t py-10"
        >
          <h3 className="text-2xl font-medium tracking-tight">{contact.name}</h3>
          <div className="col-span-2 grid w-full grid-cols-3 gap-10">
            {contact.contents.map((item) => (
              <div key={`contact-${contact.name}-${item.name}`} className="flex flex-col gap-6">
                <Link
                  to={item.links}
                  className="group inline-flex gap-2 text-3xl font-light transition hover:opacity-70"
                >
                  {item.name}
                  <span>
                    <MoveUpRight
                      size={20}
                      strokeWidth={1}
                      className="origin-top-right transition group-hover:scale-125"
                    />
                  </span>
                </Link>
                <p className="flex flex-col text-xl font-light">
                  {item.target && <span>{item.target}</span>}
                  {item.person && <span>a.n. {item.person}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}

export default ContactSection
