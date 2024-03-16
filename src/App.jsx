import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import ScrollContext from './store/ScrollContext'

function App() {

  return (
    <ScrollContext>
    <div className='py-4'>
     <Header />
     <Hero />
     <About />
     <Project />
     <Contact />
    </div>
    </ScrollContext>
  )
}

export default App
