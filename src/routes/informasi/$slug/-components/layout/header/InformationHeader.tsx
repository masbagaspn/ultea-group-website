import InformationDetail from '@routes/informasi/$slug/-components/layout/header/InformationDetail'
import InformationShare from '@routes/informasi/$slug/-components/layout/header/InformationShare'

const InformationHeader = () => {
  return (
    <div className="flex w-full items-end justify-start">
      <InformationDetail />
      <InformationShare />
    </div>
  )
}

export default InformationHeader
