import { AboutVideo } from "./components/AboutVideo/AboutVideo"
import { Education } from "./components/Education/Education"
import { Header } from "./components/Header/Header"
import { ProfileCard } from "./components/ProfileCard/ProfileCard"
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
      </section>
    </>
  )
}

export default App