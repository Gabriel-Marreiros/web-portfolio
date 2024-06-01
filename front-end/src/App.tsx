import Home from "./components/Home"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Contacts from "./components/Contacts"


function App() {

  return (
    <>
      <Navbar />

      <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={1}>
        <Home />
        <AboutMe/>
        <Skills />
        <Projects />
        <Certifications />
        <Contacts />
      </main>
      
      <Footer />
    </>
  )
}

export default App
