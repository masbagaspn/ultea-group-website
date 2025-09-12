const RUMAH_ULTEA = {
  NAME: 'Rumah Ultea',
  CONTENTS: [
    'Jl. Pandugo Baru XIII Blok R no. 41',
    'Kel. Penjaringan Sari, Kec. Rungkut',
    'Surabaya, 60297',
  ],
  LINKS: 'https://maps.app.goo.gl/FJf5J8KpbPSBFdvN9',
}

const SOCIAL_MEDIA = {
  NAME: 'Social Media',
  CONTENTS: [
    {
      NAME: 'Whatsapp',
      LINKS: 'https://wa.me/+6281235636878',
      TARGET: '081235636878',
      PERSON: 'Mbak Dewi',
    },
    {
      NAME: 'Instagram',
      LINKS: 'https://instagram.com/@ulteaofficial',
      TARGET: '@ulteaofficial',
      PERSON: undefined,
    },
    {
      NAME: 'Tiktok',
      LINKS: 'https://tiktok.com/@ulteaofficial',
      TARGET: '@ulteaofficial',
      PERSON: undefined,
    },
  ],
}

const E_COMMERCE = {
  NAME: 'E-Commerce',
  CONTENTS: [
    {
      NAME: 'Shopee',
      LINKS: 'https://shopee.co.id/digdaya.id',
      TARGET: undefined,
      PERSON: undefined,
    },
    {
      NAME: 'Tokopedia',
      LINKS: 'https://tokopedia.com/digdaya.id',
      TARGET: undefined,
      PERSON: undefined,
    },
  ],
}

const CONTACT_CONTENTS = {
  HEADLINE: 'kontak kami',
  SUBHEADLINE: 'Hubungi kami untuk informasi dan konsultasi lebih lanjut!',
  CONTACTS: {
    RUMAH_ULTEA,
    SOCIAL_MEDIA,
    E_COMMERCE,
  },
}

export default CONTACT_CONTENTS
