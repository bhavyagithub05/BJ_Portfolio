import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className='flex flex-col justify-center items-center  self-center content-center gap-1 bg-gradient-to-b from-[#cddbff] to-[#D6A4A4] font-sans'>
      <Navbar/>
      
      {/* Make sure each section has the correct ID */}
      <section id="home">
        <Header/>
      </section>
      
      <section id="skills">
        <Skills/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App