import { ExperienceTimeline } from "./components/Experience"
import { Header } from "./components/Header"
import { ProjectList } from "./components/ProjectList"

export default function Home() {
    return (
        <>
            <Header />
            <ProjectList />
            <ExperienceTimeline />
        </>
    )
}
