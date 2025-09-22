import Whatsapp from '@components/icons/whatsapp'
import { generateWhatsappLink } from '@lib/helper'
import { Route } from '@routes/informasi/$slug/index'
import { Link } from '@tanstack/react-router'

const InformationShareWhatsapp = () => {
  const information = Route.useLoaderData()

  const title = information.title
  const category = JSON.parse(information.categories)[0].name
  const slug = information.slug

  const whatsappLink = generateWhatsappLink(title, category, slug)

  return (
    <Link to={whatsappLink}>
      <Whatsapp size={28} className="fill-primary transition hover:opacity-70" />
    </Link>
  )
}

export default InformationShareWhatsapp
