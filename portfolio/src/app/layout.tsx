import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google"

import { ContactContextProvider } from "@/app/context/ContactContext"
import { Toaster } from "@/components/ui/toaster"

import { ContactForm } from "./components/ContactForm"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Portolio Jack",
  description: "Portfolio Jose A. Cantó",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}>
        <ThemeProvider>
          <ContactContextProvider>
            <ContactForm />
            <Toaster />
            {children} <Navbar /> <Footer /> <Analytics />
          </ContactContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
