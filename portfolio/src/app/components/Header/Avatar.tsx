"use client"

import { Loader2 } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      <Avatar className="flexz relative mt-5 h-44 w-44 shrink-0 overflow-hidden rounded-es-xl shadow-2xl">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
        <AvatarImage
          src="/Jack131225.jpeg"
          alt="Foto Jack"
          onLoad={() => setIsLoading(false)}
          className={
            isLoading ? "object-cover object-[center_20%] opacity-0" : "object-cover object-[center_20%] opacity-100"
          }
        />
        <AvatarFallback>JackDev</AvatarFallback>
      </Avatar>
    </div>
  )
}
