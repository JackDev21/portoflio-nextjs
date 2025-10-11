import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  images?: string[]
  imageFit?: "cover" | "contain"
  technologies: string[]
  video: string
  gitHubLink: string[]
  url?: string
}

export function ProjectsCard({
  title,
  description,
  image,
  images,
  imageFit,
  gitHubLink,
  video,
  technologies,
  url,
}: ProjectCardProps) {
  const embedUrl = video.replace("watch?v=", "embed/")
  const [selected, setSelected] = useState(0)
  const gallery = images && images.length > 0 ? images : image ? [image] : []

  return (
    <Card className="w-[395px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 w-full overflow-hidden">
          {video ? (
            <iframe src={embedUrl} allowFullScreen className="h-full w-full" />
          ) : gallery.length > 0 ? (
            <>
              <div className="relative mb-2 flex h-72 w-full items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={gallery[selected]}
                  alt={`${title} ${selected + 1}`}
                  layout="fill"
                  objectFit={imageFit ?? "contain"}
                  className="rounded-md"
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-2 flex max-w-full gap-2 overflow-x-auto px-1">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(idx)}
                      className={`relative h-16 w-20 flex-none overflow-hidden rounded border ${selected === idx ? "ring-2 ring-green-500" : ""}`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    >
                      <Image src={img} alt={`${title} thumb ${idx + 1}`} layout="fill" objectFit="cover" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-60 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
              No preview
            </div>
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
        <Badge className="mx-5 mb-6 inline-flex max-w-[220px] justify-center truncate px-3 py-2">
          <Link href={url} className="truncate">
            {" "}
            {url}{" "}
          </Link>
        </Badge>
      )}
    </Card>
  )
}
