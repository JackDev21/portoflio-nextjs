import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar className="relative mt-7 flex h-52 w-48 shrink-0 overflow-hidden rounded-full shadow-2xl">
      <AvatarImage src="./JackDev21IA.jpg" alt="Foto Jack" />
      <AvatarFallback>JackDev</AvatarFallback>
    </Avatar>
  )
}
