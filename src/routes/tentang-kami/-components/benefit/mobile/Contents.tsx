import STATIC from '@static/about'

const Contents = () => {
  return (
    <div className="flex flex-col gap-6 text-sm font-light text-white">
      {STATIC.BENEFIT.CONTENTS.map((text) => (
        <p key={`about-hero-section-${text}`}>{text}</p>
      ))}
    </div>
  )
}

export default Contents
