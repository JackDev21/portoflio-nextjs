"use client"

import { motion } from "framer-motion"

import { projects } from "@/app/data"

import { ProjectsCard } from "./CardProject"

export function ProjectList() {
  return (
    <div className="container mx-auto mb-10 py-2">
      <div>
        <h2 id="projects" className="mb-7 text-center text-4xl font-bold text-green-800 dark:text-green-200">
          Proyectos
        </h2>
      </div>
      {/* Cada fila crece según su contenido, sin estirar las tarjetas que siguen plegadas. */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-6 px-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="min-w-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <ProjectsCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
