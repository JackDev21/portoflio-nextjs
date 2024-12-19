import Link from "next/link"
import { FaDiscord, FaEnvelope, FaGithub, FaHome, FaLinkedin } from "react-icons/fa"

import { ModeToggle } from "../ModeToggle"

export function Navbar() {
  return (
    <div
      id="contact"
      className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 transform rounded-2xl bg-gray-800 text-white shadow-lg"
    >
      <div className="flex items-center justify-center gap-5 p-4">
        <Link href="#start" className="group">
          <FaHome className="transform text-3xl transition-transform group-hover:scale-150 group-hover:text-gray-400" />
        </Link>
        <Link href="https://github.com/JackDev21" target="_blank" rel="noopener noreferrer" className="group">
          <FaGithub className="transform text-3xl transition-transform group-hover:scale-150 group-hover:text-gray-400" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joseaclopez/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaLinkedin className="transform text-3xl transition-transform group-hover:scale-150 group-hover:text-gray-400" />
        </Link>
        <Link href="mailto:jose.a.c.lopez@gmail.com" className="group">
          <FaEnvelope className="transform text-3xl transition-transform group-hover:scale-150 group-hover:text-gray-400" />
        </Link>
        <Link
          href="https://discord.com/users/@690176825258934340"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaDiscord className="transform text-3xl transition-transform group-hover:scale-150 group-hover:text-gray-400" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}
