import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className='py-4'>
     <Header />
     <Hero />
     <About />
     <Project />
     <Contact />
    </div>
  )
}

export default App
