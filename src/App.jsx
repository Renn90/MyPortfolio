import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <div className='py-4'>
     <Header />
     <Hero />
     <About />
    </div>
  )
}

export default App
