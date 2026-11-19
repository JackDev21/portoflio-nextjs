"use client"

import Image from "next/image"
import Link from "next/link"
import { useId, useLayoutEffect, useRef, useState } from "react"
import { FaGithub } from "react-icons/fa"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  title, description, image, images, imageFit, gitHubLink, video, technologies, url,
}: ProjectCardProps) {
  const [selected, setSelected] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [visibleSummary, setVisibleSummary] = useState<string>()
  const summaryProbeRef = useRef<HTMLDivElement>(null)
  const detailsId = useId()
  const gallery = images && images.length > 0 ? images : image ? [image] : []
  const embedUrl = video.replace("watch?v=", "embed/")
  // El resumen elimina las etiquetas sin recortar el HTML de la descripción original.
  const summary = description.replace(/<br\s*\/?\s*>/gi, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
  const truncated = visibleSummary !== undefined && visibleSummary !== summary

  // Mide el texto con el enlace incluido para que ambos quepan en las seis líneas disponibles.
  useLayoutEffect(() => {
    const probe = summaryProbeRef.current
    if (!probe) return

    const [text, ellipsis] = probe.children
    const words = summary.split(" ")
    function fitSummary() {
      if (!probe || probe.clientWidth === 0) return
      const availableHeight = Number.parseFloat(getComputedStyle(probe).lineHeight) * 6
      text.textContent = `${summary} `
      ellipsis.classList.add("hidden")
      if (probe.scrollHeight <= availableHeight) {
        setVisibleSummary(summary)
        return
      }

      ellipsis.classList.remove("hidden")
      let low = 0
      let high = words.length - 1
      while (low < high) {
        const middle = Math.ceil((low + high) / 2)
        text.textContent = words.slice(0, middle).join(" ")
        if (probe.scrollHeight <= availableHeight) low = middle
        else high = middle - 1
      }
      setVisibleSummary(words.slice(0, low).join(" "))
    }

    fitSummary()
    const observer = new ResizeObserver(fitSummary)
    if (probe.parentElement) observer.observe(probe.parentElement)
    document.fonts.addEventListener("loadingdone", fitSummary)
    return () => {
      observer.disconnect()
      document.fonts.removeEventListener("loadingdone", fitSummary)
    }
  }, [showDetails, summary])

  function renderPreview() {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-md bg-muted">
        {video ? (
          // Los MP4 locales utilizan controles de vídeo; los vídeos externos conservan su iframe.
          video.endsWith(".mp4") ? (
            <video src={video} controls preload="none" className="h-full w-full object-contain" aria-label={`Vídeo de ${title}`} />
          ) : (
            <iframe src={embedUrl} title={`Vídeo de ${title}`} allowFullScreen loading="lazy" className="h-full w-full" />
          )
        ) : gallery.length > 0 ? (
          <Image
            src={gallery[showDetails ? selected : 0]}
            alt={`${title} ${showDetails ? selected + 1 : 1}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 395px"
            className={imageFit === "cover" ? "object-cover" : "object-contain"}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Capturas próximamente</div>
        )}
      </div>
    )
  }

  const projectLinks = (
    <div className="flex min-h-8 flex-wrap items-center gap-3">
      {url && (
        <Button asChild variant="outline" size="sm">
          <Link href={url} target="_blank" rel="noopener noreferrer">Visitar web<span className="sr-only"> de {title}</span></Link>
        </Button>
      )}
      {gitHubLink.map((link, index) => (
        <Link key={link} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio ${index + 1} de ${title}`} className="rounded-sm text-2xl hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
          <FaGithub />
        </Link>
      ))}
    </div>
  )

  return (
    <Card className="flex min-w-0 flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2 h-12 leading-6">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {renderPreview()}
        {showDetails && !video && gallery.length > 1 && (
          <div className="flex gap-2 overflow-x-auto p-1">
            {gallery.map((img, index) => (
              <button key={img} type="button" onClick={() => setSelected(index)} aria-label={`Ver imagen ${index + 1} de ${title}`} aria-pressed={selected === index} className={`relative h-16 w-20 shrink-0 overflow-hidden rounded border ${selected === index ? "ring-2 ring-green-500" : ""}`}>
                <Image src={img} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
        {/* La acción queda en la misma línea que el final del texto siempre que haya espacio. */}
        <div className="relative">
          <CardDescription className={showDetails ? "whitespace-pre-line break-words leading-6" : "line-clamp-6 h-[7.5rem] break-words leading-5"}>
            {showDetails ? (
              <span id={detailsId} dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              <span id={detailsId}>{visibleSummary ?? summary}</span>
            )}{(showDetails || !truncated) && " "}
            <span className="whitespace-nowrap">
              {!showDetails && truncated && "… "}
              <button
                type="button"
                className="font-medium text-foreground/80 underline decoration-foreground/30 underline-offset-2 hover:text-foreground focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                onClick={() => setShowDetails((open) => !open)}
                aria-expanded={showDetails}
                aria-controls={detailsId}
              >
                {showDetails ? "Ver menos" : "Ver más"}<span className="sr-only"> sobre {title}</span>
              </button>
            </span>
          </CardDescription>
          {!showDetails && (
            <CardDescription ref={summaryProbeRef} aria-hidden="true" className="pointer-events-none invisible absolute inset-x-0 top-0 break-words leading-5">
              <span />
              <span className="whitespace-nowrap">… <span className="font-medium">Ver más</span></span>
            </CardDescription>
          )}
        </div>
        <div className={`flex flex-wrap content-start gap-2 ${showDetails ? "" : "h-16 overflow-hidden"}`} aria-label={showDetails ? "Tecnologías" : "Tecnologías principales"}>
          {(showDetails ? technologies : technologies.slice(0, 4)).map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
          {!showDetails && technologies.length > 4 && <Badge variant="outline">+{technologies.length - 4}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col items-stretch gap-3">
        {projectLinks}
      </CardFooter>
    </Card>
  )
}
