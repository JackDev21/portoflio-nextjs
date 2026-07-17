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
      className="flex items-center justify-center gap-6 text-sm sm:text-base font-semibold md:mr-14 md:flex-row md:justify-end md:gap-8"
    >
      <Link 
        href="#about" 
        className="text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-500 transition-colors"
      >
        Sobre mí
      </Link>
      <Link 
        href="#projects" 
        className="text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-500 transition-colors"
      >
        Proyectos
      </Link>
      <button
        onClick={handleShowContact}
        className="m-0 border-none bg-transparent p-0 text-gray-700 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-500 transition-colors cursor-pointer"
      >
        Contacto
      </button>
    </nav>
  )
}
