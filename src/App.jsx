import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'

function App() {

  return (
    <div className='py-4'>
     <Header />
     <Hero />
     <About />
     <Project />
    </div>
  )
}

export default App
