import Section from '@components/layout/section'
import contacts from '@static/contacts'
import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

const ContactSection = () => {
  const rumahUltea = contacts.rumahUltea
  const digitalContacts = [contacts.socialMedia, contacts.ecommerce]

  return (
    <Section className="text-primary flex flex-col lg:gap-10">
      <div
        key={`contact-page-${rumahUltea.name}`}
        className="border-tertiary flex flex-col gap-6 border-t py-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-10"
      >
        <h3 className="text-base font-medium tracking-tight lg:text-2xl">{rumahUltea.name}</h3>
        <Link
          to={rumahUltea.links}
          className="group col-span-2 flex flex-col transition hover:opacity-70"
        >
          {rumahUltea.contents.map((text, idx) => (
            <span
              key={`contact-${rumahUltea.name}-${idx}`}
              className="text-primary inline-flex gap-2 text-base font-light lg:text-3xl"
            >
              {text}
              {idx === rumahUltea.contents.length - 1 && (
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
      {digitalContacts.map((contact) => (
        <div
          key={`contact-page-${contact.name}`}
          className="border-tertiary flex flex-col gap-6 border-t py-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:py-10"
        >
          <h3 className="text-base font-medium tracking-tight lg:text-2xl">{contact.name}</h3>
          <div className="grid w-full grid-cols-3 gap-3 lg:col-span-2 lg:gap-10">
            {contact.contents.map((item) => (
              <div
                key={`contact-${contact.name}-${item.name}`}
                className="flex flex-col gap-3 lg:gap-6"
              >
                <Link
                  to={item.links}
                  className="group inline-flex items-end text-sm font-light transition hover:opacity-70 lg:gap-2 lg:text-3xl"
                >
                  {item.name}
                  <span>
                    <MoveUpRight
                      strokeWidth={1}
                      className="w-3 origin-top-right transition group-hover:scale-125 lg:w-5"
                    />
                  </span>
                </Link>
                <p className="flex flex-col text-xs font-light lg:text-xl">
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
