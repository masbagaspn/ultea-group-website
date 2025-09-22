import { Route } from '@routes/informasi/$slug/index'
import InformationArticle from './InformationArticle'
import InformationEBook from './InformationEBook'
import InformationVideo from './InformationVideo'

const InformationContent = () => {
  const information = Route.useLoaderData()

  if (information.type === 0) return <InformationArticle />

  if (information.type === 1) return <InformationVideo />

  return <InformationEBook />
}

export default InformationContent
