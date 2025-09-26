import Hero from "./Hero"
import Header from "./Header"
import About from './About'
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden min-h-screen">
      <Header />
      <About />
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  )
}