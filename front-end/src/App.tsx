import { AboutVideo } from "./components/AboutVideo/AboutVideo"
import { Education } from "./components/Education/Education"
import { Header } from "./components/Header/Header"
import { ProfileCard } from "./components/ProfileCard/ProfileCard"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"


function App() {

  return (
    <>
      <Header />
      <main>
        <ProfileCard />
      </main>

      <section id="detalhes">
        <AboutVideo/>
        <Skills />
        <Education />
        <Projects/>
      </section>
    </>
  )
}

export default App