import HyperText from "@/components/ui/hyper-text"

import { Footer } from "../Footer"
import { ParticlesBackground } from "../ParticlesBackground/ParticlesBackground"
import { AvatarDemo } from "./Avatar"
import { Navbar } from "./Navbar"

export function Header() {
    return (
        <div className="relative w-full p-5">
            <ParticlesBackground />

            <Navbar />
            <div className="flex flex-col items-center justify-center space-y-4">
                <AvatarDemo />
                <div className="flex flex-col gap-1 text-center text-2xl font-bold text-gray-900 sm:flex-row sm:text-3xl dark:text-white">
                    <span className="text-4xl sm:text-5xl">👋🏼</span>
                    <HyperText text="Hola, soy Jose Agustín Cantó." />
                </div>
                <div className="max-w-xl text-center text-lg text-gray-900 dark:text-white">
                    Soy desarrollador full stack de Alicante, España. Especializado en el desarrollo de aplicaciones
                    web.
                </div>
            </div>
        </div>
    )
}
