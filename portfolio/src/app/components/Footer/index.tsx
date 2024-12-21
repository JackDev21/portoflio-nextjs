// filepath: /g:/portoflio-nextjs/portolio/src/app/components/Footer/index.tsx
import Link from "next/link"

export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="hidden bg-white py-4 font-bold text-black lg:block dark:bg-black dark:text-white">
            <div className="container mx-auto flex flex-col items-center justify-around gap-32 md:flex-row">
                <div id="contact" className="flex gap-2 text-center">
                    Email:
                    <Link href="mailto:jose.a.c.lopez@gmail.com" className="text-primary hover:underline">
                        jose.a.c.lopez@gmail.com
                    </Link>
                </div>
                <div className="text-center">
                    © {currentYear} Hecho con <span className="text-red-500">❤️</span> por JackDev
                </div>
            </div>
        </footer>
    )
}
