import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
    return (
        <Avatar className="relative mt-7 flex h-44 w-48 shrink-0 overflow-hidden rounded-full">
            <AvatarImage src="./fotoJack.jpeg" alt="Foto Jack" />
            <AvatarFallback>JackDev</AvatarFallback>
        </Avatar>
    )
}
