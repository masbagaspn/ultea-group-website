import { cn } from '@lib/utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<'section'>

const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section className={cn('px-10 py-20', className)} {...rest}>
      {children}
    </section>
  )
}

export default Section
