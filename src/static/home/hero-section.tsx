import products from '@static/products'

const heroMixProducts = {
  image: '/assets/hero/landing-page-hero-mix.webp',
  tokopedia: 'tokopedia.com/thedigdaya',
  shopee: 'shopee.co.id/digdaya.id',
}

const heroProducts = [
  heroMixProducts,
  ...products.map((product) => ({
    image: product.imageHero,
    tokopedia: product.links.tokopedia,
    shopee: product.links.shopee,
  })),
]

const heroSectionContents = {
  headline: 'Tumbuh dari alam dan dikembangkan melalui riset ilmiah untuk hasil maksimal',
  subheadline: 'Ultea lahir untuk keluarga kami dan kini berkembang untuk keluarga Anda',
  contents: heroProducts,
}

export default heroSectionContents
