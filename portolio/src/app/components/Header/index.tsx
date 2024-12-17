import HyperText from "@/components/ui/hyper-text"

import { ModeToggle } from "../ModeToggle"
import { ParticlesBackground } from "../ParticlesBackground/ParticlesBackground"
import { AvatarDemo } from "./Avatar"
import { Navbar } from "./Navbar"

export function Header() {
    return (
        <div className="relative w-full p-5">
            <ParticlesBackground />
            <div className="absolute right-4 top-4">
                <ModeToggle />
            </div>
            <Navbar />
            <div className="flex flex-col items-center justify-center space-y-4">
                <AvatarDemo />
                <div className="flex gap-1 text-center text-3xl font-bold text-white">
                    👋🏼
                    <HyperText text="Hola , soy Jose Agustín Cantó." />
                </div>
                <div className="max-w-xl text-center text-lg text-white">
                    Soy desarrollador full stack de Alicante, España. Especializado en el desarrollo de aplicaciones
                    web.
                </div>
            </div>
        </div>
    )
}
