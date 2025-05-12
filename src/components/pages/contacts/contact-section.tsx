import Section from '@components/layout/section'
import contacts from '@static/contacts'
import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

type ContactType = { name: string; links: string; target?: string; person?: string }

const ContactSection = () => {
  return (
    <Section className="text-primary flex flex-col gap-10">
      {contacts.map((contact) =>
        contact.name === 'Rumah Ultea' ? (
          <div
            key={`contact-page-${contact.name}`}
            className="border-tertiary grid grid-cols-3 gap-10 border-t py-10"
          >
            <h3 className="text-2xl font-medium tracking-tight">{contact.name}</h3>
            <p className="col-span-2 flex flex-col">
              {contact.contents.map((text, idx) => (
                <span key={`contact-${contact.name}-${idx}`} className="text-3xl font-light">
                  {text as string}
                </span>
              ))}
            </p>
          </div>
        ) : (
          <div
            key={`contact-page-${contact.name}`}
            className="border-tertiary grid grid-cols-3 gap-10 border-t py-10"
          >
            <h3 className="text-2xl font-medium tracking-tight">{contact.name}</h3>
            <div className="col-span-2 grid w-full grid-cols-3 gap-10">
              {contact.contents.map((item) => (
                <div
                  key={`contact-${contact.name}-${(item as ContactType).name}`}
                  className="flex flex-col gap-6"
                >
                  <Link
                    to={(item as ContactType).links}
                    className="inline-flex gap-1 text-3xl font-light transition hover:opacity-70"
                  >
                    {(item as ContactType).name}
                    <span>
                      <MoveUpRight size={20} strokeWidth={1} />
                    </span>
                  </Link>
                  <p className="flex flex-col text-xl font-light">
                    {(item as ContactType).target && <span>{(item as ContactType).target}</span>}
                    {(item as ContactType).person && (
                      <span>a.n. {(item as ContactType).person}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </Section>
  )
}

export default ContactSection
