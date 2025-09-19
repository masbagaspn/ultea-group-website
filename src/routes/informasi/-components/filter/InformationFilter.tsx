import InformationFilterByTitle from '@routes/informasi/-components/filter/InformationFilterByTitle'
import InformationFilterByVariant from '@routes/informasi/-components/filter/InformationFilterByVariant'

const InformationFilter = () => {
  return (
    <div className="flex w-full gap-3 lg:w-fit lg:gap-6">
      <InformationFilterByVariant />
      <InformationFilterByTitle />
    </div>
  )
}

export default InformationFilter
