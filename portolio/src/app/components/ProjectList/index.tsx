import { ProjectsCard } from "./CardProject"

const projects = [
    {
        title: "Mi Proyecto Awesome",
        description: "Este es un proyecto increíble que hice con React y Next.js",
        image: "/example.png",
        technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Super App",
        description: "Una aplicación super poderosa construida con React Native",
        image: "/example.png",
        technologies: ["React Native", "Expo", "Firebase"],
    },
    // Puedes agregar más proyectos aquí
]

export function ProjectList() {
    return (
        <div className="container mx-auto mb-10 py-2">
            <div>
                <h2 id="projects" className="mb-7 text-center text-4xl font-bold text-green-800 dark:text-green-200">
                    Proyectos
                </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => (
                    <ProjectsCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}
