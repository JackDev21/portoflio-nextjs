import Link from "next/link"
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa"

import { ModeToggle } from "../ModeToggle"

export function Footer() {
    return (
        <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-2xl bg-gray-800 text-white shadow-lg">
            <div className="flex items-center justify-center gap-5 p-4">
                <Link href="/" className="group">
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
                <ModeToggle />
            </div>
        </footer>
    )
}
