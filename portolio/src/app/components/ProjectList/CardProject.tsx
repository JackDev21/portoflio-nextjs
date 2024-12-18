import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
    title: string
    description: string
    image: string
    technologies: string[]
}

export function ProjectsCard({ title, description, image, technologies }: ProjectCardProps) {
    return (
        <Card className="w-[395px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative mb-4 h-[200px] w-full">
                    <Image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                    />
                </div>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <div className="cursor-context-menu" key={index}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Badge variant="secondary">{tech}</Badge>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Tecnología utilizada: {tech}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}
