import Link from "next/link"
import Footer from "@/components/Footer"
import ExperienceItem from "@/components/ExperienceItem"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa"
import { experiences } from "../utils/experiences"

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-800 gap-5 mt-3 p-5">
        <div className="flex flex-wrap gap-3 text-lg text-white font-extrabold bg-gray-600 rounded-2xl px-5 py-2">
          <a className="hover:text-blue-800" href="#footer">
            Experiencia
          </a>
          <a className="hover:text-blue-800" href="#footer">
            Proyectos
          </a>
          <a className="hover:text-blue-800" href="#footer">
            Sobre mí
          </a>
          <a className="hover:text-blue-800" href="#footer">
            Contacto
          </a>
        </div>
        <h1 className="text-white font-extrabold text-center text-2xl md:text-4xl">Desarrollador Full Stack</h1>
        <Avatar className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]">
          <AvatarImage src="/img/avatar.jpeg" className="w-[6rem] h-[8rem] md:w-[8rem] md:h-[10rem]" />
          <AvatarFallback>Jose A.</AvatarFallback>
        </Avatar>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="https://www.linkedin.com/in/joseaclopez/">
            <Button className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <FaLinkedin className="mr-2" />
              Linkedin
            </Button>
          </Link>
          <Button className="bg-gray-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg flex items-center">
            <FaEnvelope className="mr-2" />
            Contáctame
          </Button>
        </div>

        <div className="w-full md:w-[40rem]">
          <h2 className="text-white font-bold flex items-center text-xl md:text-2xl">
            <FaBriefcase className="mr-2" />
            Experiencia Laboral
          </h2>
        </div>
        <div className="w-full md:w-[40rem]">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xs md:max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Footer />
      </div>
    </>
  )
}
