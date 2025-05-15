import Section from '@components/layout/section'
import { convertToPrice } from '@lib/utils'
import products from '@static/products'
import { Link, useParams } from '@tanstack/react-router'

const DetailSection = () => {
  const { produkId } = useParams({ from: '/produk/$produkId' })

  const product = products.find((product) => product.id === produkId)

  if (!product) return null

  return (
    <Section className="flex w-full flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-40">
      <img
        src={product?.imageProduct}
        className="bg-tertiary aspect-square h-auto w-full rounded-2xl object-cover"
      />
      <div className="flex h-full w-full flex-col justify-between gap-8">
        <div className="flex flex-col gap-6 lg:gap-16">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between">
            <h2 className="text-5xl capitalize">{product?.name}</h2>
            <div className="flex items-center gap-2 text-sm font-light text-white">
              <Link
                to={product.links.tokopedia}
                className="bg-primary hover:bg-primary/70 flex h-fit items-center justify-center rounded-full px-4 py-2"
              >
                Tokopedia
              </Link>
              <Link
                to={product.links.tokopedia}
                className="flex h-fit items-center justify-center rounded-full bg-orange-500 px-4 py-2 hover:bg-orange-500/70"
              >
                Shopee
              </Link>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-6 lg:gap-10">
            <div className="flex flex-col gap-3 text-lg">
              <span className="text-xs font-extralight uppercase lg:text-base">isi</span>
              <span className="text-base lg:text-2xl">{product.items}</span>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <span className="text-xs font-extralight uppercase lg:text-base">harga</span>
              <span className="text-base lg:text-2xl">{convertToPrice(product.price)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm leading-5 font-light text-neutral-700 lg:text-base">
          {product.description}
        </p>
      </div>
    </Section>
  )
}

export default DetailSection
