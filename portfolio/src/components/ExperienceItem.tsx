import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

interface ExperienceItemProps {
  title: string
  company: string
  location: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

function ExperienceItem({
  title,
  company,
  location,
  duration,
  description,
  responsibilities,
  technologies,
}: ExperienceItemProps): React.ReactElement {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 w-full flex items-center flex-col justify-center">
      <h3 className="text-xl font-bold flex items-center">
        <FaBriefcase className="mr-2" />
        {title}
      </h3>
      <p className="text-sm text-gray-400 flex items-center">
        <FaCalendarAlt className="mr-2" />
        {duration}
      </p>
      <p className="text-sm text-gray-400 flex items-center">
        <FaMapMarkerAlt className="mr-2" />
        {location}
      </p>
      <h4 className="text-lg font-semibold mt-2">{company}</h4>
      <p className="mt-2">{description}</p>
      <ul className="list-disc list-inside mt-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p className="mt-2">
        <strong>Tecnologías utilizadas:</strong> {technologies.join(", ")}
      </p>
    </div>
  )
}

export default ExperienceItem
