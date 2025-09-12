import STATIC from '@static/about'

const LeftContainerHeader = () => {
  const SPLIT_SUBHEADLINE = STATIC.BENEFIT.SUBHEADLINE.split(': ')

  return (
    <div className="text-tertiary flex w-full flex-col gap-6">
      <p className="col-span-2 inline-flex flex-col text-5xl">
        {SPLIT_SUBHEADLINE.map((text, idx) => (
          <span key={`about-first-subheadline-${idx}`}>{`${text}${idx === 0 && ': '}`}</span>
        ))}
      </p>
    </div>
  )
}

export default LeftContainerHeader
