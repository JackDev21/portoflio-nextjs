import { ExperienceItem } from "./ExperienceItem"

const experiences = [
    {
        startDate: "2022-01",
        endDate: "Presente",
        jobTitle: "Desarrollador Full Stack Senior",
        company: "TechCorp Inc.",
        description:
            "Lideré el desarrollo de aplicaciones web utilizando React y Node.js. Implementé arquitecturas escalables y mejoré el rendimiento de las aplicaciones existentes.",
    },
    {
        startDate: "2019-06",
        endDate: "2021-12",
        jobTitle: "Desarrollador Front-end",
        company: "WebSolutions Ltd.",
        description:
            "Desarrollé interfaces de usuario responsivas y accesibles utilizando React y Vue.js. Colaboré en la implementación de una nueva arquitectura de microservicios.",
    },
    {
        startDate: "2017-09",
        endDate: "2019-05",
        jobTitle: "Desarrollador Junior",
        company: "StartUp Innovations",
        description:
            "Participé en el desarrollo de aplicaciones móviles utilizando React Native. Aprendí y apliqué metodologías ágiles en un entorno de startup dinámico.",
    },
]

export function ExperienceTimeline() {
    return (
        <div className="container mx-auto h-full w-full">
            <h2 className="mb-8 text-center text-2xl font-bold">Experiencia Laboral</h2>
            <div className="wrap relative h-full overflow-hidden p-10">
                <div className="border-2-2 absolute left-1/2 h-full border border-primary border-opacity-20"></div>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
                ))}
            </div>
        </div>
    )
}