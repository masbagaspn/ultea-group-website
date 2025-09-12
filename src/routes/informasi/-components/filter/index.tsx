import TitleFilter from '@routes/informasi/-components/filter/title'
import VariantFilter from '@routes/informasi/-components/filter/variants'

const Filter = () => {
  return (
    <div className="flex w-full gap-3 lg:w-fit lg:gap-6">
      <VariantFilter />
      <TitleFilter />
    </div>
  )
}

export default Filter
