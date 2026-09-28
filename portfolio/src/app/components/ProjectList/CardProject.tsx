import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
  const [expanded, setExpanded] = useState(false)
  const gallery = images && images.length > 0 ? images : image ? [image] : []
  const visibleTechnologies = expanded ? technologies : technologies.slice(0, 5)
  const hasMoreDetails = description.length > 180 || technologies.length > 5

  return (
    <Card className="flex h-full w-full max-w-[395px] flex-col overflow-hidden sm:w-[395px]">
      <CardHeader className="pb-4">
        <CardTitle className="leading-snug">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4 w-full overflow-hidden">
          {video ? (
            <iframe src={embedUrl} title={`Vídeo de ${title}`} allowFullScreen className="aspect-video w-full rounded-md" />
          ) : gallery.length > 0 ? (
            <>
              <div className="relative mb-2 flex h-56 w-full items-center justify-center overflow-hidden rounded-md bg-gray-50 dark:bg-gray-900">
                <Image
                  src={gallery[selected]}
                  alt={`${title} ${selected + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 395px"
                  style={{ objectFit: imageFit ?? "contain" }}
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
                      <Image src={img} alt={`${title} miniatura ${idx + 1}`} fill sizes="80px" className="object-cover" />
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
        <CardDescription
          className={`whitespace-pre-line leading-relaxed ${expanded ? "" : "line-clamp-4"}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {hasMoreDetails && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className="mt-3 text-sm font-semibold text-green-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-green-300"
          >
            {expanded ? "Ver menos" : "Ver más detalles"}
          </button>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <Badge variant="secondary" key={tech}>{tech}</Badge>
          ))}
          {!expanded && technologies.length > 5 && <Badge variant="outline">+{technologies.length - 5}</Badge>}
        </div>
        <div className="flex flex-wrap gap-2">
          {url && (
            <Link href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-green-300 dark:text-gray-950 dark:hover:bg-green-200">
              Ver proyecto <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          )}
          {gitHubLink.map((link, index) => (
            <Link href={link} key={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-semibold hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-800">
              <FaGithub aria-hidden="true" className="h-4 w-4" />
              {gitHubLink.length > 1 ? `Código ${index + 1}` : "Código"}
            </Link>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
