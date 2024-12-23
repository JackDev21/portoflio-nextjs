"use client"

import { createContext, useState } from "react"

interface ContactContextType {
  showContact: boolean
  setShowContact: (value: boolean) => void
}

export const ContactContext = createContext<ContactContextType>({} as ContactContextType)

export function ContactContextProvider({ children }: { children: React.ReactNode }) {
  const [showContact, setShowContact] = useState(false)

  return <ContactContext.Provider value={{ showContact, setShowContact }}>{children}</ContactContext.Provider>
}
