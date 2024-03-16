import React, { createContext, useRef } from 'react'

export const ScrollContexts = createContext(null)

const ScrollContext = ({children}) => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)

    const scrollFnc =(ref)=> {
        if(ref && ref.current){
            window.scrollTo({
                top:ref.current.offsetTop,
                behavior: 'smooth'
            })
        }
    }

  return (
    <ScrollContexts.Provider value={{scrollFnc, homeRef, aboutRef, projectRef, contactRef}}>
      {children}
    </ScrollContexts.Provider>
  )
}

export default ScrollContext
