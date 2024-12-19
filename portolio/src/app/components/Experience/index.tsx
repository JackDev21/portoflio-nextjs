import { experiences } from "@/app/data"

import { ExperienceItem } from "./ExperienceItem"

export function ExperienceTimeline() {
  return (
    <div className="container mx-auto mb-36 h-full w-full">
      <h2 className="mb-5 text-center text-4xl font-bold text-green-800 dark:text-green-200">Experiencia</h2>
      <div className="relative h-full p-10">
        <div
          className="absolute left-1/2 hidden h-full border border-primary border-opacity-20 md:block"
          style={{ transform: "translateX(-50%)" }}
        ></div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}
