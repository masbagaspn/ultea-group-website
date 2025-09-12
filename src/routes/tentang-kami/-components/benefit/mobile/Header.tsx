import STATIC from '@static/about'

const Header = () => {
  const SPLIT_SUBHEADLINE = STATIC.BENEFIT.SUBHEADLINE.split(': ')

  return (
    <div className="text-tertiary flex w-full flex-col gap-2">
      <h3 className="headline inline-flex flex-col">
        {SPLIT_SUBHEADLINE.map((text, idx) => (
          <span key={`about-first-headline${idx}`}>{`${text}${idx === 0 && ': '}`}</span>
        ))}
      </h3>
    </div>
  )
}

export default Header
