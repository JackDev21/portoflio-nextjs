"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        if (resolvedTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [resolvedTheme])

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            {resolvedTheme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
