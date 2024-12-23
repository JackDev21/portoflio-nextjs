"use client"

import Link from "next/link"
import { useContext } from "react"

import { ContactContext } from "@/app/context/ContactContext"

export function Navbar() {
  const { showContact, setShowContact } = useContext(ContactContext)

  const handleShowContact = () => {
    setShowContact(!showContact)
  }

  return (
    <nav
      id="start"
      className="font-gaming flex items-center justify-center gap-6 text-[0.6rem] md:mr-14 md:flex-row md:justify-end md:gap-7 md:text-xl"
    >
      <Link href="#about" className="text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
        Sobre mí
      </Link>
      <Link href="#projects" className="text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
        Proyectos
      </Link>
      <button
        onClick={handleShowContact}
        className="m-0 border-none bg-transparent p-0 text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500"
      >
        Contacto
      </button>
    </nav>
  )
}
