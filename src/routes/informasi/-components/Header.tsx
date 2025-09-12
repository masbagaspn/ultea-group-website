import Filter from '@routes/informasi/-components/filter'

const InformationPageHeader = () => {
  return (
    <div className="text-primary flex flex-col gap-10 lg:gap-20">
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
        <h2 className="section-title">informasi</h2>
        <Filter />
      </div>
      <p className="headline w-full lg:w-2/3">
        Temukan berbagai tulisan dan video seputar obat herbal dan kandungannya!
      </p>
    </div>
  )
}

export default InformationPageHeader
