import { ProjectsCard } from "./CardProject"

const projects = [
    {
        title: "Mi Proyecto Awesome",
        description: "Este es un proyecto increíble que hice con React y Next.js",
        image: "/placeholder.svg?height=200&width=350",
        technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Super App",
        description: "Una aplicación super poderosa construida con React Native",
        image: "/placeholder.svg?height=200&width=350",
        technologies: ["React Native", "Expo", "Firebase"],
    },
    // Puedes agregar más proyectos aquí
]

export function ProjectList() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
            ))}
        </div>
    )
}
