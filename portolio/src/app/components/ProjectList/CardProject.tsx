import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  video: string
  gitHubLink: string[]
  url?: string
}

export function ProjectsCard({ title, description, image, gitHubLink, video, technologies, url }: ProjectCardProps) {
  const embedUrl = video.replace("watch?v=", "embed/")

  return (
    <Card className="w-[395px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 h-60 w-full">
          {video ? (
            <iframe src={embedUrl} allowFullScreen className="h-full w-full" />
          ) : (
            <Image src={image} alt={title} layout="fill" objectFit="fill" className="rounded-md" />
          )}
        </div>
        <CardDescription dangerouslySetInnerHTML={{ __html: description }} />
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
        <div className="flex items-center">
          {gitHubLink.map((link, index) => (
            <Link href={link} key={index}>
              <FaGithub className="ml-1 cursor-pointer text-4xl hover:text-orange-500" />
            </Link>
          ))}
        </div>
      </CardFooter>

      {url && (
        <Badge className="flex justify-center">
          <Link href={url}> {url} </Link>
        </Badge>
      )}
    </Card>
  )
}
