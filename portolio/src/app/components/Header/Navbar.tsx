import Link from "next/link"

export function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-center gap-4 md:mr-14 md:flex-row md:justify-end md:gap-4">
                <Link href="#about" className="text-white">
                    Sobre mí
                </Link>
                <Link href="#projects" className="text-white">
                    Proyectos
                </Link>
                <Link href="#contact" className="text-white">
                    Contacto
                </Link>
            </nav>
        </>
    )
}
