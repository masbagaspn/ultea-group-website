import { Link } from '@tanstack/react-router'
import { MoveUpRight } from 'lucide-react'

type OnlineContentsProps = {
  CONTACT: {
    NAME: string
    CONTENTS: {
      NAME: string
      LINKS: string
      TARGET?: string
      PERSON?: string
    }[]
  }
}

const OnlineContents = ({ CONTACT }: OnlineContentsProps) => {
  return (
    <div className="grid w-full grid-cols-3 gap-3 lg:col-span-2 lg:gap-10">
      {CONTACT.CONTENTS.map((ITEM) => (
        <div key={`contact-${CONTACT.NAME}-${ITEM.NAME}`} className="flex flex-col gap-3 lg:gap-6">
          <Link
            to={ITEM.LINKS}
            className="group inline-flex items-end text-sm font-light transition hover:opacity-70 lg:gap-2 lg:text-3xl"
          >
            {ITEM.NAME}
            <span>
              <MoveUpRight
                strokeWidth={1}
                className="w-3 origin-top-right transition group-hover:scale-125 lg:w-5"
              />
            </span>
          </Link>
          <p className="flex flex-col text-xs font-light lg:text-xl">
            {ITEM.TARGET && <span>{ITEM.TARGET}</span>}
            {ITEM.PERSON && <span>a.n. {ITEM.PERSON}</span>}
          </p>
        </div>
      ))}
    </div>
  )
}

export default OnlineContents
