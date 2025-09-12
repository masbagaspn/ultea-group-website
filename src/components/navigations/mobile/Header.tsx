import { X } from 'lucide-react'

const NavbarHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1>
        <img src="/assets/logo/logotype-colored-white.png" className="h-6" />
        <span className="sr-only">Ultea Group</span>
      </h1>
      <button className="text-white">
        <X size={28} strokeWidth={1} />
      </button>
    </div>
  )
}

export default NavbarHeader
