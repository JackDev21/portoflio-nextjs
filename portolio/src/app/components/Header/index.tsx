import HyperText from "@/components/ui/hyper-text"

import { AvatarDemo } from "./Avatar"
import { Navbar } from "./Navbar"

export function Header() {
  return (
    <div className="relative w-full p-5">
      <Navbar />
      <div className="flex flex-col items-center justify-center space-y-4">
        <AvatarDemo />
        <div className="flex flex-col gap-1 text-center text-xl font-bold text-gray-900 dark:text-white sm:flex-row md:text-3xl">
          <span className="text-4xl sm:text-5xl">👋🏼</span>
          <HyperText text="Hola, soy Jose Agustín Cantó." />
        </div>
      </div>
    </div>
  )
}
