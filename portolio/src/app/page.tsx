import { ExperienceTimeline } from "./components/Experience"
import { Header } from "./components/Header"
import { ProjectList } from "./components/ProjectList"
import { Technologies } from "./components/Technologies"

export default function Home() {
    return (
        <>
            <Header />
            <ProjectList />
            <Technologies />
            <ExperienceTimeline />
        </>
    )
}
