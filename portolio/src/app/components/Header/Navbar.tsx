import Link from "next/link"

export function Navbar() {
  return (
    <nav
      id="start"
      className="font-gaming flex items-center justify-center gap-6 text-[0.7rem] md:mr-14 md:flex-row md:justify-end md:gap-7 md:text-xl"
    >
      <Link href="#about" className="text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
        Sobre mí
      </Link>
      <Link href="#projects" className="text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
        Proyectos
      </Link>
      <Link href="#contact" className="text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
        Contacto
      </Link>
    </nav>
  )
}
