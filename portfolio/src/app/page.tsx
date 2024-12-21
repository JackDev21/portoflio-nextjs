import { About } from "./components/About/About"
import { ExperienceTimeline } from "./components/Experience"
import { Header } from "./components/Header"
import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground"
import { ProjectList } from "./components/ProjectList"
import { Technologies } from "./components/Technologies"

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <About />
      <ProjectList />
      <Technologies />
      <ExperienceTimeline />
    </>
  )
}
