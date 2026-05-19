import React from 'react'
import NavBar from '../Layouts/NavBar'
import Hero from '../Sections/Hero'
import About from '../Sections/About'        // <-- fixed import
import Projects from '../Sections/Projects'
import Experience from "../Sections/Experience"
import Testimonials from "../Sections/Testimonials"
import Contact from '../Sections/Contact'

const Main = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Contact/>
        <Projects/>
        <Experience/>
        <Testimonials/>
      </main>
    </div>
  )
}

export default Main
