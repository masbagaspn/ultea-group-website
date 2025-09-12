import STATIC from '@static/about'

const AboutHeroLeftContainerHeaderDesktop = () => {
  return (
    <div className="text-primary flex w-full flex-col gap-6">
      <h2 className="font-light uppercase">{STATIC.HISTORY.HEADLINE}</h2>
      <p className="col-span-2 text-5xl">{STATIC.HISTORY.SUBHEADLINE}</p>
    </div>
  )
}

export default AboutHeroLeftContainerHeaderDesktop
